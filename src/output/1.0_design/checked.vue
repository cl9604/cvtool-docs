<template>

    <div class="doc-text">
    一组备选项中进行选择。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
    </div>

<cv-example :code="cvScope_1">
    <cv-checked v-model="input2">
    我同意 {{ '《用户使用协议》' }}
    </cv-checked>
</cv-example>

    <div class="doc-sub-title">
    多选框组
    </div>
    <div class="doc-text">
    适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
    </div>

<cv-example :code="cvScope_2">
    <cv-checked-group v-model="input3" :data="options3">
    </cv-checked-group>
</cv-example>

    <div class="doc-sub-title">
    全选
    </div>
    <div class="doc-text">
    使用多选框组实现全选
    </div>

<cv-example :code="cvScope_3">
    <cv-checked v-model="checkedAll" :multiple="multiple" @change="multipleChange">
    全选
    </cv-checked>
    <cv-checked-group v-model="input4" :data="options4">
    </cv-checked-group>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './checked'
import { cvScope_1 } from './checked'
import { ref } from 'vue';
import { CvChecked } from '@cvtool/design';
const input2 = ref(false);
import { cvScope_2 } from './checked'
import 'vue';
import { CvCheckedGroup } from '@cvtool/design';
const input3 = ref([]);
const options3 = [{
  label: '选项1',
  value: '1'
}, {
  label: '选项2',
  value: '2'
}, {
  label: '选项3',
  value: '3'
}];
import { cvScope_3 } from './checked'
import { computed } from 'vue';
import '@cvtool/design';
const options4 = [{
  label: '选项1',
  value: '1'
}, {
  label: '选项2',
  value: '2'
}, {
  label: '选项3',
  value: '3'
}];
const checkedAll = ref(true);
const input4 = ref(options4.map(opt => opt.value));
const multiple = computed(() => {
  if (input4.value.length === 0 || input4.value.length === options4.length) return false;
  return true;
});
const multipleChange = () => {
  if (input4.value.length === options4.length) {
    input4.value.length = 0;
  } else {
    input4.value = options4.map(option => option.value);
  }
};
</script>