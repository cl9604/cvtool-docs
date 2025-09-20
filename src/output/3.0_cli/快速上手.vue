<template>

    <div class="doc-sub-title">
    安装
    </div>
    <div class="doc-card">
        <p>
        # npm
        </p>
        <p>
        npm install @cvtool/cli -g
        </p>
        <p>
        # yarn
        </p>
        <p>
        yarn global add @cvtool/cli
        </p>
    </div>


    <div class="doc-sub-title">
    安装扩展
    </div>
    <div class="doc-text">
        <p>
        cli安装后，可根据实际需求安装相应扩展，以增强其核心能力。例如：
        </p>
        <p>
        安装 @cvtool/vue 、 @cvtool/element-plus 与 @cvtool/element-plus-browser，可强化自定义表单功能；
        </p>
        <p>
        安装 @cvtool/three 与 @cvtool/three-browser，可增强 3D 场景构建与渲染能力；
        </p>
        <p>
        安装 @cvtool/echarts 与 @cvtool/echarts-browser，可提升图表可视化与展示效果。
        </p>
    </div>
    <div class="doc-card">
        <p>
        # npm
        </p>
        <p>
        npm install @cvtool/vue @cvtool/element-plus @cvtool/three @cvtool/echarts --save
        </p>
        <p>
        # yarn
        </p>
        <p>
        yarn add @cvtool/vue @cvtool/element-plus @cvtool/three @cvtool/echarts
        </p>
    </div>


    <div class="doc-sub-title">
    开始使用
    </div>
    <div class="doc-text">
        <p>
        将 node_modules/@cvtool/ 中的扩展包复制到项目根目录的 extension/ 文件夹
        </p>
        <p>
        在项目根目录运行命令：cvtool -b
        </p>
        <p>
        访问终端中显示的服务地址即可使用
        </p>
    </div>
    <div class="doc-card">
        <img style="width: 100%;" src="cvtool/static/editor.png" alt="编辑器">
        </img>
    </div>

</template>
<script lang="ts" setup>
import { cvScope_0 } from './快速上手'
import { cvScope_1 } from './快速上手'
import { cvScope_2 } from './快速上手'
</script>