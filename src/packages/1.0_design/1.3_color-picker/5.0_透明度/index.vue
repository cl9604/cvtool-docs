<template id="text">
  <div class="doc-sub-title">透明度</div>
  <div class="doc-text">使用透明度形式</div>
</template>

<template id="code">
    <cv-label label="颜色"><cv-color-picker v-model="input5" :opacity="true" /></cv-label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker, CvLabel } from '@cvtool/design'

const input5 = ref('')
</script>