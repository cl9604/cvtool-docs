<template>

    <div class="doc-sub-title">
    安装
    </div>
    <div class="doc-card">
        <p>
        # npm
        </p>
        <p>
        npm install @cvtool/engine --save
        </p>
        <p>
        # yarn
        </p>
        <p>
        yarn add @cvtool/engine
        </p>
    </div>


    <div class="doc-sub-title">
    安装扩展
    </div>
    <div class="doc-text">
        <p>
        引擎安装后，可根据实际需求安装相应扩展，以增强其核心能力。例如：
        </p>
        <p>
        安装 @cvtool/vue 与 @cvtool/element-plus，可强化自定义表单功能；
        </p>
        <p>
        安装 @cvtool/three，可增强 3D 场景构建与渲染能力；
        </p>
        <p>
        安装 @cvtool/echarts，可提升图表可视化与展示效果。
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
        通过 Asset 加载场景数据
        </p>
        <p>
        通过 Engine 渲染场景
        </p>
    </div>

<cv-example :code="cvScope_2">
    <div style="width: 100%;height: 500px;" id="window_1" @wheel.stop.prevent="">
    </div>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './快速上手'
import { cvScope_1 } from './快速上手'
import { cvScope_2 } from './快速上手'
import { onBeforeUnmount, onMounted } from 'vue';
import { Asset, Engine, ServiceSchedulerDescriptor } from '@cvtool/engine';
import '@cvtool/three';
const url = 'cvtool/快速上手/map.scene.json';
Asset.load(url);
const engine = new Engine();
const setup = () => {
  engine.run('window_1');
  Asset.readly().then(() => {
    const descriptor = Asset.get(url);
    engine.switch(descriptor);
  });
};
const free = () => {
  engine.clear();
};
onMounted(setup);
onBeforeUnmount(free);
</script>