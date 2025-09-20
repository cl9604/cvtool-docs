<template id="text">
  <div class="doc-sub-title">只读</div>
</template>

<template id="code">
  <cv-input-number v-model="input3" :readonly="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input3 = ref(1.23)

</script>