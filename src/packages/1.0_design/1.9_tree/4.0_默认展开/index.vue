<template id="text">
  <div class="doc-sub-title">默认展开</div>
  <div class="doc-text">
    组件创建时默认展开指定项
  </div>
</template>

<template id="code">
  <cv-tree :data="tree4" :default-checked="defaultExpand4"></cv-tree>
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
</script>