export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_2 = `<template>
    <div style="width: 100%;height: 500px;" id="window_1" @wheel.stop.prevent="">
    </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue';
import { Asset, Engine, ServiceSchedulerDescriptor } from '@cvtool/engine';
import '@cvtool/three'

let PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH
if (PUBLIC_PATH) PUBLIC_PATH += '/'
const url = PUBLIC_PATH + 'cvtool/快速上手/map.scene.json'
Asset.load(url)

const engine = new Engine()

const setup = () => {
  engine.run('window_1')
  Asset.readly().then(() => {
    const descriptor = Asset.get
<ServiceSchedulerDescriptor>(url)
    engine.switch(descriptor)
  })
}

const free = () => {
  engine.clear()
}

onMounted(setup)
onBeforeUnmount(free)
</script>`