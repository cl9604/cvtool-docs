<template id="text">
  <div class="doc-sub-title">有禁用选项</div>
</template>

<template id="code">
  <cv-cascader v-model="cascader3" :data="options3"></cv-cascader>
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

</script>