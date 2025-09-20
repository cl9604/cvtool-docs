export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-select v-model="select2" :data="options2">
    </cv-select>
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
</script>`
export const cvScope_2 = `<template>
    <cv-select v-model="select3" :data="options3">
    </cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

const select3 = ref('')
const options3 = [
    { label: '星期一', value: '1' },
    { label: '星期二', value: '2', disabled: true },
    { label: '星期三', value: '3' },
    { label: '星期四', value: '4' },
    { label: '星期五', value: '5' },
    { label: '星期六', value: '6' },
    { label: '星期日', value: '7' },
]
</script>`
export const cvScope_3 = `<template>
    <cv-select v-model="select4" :data="options4" :clearable="true">
    </cv-select>
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
</script>`
export const cvScope_4 = `<template>
    <cv-select v-model="select5" :data="options5" :readonly="true" :clearable="true">
    </cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

const select5 = ref('')
const options5 = [
  { label: '星期一', value: '1' },
  { label: '星期二', value: '2' },
  { label: '星期三', value: '3' },
  { label: '星期四', value: '4' },
  { label: '星期五', value: '5' },
  { label: '星期六', value: '6' },
  { label: '星期日', value: '7' },
]
</script>`
export const cvScope_5 = `<template>
    <cv-select v-model="select6" :data="options6" :getter="getter">
    </cv-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design'

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
</script>`
export const cvScope_6 = `<template>
    <cv-select v-model="select7" :data="options7" :searchable="true" :clearable="true">
    </cv-select>
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
</script>`
export const cvScope_7 = `<template>
    <cv-select v-model="select8" :data="options8" :searchable="true" :clearable="true" :addable="true" :editable="true" :removable="true" @add="handleAdd" @edit="handleEdit" @remove="handleRemove">
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
</script>`