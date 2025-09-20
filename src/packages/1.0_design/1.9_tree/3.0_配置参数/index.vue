<template id="text">
  <div class="doc-sub-title">配置参数</div>
</template>

<template id="code">
  <cv-tree :data="tree3" :getter="getter3"></cv-tree>
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
</script>