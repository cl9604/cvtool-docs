<template id="text">
  <div class="doc-sub-title">自动聚焦</div>
</template>

<template id="code">
  <cv-input v-model="input5" :autofocus="true"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInput } from '@cvtool/design'

const input5 = ref('')

</script>