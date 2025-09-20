<template id="text">
  <div class="doc-sub-title">全选</div>
  <div class="doc-text">
    使用多选框组实现全选
  </div>
</template>

<template id="code">
  <cv-checked v-model="checkedAll" :multiple="multiple" @change="multipleChange">
    全选
  </cv-checked>
  <cv-checked-group v-model="input4" :data="options4">
  </cv-checked-group>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { CvCheckedGroup, CvChecked } from '@cvtool/design';

const options4 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
]
const checkedAll = ref(true)
const input4 = ref(options4.map(opt => opt.value))
const multiple = computed(() => {
  if (input4.value.length === 0 || input4.value.length === options4.length) return false
  return true
})

const multipleChange = () => {
  if (input4.value.length === options4.length) {
    input4.value.length = 0
  } else {
    input4.value = options4.map(option => option.value)
  }
}
</script>