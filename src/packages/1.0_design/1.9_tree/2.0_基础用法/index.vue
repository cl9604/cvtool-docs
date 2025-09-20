<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    基础的树形结构展示。
  </div>
</template>

<template id="code">
  <cv-tree :data="tree2"></cv-tree>
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
</script>