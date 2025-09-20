<template id="text">
  <div class="doc-sub-title">3.0_垂直布局</div>
</template>

<template id="code">
  <div :style="style3">
    <cv-dynamic-layouter :mode="'vertical'"></cv-dynamic-layouter>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CvDynamicLayouter } from '@cvtool/design';

const style3 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;'
})
</script>