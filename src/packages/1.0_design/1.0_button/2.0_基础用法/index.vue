<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    基础的按钮用法。
  </div>
</template>

<template id="code">
  <cv-button @click="click">默认按钮</cv-button>
</template>

<script lang="ts" setup>
import { CvButton, notify } from '@cvtool/design'

const click = () => {
  notify.send('触发了按钮的 click 事件')
}
</script>
