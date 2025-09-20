<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-provider :readonly="true">
    <cv-input v-model="input2"></cv-input>
  </cv-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvProvider, CvInput } from '@cvtool/design'

const input2 = ref('')

</script>