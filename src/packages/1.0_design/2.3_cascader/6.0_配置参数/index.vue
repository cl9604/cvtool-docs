<template id="text">
  <div class="doc-sub-title">配置参数</div>
</template>

<template id="code">
  <cv-cascader v-model="select6" :data="options6" :getter="getter"></cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const select6 = ref('')
const options6 = [
  { name: '选项1', id: '1' },
  { name: '选项2', id: 'value_2', status: true },
  { name: '选项3', id: 'value_3' },
]
const label6 = (item: { name: string }) => { return item.name }
const value6 = (item: { id: string }) => { return item.id }
const disabled6 = (item: { status: boolean }) => { return item.status }
const getter = { label: label6, value: value6, disabled: disabled6 }
</script>