<template id="text">
  <div class="doc-sub-title">可搜索</div>
  <div class="doc-text">
    可以利用搜索功能快速查找选项
  </div>
</template>

<template id="code">
  <cv-select v-model="select7" :data="options7" :searchable="true" :clearable="true"></cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

const select7 = ref('')
const options7 = [
  { label: '星期一', value: '1' },
  { label: '星期二', value: '2' },
  { label: '星期三', value: '3' },
  { label: '星期四', value: '4' },
  { label: '星期五', value: '5' },
  { label: '星期六', value: '6' },
  { label: '星期日', value: '7' },
]

</script>