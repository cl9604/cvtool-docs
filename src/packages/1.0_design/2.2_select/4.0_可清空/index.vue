<template id="text">
  <div class="doc-sub-title">可清空</div>
</template>

<template id="code">
  <cv-select v-model="select4" :data="options4" :clearable="true"></cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

const select4 = ref('')
const options4 = [
    { label: '星期一', value: '1' },
    { label: '星期二', value: '2' },
    { label: '星期三', value: '3' },
    { label: '星期四', value: '4' },
    { label: '星期五', value: '5' },
    { label: '星期六', value: '6' },
    { label: '星期日', value: '7' },
]

</script>