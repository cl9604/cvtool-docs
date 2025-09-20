<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
  </div>
</template>

<template id="code">
  <cv-checked v-model="input2">我同意 {{ '《用户使用协议》' }}</cv-checked>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvChecked } from '@cvtool/design';

const input2 = ref(false)

</script>