<template>

    <div class="doc-text">
    当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-cascader v-model="cascader2" :data="options2">
    </cv-cascader>
</cv-example>

    <div class="doc-sub-title">
    有禁用选项
    </div>

<cv-example :code="cvScope_2">
    <cv-cascader v-model="cascader3" :data="options3">
    </cv-cascader>
</cv-example>

    <div class="doc-sub-title">
    可清空
    </div>

<cv-example :code="cvScope_3">
    <cv-cascader v-model="cascader4" :data="options4" :clearable="true">
    </cv-cascader>
</cv-example>

    <div class="doc-sub-title">
    设为只读
    </div>

<cv-example :code="cvScope_4">
    <cv-cascader v-model="cascader5" :data="options5" :clearable="true" :readonly="true">
    </cv-cascader>
</cv-example>

    <div class="doc-sub-title">
    配置参数
    </div>

<cv-example :code="cvScope_5">
    <cv-cascader v-model="select6" :data="options6" :getter="getter">
    </cv-cascader>
</cv-example>

    <div class="doc-sub-title">
    可搜索
    </div>
    <div class="doc-text">
    可以利用搜索功能快速查找选项
    </div>

<cv-example :code="cvScope_6">
    <cv-cascader v-model="select7" :data="options7" :searchable="true" :clearable="true">
    </cv-cascader>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './cascader'
import { cvScope_1 } from './cascader'
import { ref } from 'vue';
import { CvCascader } from '@cvtool/design';
const cascader2 = ref('');
const options2 = [{
  label: '选项1',
  value: 'value_1',
  children: [{
    label: '选项1-1',
    value: 'value_11'
  }, {
    label: '选项1-2',
    value: 'value_12',
    children: [{
      label: '选项1-2-1',
      value: 'value_121'
    }, {
      label: '选项1-2-2',
      value: 'value_122'
    }]
  }]
}, {
  label: '选项2',
  value: 'value_2'
}, {
  label: '选项3',
  value: 'value_3'
}];
import { cvScope_2 } from './cascader'
import 'vue';
import '@cvtool/design';
const cascader3 = ref('');
const options3 = [{
  label: '选项1',
  value: 'value_1',
  children: [{
    label: '选项1-1',
    value: 'value_11'
  }, {
    label: '选项1-2',
    value: 'value_12',
    children: [{
      label: '选项1-2-1',
      value: 'value_121',
      disabled: true
    }, {
      label: '选项1-2-2',
      value: 'value_122'
    }]
  }]
}, {
  label: '选项2',
  value: 'value_2',
  disabled: true
}, {
  label: '选项3',
  value: 'value_3'
}];
import { cvScope_3 } from './cascader'
import 'vue';
import '@cvtool/design';
const cascader4 = ref('');
const options4 = [{
  label: '选项1',
  value: 'value_1',
  children: [{
    label: '选项1-1',
    value: 'value_11'
  }, {
    label: '选项1-2',
    value: 'value_12',
    children: [{
      label: '选项1-2-1',
      value: 'value_121'
    }, {
      label: '选项1-2-2',
      value: 'value_122'
    }]
  }]
}, {
  label: '选项2',
  value: 'value_2'
}, {
  label: '选项3',
  value: 'value_3'
}];
import { cvScope_4 } from './cascader'
import 'vue';
import '@cvtool/design';
const cascader5 = ref('');
const options5 = [{
  label: '选项1',
  value: 'value_1',
  children: [{
    label: '选项1-1',
    value: 'value_11'
  }, {
    label: '选项1-2',
    value: 'value_12',
    children: [{
      label: '选项1-2-1',
      value: 'value_121'
    }, {
      label: '选项1-2-2',
      value: 'value_122'
    }]
  }]
}, {
  label: '选项2',
  value: 'value_2'
}, {
  label: '选项3',
  value: 'value_3'
}];
import { cvScope_5 } from './cascader'
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
import { cvScope_6 } from './cascader'
import 'vue';
import '@cvtool/design';
const select7 = ref('');
const options7 = [{
  label: '选项1',
  value: 'value_1',
  children: [{
    label: '选项1-1',
    value: 'value_11'
  }, {
    label: '选项1-2',
    value: 'value_12',
    children: [{
      label: '选项1-2-1',
      value: 'value_121'
    }, {
      label: '选项1-2-2',
      value: 'value_122'
    }]
  }]
}, {
  label: '选项2',
  value: 'value_2'
}, {
  label: '选项3',
  value: 'value_3'
}];
</script>