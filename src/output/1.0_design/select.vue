<template>

    <div class="doc-text">
    当选项过多时，使用下拉菜单展示并选择内容。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    适用广泛的基础单选
    </div>

<cv-example :code="cvScope_1">
    <cv-select v-model="select2" :data="options2">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    有禁用选项
    </div>

<cv-example :code="cvScope_2">
    <cv-select v-model="select3" :data="options3">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    可清空
    </div>

<cv-example :code="cvScope_3">
    <cv-select v-model="select4" :data="options4" :clearable="true">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    设为只读
    </div>

<cv-example :code="cvScope_4">
    <cv-select v-model="select5" :data="options5" :readonly="true" :clearable="true">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    配置参数
    </div>

<cv-example :code="cvScope_5">
    <cv-select v-model="select6" :data="options6" :getter="getter">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    可搜索
    </div>
    <div class="doc-text">
    可以利用搜索功能快速查找选项
    </div>

<cv-example :code="cvScope_6">
    <cv-select v-model="select7" :data="options7" :searchable="true" :clearable="true">
    </cv-select>
</cv-example>

    <div class="doc-sub-title">
    可编辑
    </div>
    <div class="doc-text">
    快捷操作
    </div>

<cv-example :code="cvScope_7">
    <cv-select v-model="select8" :data="options8" :searchable="true" :clearable="true" :addable="true" :editable="true" :removable="true" @add="handleAdd" @edit="handleEdit" @remove="handleRemove">
    </cv-select>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './select'
import { cvScope_1 } from './select'
import { ref } from 'vue';
import { CvSelect } from '@cvtool/design';
const select2 = ref('');
const options2 = [{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2'
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}];
import { cvScope_2 } from './select'
import 'vue';
import '@cvtool/design';
const select3 = ref('');
const options3 = [{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2',
  disabled: true
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}];
import { cvScope_3 } from './select'
import 'vue';
import '@cvtool/design';
const select4 = ref('');
const options4 = [{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2'
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}];
import { cvScope_4 } from './select'
import 'vue';
import '@cvtool/design';
const select5 = ref('');
const options5 = [{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2'
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}];
import { cvScope_5 } from './select'
import 'vue';
import '@cvtool/design';
const select6 = ref('');
const options6 = [{
  name: '选项1',
  id: '1'
}, {
  name: '选项2',
  id: 'value_2',
  status: true
}, {
  name: '选项3',
  id: 'value_3'
}];
const label6 = item => {
  return item.name;
};
const value6 = item => {
  return item.id;
};
const disabled6 = item => {
  return item.status;
};
const getter = {
  label: label6,
  value: value6,
  disabled: disabled6
};
import { cvScope_6 } from './select'
import 'vue';
import '@cvtool/design';
const select7 = ref('');
const options7 = [{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2'
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}];
import { cvScope_7 } from './select'
import 'vue';
import '@cvtool/design';
let count8 = 8;
const select8 = ref('');
const options8 = ref([{
  label: '星期一',
  value: '1'
}, {
  label: '星期二',
  value: '2'
}, {
  label: '星期三',
  value: '3'
}, {
  label: '星期四',
  value: '4'
}, {
  label: '星期五',
  value: '5'
}, {
  label: '星期六',
  value: '6'
}, {
  label: '星期日',
  value: '7'
}]);
const handleAdd = () => {
  count8++;
  options8.value.push({
    label: 'add' + count8,
    value: count8 + ''
  });
};
const handleEdit = (index, value) => {
  console.log(index, value);
};
const handleRemove = index => {
  options8.value.splice(index, 1);
};
</script>