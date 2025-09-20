<template id="text">
  <div class="doc-sub-title">有禁用选项</div>
</template>

<template id="code">
  <cv-drapdown :data="options3" :custom="true" :disabled="true">
    <cv-button>打开下拉菜单</cv-button>
  </cv-drapdown>
</template>

<script lang="ts" setup>
import { CvDrapdown, CvButton } from '@cvtool/design';

const options3 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
]

</script>