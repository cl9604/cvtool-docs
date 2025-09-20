<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-input-number v-model="input2" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input2 = ref('')

</script>