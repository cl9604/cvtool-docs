<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
  </div>
</template>

<template id="code">
  <cv-drapdown :data="options2" :custom="true">
    <cv-button>打开下拉菜单</cv-button>
  </cv-drapdown>
</template>

<script lang="ts" setup>
import { CvDrapdown, CvButton } from '@cvtool/design';

const options2 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
]

</script>