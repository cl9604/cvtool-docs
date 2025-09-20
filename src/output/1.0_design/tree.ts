export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-tree :data="tree2">
    </cv-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvTree } from '@cvtool/design';

const tree2 = ref([
  {
    label: '节点1', value: '1', children: [
      {
        label: '节点1-1', value: '1-1', children: [
          { label: '节点1-1-1', value: '1-1-1', children: [] },
          { label: '节点1-1-2', value: '1-1-2', children: [] },
          { label: '节点1-1-3', value: '1-1-3', children: [] },
        ]
      }
    ]
  },
  {
    label: '节点2', value: '2', children: [
      {
        label: '节点2-1', value: '2-1', children: [
          { label: '节点2-1-1', value: '2-1-1', children: [] },
          { label: '节点2-1-2', value: '2-1-2', children: [] },
          { label: '节点2-1-3', value: '2-1-3', children: [] },
        ]
      }
    ]
  }
])

const label = (item: { name: string }) => { return item.name }
const value = (item: { id: string }) => { return item.id }
const children = (item: { list: any[] }) => { return item.list ?? [] }
const disabled = (item: { status: boolean }) => { return item.status }
const arrow = (item: { expand: boolean, list: any[] }) => { return item.expand || item.list.length > 0 }

const getter = { label, value, children, arrow, disabled }
</script>`
export const cvScope_2 = `<template>
    <cv-tree :data="tree3" :getter="getter3">
    </cv-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvTree } from '@cvtool/design';

const tree3 = ref([
  {
    name: '节点1', id: '1', status: false, list: [
      {
        name: '节点1-1', id: '1-1', list: [
          { name: '节点1-1-1', id: '1-1-1', expand: true, list: [] },
          { name: '节点1-1-2', id: '1-1-2', status: true, list: [] },
          { name: '节点1-1-3', id: '1-1-3', list: [] },
        ]
      }
    ]
  },
])

const label3 = (item: { name: string }) => { return item.name }
const value3 = (item: { id: string }) => { return item.id }
const children3 = (item: { list: any[] }) => { return item.list ?? [] }
const disabled3 = (item: { status: boolean }) => { return item.status }
const arrow3 = (item: { expand: boolean, list: any[] }) => { return item.expand || item.list.length > 0 }

const getter3 = { label: label3, value: value3, children: children3, arrow: arrow3, disabled: disabled3 }
</script>`
export const cvScope_3 = `<template>
    <cv-tree :data="tree4" :default-checked="defaultExpand4">
    </cv-tree>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvTree } from '@cvtool/design';

const defaultExpand4 = [{ label: '节点1-1-1', value: '1-1-1', children: [] }]
const tree4 = ref([
  {
    label: '节点1', value: '1', children: [
      {
        label: '节点1-1', value: '1-1', children: [
          defaultExpand4[0],
          { label: '节点1-1-2', value: '1-1-2', children: [] },
          { label: '节点1-1-3', value: '1-1-3', children: [] },
        ]
      }
    ]
  },
  {
    label: '节点2', value: '2', children: [
      {
        label: '节点2-1', value: '2-1', children: [
          { label: '节点2-1-1', value: '2-1-1', children: [] },
          { label: '节点2-1-2', value: '2-1-2', children: [] },
          { label: '节点2-1-3', value: '2-1-3', children: [] },
        ]
      }
    ]
  }
])
</script>`