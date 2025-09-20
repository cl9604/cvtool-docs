<template id="text">
  <div class="doc-sub-title">多选框组</div>
  <div class="doc-text">
    适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
  </div>
</template>

<template id="code">
  <cv-checked-group v-model="input3" :data="options3"> </cv-checked-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvCheckedGroup } from '@cvtool/design';

const input3 = ref([])
const options3 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
]

</script>