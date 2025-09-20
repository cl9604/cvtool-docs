const { defineConfig } = require('@vue/cli-service')
const AutoRegisterPlugin = require('@pack/auto-register-plugin')

const isWatch = process.argv.includes('--watch')

const alias = []

const index = {
    entry: 'src/main.ts',
    template: 'public/index.html',
}

module.exports = defineConfig({
    pages: { index },
    outputDir: 'docs',
    publicPath: './',
    transpileDependencies: true,
    productionSourceMap: isWatch,
    configureWebpack: {
        plugins: [
            new AutoRegisterPlugin('src/packages', 'src/output'),
        ],
        resolve: {},
    },
    chainWebpack: (config) => {
        for (const alia of alias) config.resolve.alias.set(alia.label, alia.value)

        config.plugin('define').tap((options) => {
            return options
        })
    },
})