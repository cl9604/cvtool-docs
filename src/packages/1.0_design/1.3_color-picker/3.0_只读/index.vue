<template id="text">
  <div class="doc-sub-title">只读</div>
</template>

<template id="code">
  <cv-color-picker v-model="input3" :readonly="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker } from '@cvtool/design'

const input3 = ref('#268AE7')

</script>