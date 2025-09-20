<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <div :style="style2">
    <cv-dynamic-layouter></cv-dynamic-layouter>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CvDynamicLayouter } from '@cvtool/design';

const style2 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;'
})
</script>