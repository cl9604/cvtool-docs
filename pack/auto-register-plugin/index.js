const { join, parse, sep } = require("path")
const { cwd } = require('process')
const { randomUUID } = require("crypto")
const { Parser } = require('htmlparser2');
const { transformSync } = require('@babel/core');
const { parse: getAst } = require('@babel/parser')
const { default: traverse } = require('@babel/traverse')
const { default: generate } = require('@babel/generator')
const chokidar = require('chokidar')
const fs = require('fs-extra')

const parsePath = (path, file) => {
    if (file) {
        return parse(path)
    } else {
        const result = { dir: '', name: '', ext: '' }
        const clips = path.split(sep)
        result.name = clips.pop() ?? ''
        result.dir = clips.join(sep)
        return result
    }
}

const filterImport = (path, importMap) => {
    const specifiers = []
    for (const specifier of path.node.specifiers) {
        if (importMap[specifier.local.name] === true) continue
        importMap[specifier.local.name] = true
        specifiers.push(specifier)
    }
    path.node.specifiers = specifiers
}

const rootTagName = '__cvtool_' + randomUUID()
const rootStartTag = `<${rootTagName}>`
const rootEndTag = `</${rootTagName}>`

const currentStack = [];
const createElementNode = (tag, attrs) => {
    return { tag, type: 1, children: [], attrs }
}
const createTextNode = (text) => {
    return { type: 3, text }
}
const parser = new Parser({
    onopentag(name, attribs) {
        const currentNode = currentStack[currentStack.length - 1];
        const newNode = createElementNode(name, Object.entries(attribs).map(([name, value]) => ({ name, value })))
        currentNode.children.push(newNode);
        currentStack.push(newNode);
    },
    ontext(text) {
        const currentNode = currentStack[currentStack.length - 1];
        const trimmedText = text.trim();
        if (trimmedText) {
            currentNode.children.push(createTextNode(trimmedText));
        }
    },
    onclosetag(name) {
        currentStack.pop();
    }
}, { recognizeSelfClosing: true });
const parseHtml = (html) => {
    const ast = createElementNode(rootTagName)

    currentStack.push(ast)

    parser.write(html)
    parser.end()

    currentStack.length = 0

    return ast
}
const hasAttrs = (node, name, value) => {
    for (const attr of node.attrs) {
        if (attr.name === name) {
            return value === undefined ? true : attr.value === value
        }
    }

    return false
}
const generateHtml = (ast, indentLevel = 0) => {
    let html = '';

    function processNode(node, currentIndentLevel) {
        if (node.type === 1) { // 元素节点
            let attrsString = '';
            if (node.attrs && node.attrs.length > 0) {
                attrsString = node.attrs.map(attr => attr.value === undefined ? attr.name : `${attr.name}="${attr.value}"`).join(' ');
            }
            html += `${'    '.repeat(currentIndentLevel)}<${node.tag}${attrsString ? ` ${attrsString}` : ''}>\n`;
            node.children.forEach(child => processNode(child, currentIndentLevel + 1));
            html += `${'    '.repeat(currentIndentLevel)}</${node.tag}>\n`;
        } else if (node.type === 3) { // 文本节点
            html += `${'    '.repeat(currentIndentLevel - 1)}${node.text}\n`; // 减少一级缩进
        }
    }

    processNode(ast, indentLevel);

    return html.trim(); // 去除最后多余的换行
}
const convertTsToJs = (tsCode) => {
    if (tsCode.trim() === '') return ''
    // 配置 Babel
    const result = transformSync(tsCode, {
        filename: 'virtualFile.ts',  // 虚拟文件名
        presets: [
            [
                '@babel/preset-typescript',
                {
                    onlyRemoveTypeImports: true,
                    isTSX: false,
                    allExtensions: true,
                    allowDeclareFields: true,
                },
            ],
        ],
        plugins: [],
        babelrc: false,
        configFile: false,
    });

    if (!result || !result.code) {
        throw new Error('Failed to compile TypeScript code.');
    }

    return result.code;
}

class VirtualPath {

    constructor(path, file) {
        this.path = path
        this.file = file
        this.parent = null
        this.children = []

        const parseData = parsePath(path, file)
        this.dir = parseData.dir
        this.name = parseData.name
        this.suffix = parseData.ext
        const clips = this.name.split('_')
        this.order = file ? Infinity : parseFloat(clips[0])
        this.componentName = clips[1]
        this.componentPath = randomUUID()
    }

    add(vp) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].path === vp.path) return
        }
        this.children.push(vp)
        vp.parent = this
    }

    remove(vp) {
        for (let i = 0; i < this.children.length; i++) {
            if (this.children[i].path === vp.path) {
                this.children.splice(i, 1)
                vp.parent = null
            }
        }
    }

    find(path) {
        for (const sub of this.children) {
            if (sub.path === path) return sub
            const vp = sub.find(path)
            if (vp !== null) return vp
        }

        return null
    }

    get(path) {
        if (this.path === path) return this

        return this.find(path)
    }

    getParentAll(list = []) {
        if (!this.parent) return list
        list.push(this.parent)
        return this.parent.getParentAll(list)
    }

    traverse(cb, parent = []) {
        for (const sub of this.children) {
            cb(sub, parent)
            sub.traverse(cb, [...parent, sub])
        }
    }
}

/**
 * 自动注册插件
 * 
 * 插件会自动监听根目录下的所有文件的创建与删除并生成目录树
 * 
 */
class AutoRegisterPlugin {
    needUpdate = true
    source
    output
    tree

    constructor(source, output) {
        this.source = join(cwd(), source)
        this.output = join(cwd(), output)
        this.tree = new VirtualPath(this.source, false)
        this.buildTree(this.source)
    }

    buildTree(parent) {
        const dirs = fs.readdirSync(parent)
        for (const dir of dirs) {
            const subDir = join(parent, dir)
            const stat = fs.statSync(subDir)
            const file = stat.isFile()
            this.create(subDir, file)
            if (file === false) this.buildTree(subDir)
        }
    }

    apply(compiler) {
        const watcher = chokidar.watch(this.source, { ignoreInitial: true })
        watcher.on('add', (path) => this.create(path, true))
        watcher.on('unlink', (path) => this.delete(path))
        watcher.on('addDir', (path) => this.create(path, false))
        watcher.on('unlinkDir', (path) => this.delete(path))
        watcher.on('change', (path) => this.update(path))
        compiler.hooks.shutdown.tap('auto-register-plugin', () => watcher.close())
        this.compiler()
    }

    create(path, file) {
        if (this.source === path) return
        const vp = new VirtualPath(path, file)
        const parent = this.tree.get(vp.dir)
        if (parent) parent.add(vp)
        this.delayUpdate()
    }
    delete(path) {
        if (this.source === path) {
            this.tree.children.length = 0
        } else {
            const vp = this.tree.get(path)
            if (vp === null) return
            vp.parent.remove(vp)
            this.delayUpdate()
        }
    }

    delayUpdate() {
        if (this.needUpdate === false) return
        this.needUpdate = false
        setTimeout(() => this.compiler(), 150)
    }

    update(path) {
        for (const root of this.tree.children) {
            const node = root.get(path)
            if (!node) continue
            const output = this.sourceToOutput(root.path)
            const vueModules = this.getVueModules([node])
            const chunks = this.buildVueModules(vueModules, output)
            this.writeChunks(chunks, output, root.componentName, false)
        }
    }

    getVueFileList(root) {
        const files = []

        root.traverse((sub) => {
            if (sub.file === false) return
            if (/.vue$/.test(sub.path) === false) return
            files.push(sub)
        })

        return files.sort()
    }
    getVueModules(fileList) {
        const modules = new Map()

        for (const file of fileList) {
            const component = file.parent.parent
            modules.set(component.path, component)
        }

        return modules
    }
    getVueScriptLines(scriptContent, importMap) {
        const jsContent = convertTsToJs(scriptContent)
        const ast = getAst(jsContent, { sourceType: 'module' })
        traverse(ast, {
            ImportDeclaration(path) {
                filterImport(path, importMap)
            },
            ExportDeclaration(path) {
                path.remove()
            }
        })
        const script = generate(ast, {})
        return script.code.split('\n').filter(str => str ? true : false)
    }
    parseVueCode(content) {
        const ast = parseHtml(content)
        const textAst = parseHtml('')
        const codeAst = parseHtml('')
        const scriptAst = parseHtml('')
        for (const sub of ast.children) {
            //存在问题
            let list = [...sub.children]
            let parent
            if (sub.tag === 'template') {
                if (hasAttrs(sub, 'id', 'text')) {
                    parent = textAst
                } else if (hasAttrs(sub, 'id', 'code')) {
                    parent = codeAst
                }
            } else if (sub.tag === 'script') {
                parent = scriptAst
            }
            if (parent) {
                for (const sub of list) {
                    sub.parent = parent
                    parent.children.push(sub)
                }
            }
        }

        return {
            ast,
            input: content,
            text: { ast: textAst, html: generateHtml(textAst) },
            code: { ast: codeAst, html: generateHtml(codeAst) },
            script: { ast: scriptAst, html: generateHtml(scriptAst) },
        }
    }
    getVueCode(component) {
        const importMap = {}
        const templates = [`<template>`]
        const scripts = [`<script lang="ts" setup>`]
        const vars = []
        const children = [...component.children].sort((a, b) => a.order - b.order)
        for (const sub of children) {
            const filePath = join(sub.path, 'index.vue')
            if (!sub.get(filePath)) continue
            const vueResult = this.parseVueCode(fs.readFileSync(filePath, { encoding: 'utf-8' }))
            const varName = `cvScope_${vars.length}`
            templates.push(vueResult.text.html.replace(rootStartTag, '').replace(rootEndTag, ''))
            if (vueResult.code.ast.children.length !== 0) {
                templates.push(vueResult.code.html.replace(rootStartTag, `<cv-example :code="${varName}">`).replace(rootEndTag, '</cv-example>'))
            }
            const codeContent = vueResult.code.html.replace(rootStartTag, `<template>`).replace(rootEndTag, '</template>')
            const scriptContent = vueResult.script.html.replace(rootStartTag, '').replace(rootEndTag, '')
            vueResult.script.html.replace(rootStartTag, `<script lang="ts" setup>`).replace(rootEndTag, '</script>')
            vars.push(`export const ${varName} = ${'`' + codeContent}\n\n<script lang="ts" setup>${scriptContent}</script>` + '`')
            scripts.push(`import { ${varName} } from './${component.componentName}'`)
            scripts.push(...this.getVueScriptLines(scriptContent, importMap))
        }
        templates.push(`</template>`)
        scripts.push(`</script>`)

        const code = {
            vue: [...templates, ...scripts].join('\n'),
            var: vars.join('\n'),
        }

        return code
    }
    buildVueModules(modules, output) {
        const chunks = []

        const keys = modules.keys()
        for (const key of keys) {
            const component = modules.get(key)
            const fileName = `${component.componentName}.vue`
            const file = {
                order: component.order,
                fileName,
                path: { vue: join(output, fileName), var: join(output, `${component.componentName}.ts`) },
                componentName: component.componentName,
                componentPath: component.componentPath,
                code: this.getVueCode(component),
            }
            chunks.push(file)
        }
        chunks.sort((a, b) => a.order - b.order)

        return chunks
    }
    writeChunks(chunks, output, chunkName, writeOutput = true) {
        const routes = []

        for (const chunk of chunks) {
            const meta = {
                name: chunk.componentName,
                package: chunkName,
            }
            const route = [
                `{`,
                `    name:'/${chunk.componentPath}',`,
                `    path:'/${chunk.componentPath}',`,
                `    component: ()=>import('./${chunk.fileName}'),`,
                `    meta:${JSON.stringify(meta)},`,
                `},`,
            ]
            routes.push(...route)
            fs.ensureFileSync(chunk.path.var)
            fs.writeFile(chunk.path.var, chunk.code.var)
            fs.ensureFileSync(chunk.path.vue)
            fs.writeFile(chunk.path.vue, chunk.code.vue)
        }

        if (writeOutput === true) {
            const code = [
                "import { RouteRecordRaw } from 'vue-router'",
                "const routes: RouteRecordRaw[] = [",
                ...routes,
                "]",
                "",
                "export default routes",
            ]
            const outputPath = join(output, 'index.ts')
            fs.ensureFileSync(outputPath)
            fs.writeFile(outputPath, code.join('\n'))
        }
    }
    buildEntry(entrys, routes, root, chunks) {
        entrys.push(
            `import ${root.componentName} from './${root.name}'`,
        )
        const redirect = chunks.length === 0 ? "" : `redirect:'/${chunks[0].componentPath}',`
        routes.push(
            `    {`,
            `        name: '${root.componentName}',`,
            `        path: '/${root.componentName}',`,
            `        children: ${root.componentName},`,
            `        ${redirect}`,
            `    },`,
        )
    }
    writeEnetry(entrys, routes) {
        const code = [
            `import { RouteRecordRaw } from 'vue-router'`,
            ...entrys,
            `const routes: RouteRecordRaw[] = [`,
            ...routes,
            `]`,
            `export default routes`
        ]

        const outputFile = join(this.output, 'index.ts')
        fs.ensureFileSync(outputFile)
        fs.writeFileSync(outputFile, code.join('\n'))
    }

    sourceToOutput(path) {
        const clips = path.split(this.source)
        return join(this.output, clips[1] ?? '')
    }
    compiler() {
        const entrys = []
        const routes = []

        for (const root of this.tree.children) {
            if (root.file === true) continue
            const output = this.sourceToOutput(root.path)
            const fileList = this.getVueFileList(root)
            const vueModules = this.getVueModules(fileList)
            const chunks = this.buildVueModules(vueModules, output)
            this.writeChunks(chunks, output, root.componentName)
            this.buildEntry(entrys, routes, root, chunks)
        }
        this.writeEnetry(entrys, routes)
    }
}

module.exports = AutoRegisterPlugin