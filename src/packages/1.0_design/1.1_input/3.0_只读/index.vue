<template id="text">
  <div class="doc-sub-title">只读</div>
</template>

<template id="code">
  <cv-input v-model="input3" :readonly="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInput } from '@cvtool/design'

const input3 = ref('')

</script>