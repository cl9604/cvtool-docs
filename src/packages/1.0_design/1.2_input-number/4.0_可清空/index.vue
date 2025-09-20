<template id="text">
  <div class="doc-sub-title">可清空</div>
</template>

<template id="code">
    <cv-input-number v-model="input4" :clearable="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input4 = ref('')

</script>