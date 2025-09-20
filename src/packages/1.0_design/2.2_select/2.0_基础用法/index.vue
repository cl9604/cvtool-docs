<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    适用广泛的基础单选
  </div>
</template>

<template id="code">
  <cv-select v-model="select2" :data="options2"></cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

const select2 = ref('')
const options2 = [
  { label: '星期一', value: '1' },
  { label: '星期二', value: '2' },
  { label: '星期三', value: '3' },
  { label: '星期四', value: '4' },
  { label: '星期五', value: '5' },
  { label: '星期六', value: '6' },
  { label: '星期日', value: '7' },
]

</script>