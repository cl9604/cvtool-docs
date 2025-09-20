<template id="text">
  <div class="doc-sub-title">组合使用</div>
  <div class="doc-text">搭配Label组件一起使用</div>
</template>

<template id="code">
  <cv-label label="颜色"><cv-color-picker v-model="input4" /></cv-label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker, CvLabel } from '@cvtool/design'

const input4 = ref('')

</script>