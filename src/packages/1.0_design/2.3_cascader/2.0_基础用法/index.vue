<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-cascader v-model="cascader2" :data="options2"></cv-cascader>
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

</script>