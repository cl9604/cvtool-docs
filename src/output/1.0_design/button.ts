export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-button @click="click">
    默认按钮
    </cv-button>
</template>

<script lang="ts" setup>
import { CvButton, notify } from '@cvtool/design'

const click = () => {
  notify.send('触发了按钮的 click 事件')
}
</script>`