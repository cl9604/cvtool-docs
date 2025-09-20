export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-cascader v-model="cascader2" :data="options2">
    </cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const cascader2 = ref('')
const options2 = [
  {
    label: '选项1',
    value: 'value_1',
    children: [
      { label: '选项1-1', value: 'value_11' },
      {
        label: '选项1-2',
        value: 'value_12',
        children: [
          { label: '选项1-2-1', value: 'value_121' },
          { label: '选项1-2-2', value: 'value_122' },
        ]
      },
    ]
  },
  { label: '选项2', value: 'value_2' },
  { label: '选项3', value: 'value_3' },
]
</script>`
export const cvScope_2 = `<template>
    <cv-cascader v-model="cascader3" :data="options3">
    </cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const cascader3 = ref('')
const options3 = [
  {
    label: '选项1',
    value: 'value_1',
    children: [
      { label: '选项1-1', value: 'value_11' },
      {
        label: '选项1-2',
        value: 'value_12',
        children: [
          { label: '选项1-2-1', value: 'value_121', disabled: true },
          { label: '选项1-2-2', value: 'value_122' },
        ]
      },
    ]
  },
  { label: '选项2', value: 'value_2', disabled: true },
  { label: '选项3', value: 'value_3' },
]
</script>`
export const cvScope_3 = `<template>
    <cv-cascader v-model="cascader4" :data="options4" :clearable="true">
    </cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const cascader4 = ref('')
const options4 = [
  {
    label: '选项1',
    value: 'value_1',
    children: [
      { label: '选项1-1', value: 'value_11' },
      {
        label: '选项1-2',
        value: 'value_12',
        children: [
          { label: '选项1-2-1', value: 'value_121' },
          { label: '选项1-2-2', value: 'value_122' },
        ]
      },
    ]
  },
  { label: '选项2', value: 'value_2' },
  { label: '选项3', value: 'value_3' },
]
</script>`
export const cvScope_4 = `<template>
    <cv-cascader v-model="cascader5" :data="options5" :clearable="true" :readonly="true">
    </cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const cascader5 = ref('')
const options5 = [
  {
    label: '选项1',
    value: 'value_1',
    children: [
      { label: '选项1-1', value: 'value_11' },
      {
        label: '选项1-2',
        value: 'value_12',
        children: [
          { label: '选项1-2-1', value: 'value_121' },
          { label: '选项1-2-2', value: 'value_122' },
        ]
      },
    ]
  },
  { label: '选项2', value: 'value_2' },
  { label: '选项3', value: 'value_3' },
]
</script>`
export const cvScope_5 = `<template>
    <cv-cascader v-model="select6" :data="options6" :getter="getter">
    </cv-cascader>
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
</script>`
export const cvScope_6 = `<template>
    <cv-cascader v-model="select7" :data="options7" :searchable="true" :clearable="true">
    </cv-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';

const select7 = ref('')
const options7 = [
  {
    label: '选项1',
    value: 'value_1',
    children: [
      { label: '选项1-1', value: 'value_11' },
      {
        label: '选项1-2',
        value: 'value_12',
        children: [
          { label: '选项1-2-1', value: 'value_121' },
          { label: '选项1-2-2', value: 'value_122' },
        ]
      },
    ]
  },
  { label: '选项2', value: 'value_2' },
  { label: '选项3', value: 'value_3' },
]
</script>`