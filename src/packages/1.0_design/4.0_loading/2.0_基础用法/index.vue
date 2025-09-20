<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-button @click="showLoading2">展示loading 2s</cv-button>
</template>

<script lang="ts" setup>
import { CvButton, loading } from '@cvtool/design'

const showLoading2 = () => {
  loading.show()
  setTimeout(() => loading.close(), 2000);
}
</script>