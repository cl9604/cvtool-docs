<template id="text">
  <div class="doc-sub-title">开始使用</div>
  <div class="doc-text">
    <p>通过 Asset 加载场景数据</p>
    <p>通过 Engine 渲染场景</p>
  </div>
</template>

<template id="code">
  <div style="width: 100%;height: 500px;" id="window_1" @wheel.stop.prevent></div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { Asset, Engine, ServiceSchedulerDescriptor } from '@cvtool/engine';
import '@cvtool/three'

Asset.baseUrl = process.env.VUE_APP_PUBLIC_PATH
const url = 'cvtool/快速上手/map.scene.json'
Asset.load(url)

const engine = new Engine()

const setup = () => {
  engine.run('window_1')
  Asset.readly().then(() => {
    const descriptor = Asset.get<ServiceSchedulerDescriptor>(url)
    engine.switch(descriptor)
  })
}

const free = () => {
  engine.clear()
}

onMounted(setup)
onBeforeUnmount(free)
</script>
