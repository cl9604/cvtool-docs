<template id="text">
  <div class="doc-sub-title">步数</div>
  <div class="doc-text">
    允许定义递增递减的步数控制
  </div>
</template>

<template id="code">
  <cv-input-number v-model="input2_1" :step="1" :min="0" :max="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input2_1 = ref('')

</script>