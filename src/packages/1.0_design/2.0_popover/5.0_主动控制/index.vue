<template id="text">
  <div class="doc-sub-title">主动控制</div>
</template>

<template id="code">
  <cv-button @click.stop="changeControls">{{ controls ? '关闭' : '打开' }}弹出层</cv-button>
  <cv-popover v-model="controls">
    <template #trigger>
      <span>触发元素</span>
    </template>
    这里是主动触发的弹出层内容
  </cv-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvPopover, CvButton } from '@cvtool/design';

const controls = ref(false)

const changeControls = () => {
  controls.value = !controls.value
}
</script>