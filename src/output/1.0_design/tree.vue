<template>

    <div class="doc-text">
    用清晰的层级结构展示信息，可展开或折叠。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    基础的树形结构展示。
    </div>

<cv-example :code="cvScope_1">
    <cv-tree :data="tree2">
    </cv-tree>
</cv-example>

    <div class="doc-sub-title">
    配置参数
    </div>

<cv-example :code="cvScope_2">
    <cv-tree :data="tree3" :getter="getter3">
    </cv-tree>
</cv-example>

    <div class="doc-sub-title">
    默认展开
    </div>
    <div class="doc-text">
    组件创建时默认展开指定项
    </div>

<cv-example :code="cvScope_3">
    <cv-tree :data="tree4" :default-checked="defaultExpand4">
    </cv-tree>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './tree'
import { cvScope_1 } from './tree'
import { ref } from 'vue';
import { CvTree } from '@cvtool/design';
const tree2 = ref([{
  label: '节点1',
  value: '1',
  children: [{
    label: '节点1-1',
    value: '1-1',
    children: [{
      label: '节点1-1-1',
      value: '1-1-1',
      children: []
    }, {
      label: '节点1-1-2',
      value: '1-1-2',
      children: []
    }, {
      label: '节点1-1-3',
      value: '1-1-3',
      children: []
    }]
  }]
}, {
  label: '节点2',
  value: '2',
  children: [{
    label: '节点2-1',
    value: '2-1',
    children: [{
      label: '节点2-1-1',
      value: '2-1-1',
      children: []
    }, {
      label: '节点2-1-2',
      value: '2-1-2',
      children: []
    }, {
      label: '节点2-1-3',
      value: '2-1-3',
      children: []
    }]
  }]
}]);
const label = item => {
  return item.name;
};
const value = item => {
  return item.id;
};
const children = item => {
  return item.list ?? [];
};
const disabled = item => {
  return item.status;
};
const arrow = item => {
  return item.expand || item.list.length > 0;
};
const getter = {
  label,
  value,
  children,
  arrow,
  disabled
};
import { cvScope_2 } from './tree'
import 'vue';
import '@cvtool/design';
const tree3 = ref([{
  name: '节点1',
  id: '1',
  status: false,
  list: [{
    name: '节点1-1',
    id: '1-1',
    list: [{
      name: '节点1-1-1',
      id: '1-1-1',
      expand: true,
      list: []
    }, {
      name: '节点1-1-2',
      id: '1-1-2',
      status: true,
      list: []
    }, {
      name: '节点1-1-3',
      id: '1-1-3',
      list: []
    }]
  }]
}]);
const label3 = item => {
  return item.name;
};
const value3 = item => {
  return item.id;
};
const children3 = item => {
  return item.list ?? [];
};
const disabled3 = item => {
  return item.status;
};
const arrow3 = item => {
  return item.expand || item.list.length > 0;
};
const getter3 = {
  label: label3,
  value: value3,
  children: children3,
  arrow: arrow3,
  disabled: disabled3
};
import { cvScope_3 } from './tree'
import 'vue';
import '@cvtool/design';
const defaultExpand4 = [{
  label: '节点1-1-1',
  value: '1-1-1',
  children: []
}];
const tree4 = ref([{
  label: '节点1',
  value: '1',
  children: [{
    label: '节点1-1',
    value: '1-1',
    children: [defaultExpand4[0], {
      label: '节点1-1-2',
      value: '1-1-2',
      children: []
    }, {
      label: '节点1-1-3',
      value: '1-1-3',
      children: []
    }]
  }]
}, {
  label: '节点2',
  value: '2',
  children: [{
    label: '节点2-1',
    value: '2-1',
    children: [{
      label: '节点2-1-1',
      value: '2-1-1',
      children: []
    }, {
      label: '节点2-1-2',
      value: '2-1-2',
      children: []
    }, {
      label: '节点2-1-3',
      value: '2-1-3',
      children: []
    }]
  }]
}]);
</script>