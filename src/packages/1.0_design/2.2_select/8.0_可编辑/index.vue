<template id="text">
  <div class="doc-sub-title">可编辑</div>
  <div class="doc-text">
    快捷操作
  </div>
</template>

<template id="code">
  <cv-select v-model="select8" :data="options8" :searchable="true" :clearable="true" :addable="true" :editable="true"
    :removable="true" @add="handleAdd" @edit="handleEdit" @remove="handleRemove">
  </cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

let count8 = 8
const select8 = ref('')
const options8 = ref([
  { label: '星期一', value: '1' },
  { label: '星期二', value: '2' },
  { label: '星期三', value: '3' },
  { label: '星期四', value: '4' },
  { label: '星期五', value: '5' },
  { label: '星期六', value: '6' },
  { label: '星期日', value: '7' },
])

const handleAdd = () => {
  count8++
  options8.value.push({ label: 'add' + count8, value: count8 + '' })
}
const handleEdit = (index: number, value: string) => {
  console.log(index, value)
}
const handleRemove = (index: number) => {
  options8.value.splice(index, 1)
}
</script>