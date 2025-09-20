export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-checked v-model="input2">
    我同意 {{ '《用户使用协议》' }}
    </cv-checked>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvChecked } from '@cvtool/design';

const input2 = ref(false)
</script>`
export const cvScope_2 = `<template>
    <cv-checked-group v-model="input3" :data="options3">
    </cv-checked-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCheckedGroup } from '@cvtool/design';

const input3 = ref([])
const options3 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
]
</script>`
export const cvScope_3 = `<template>
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
</script>`