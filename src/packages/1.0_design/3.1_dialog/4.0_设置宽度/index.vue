<template id="text">
  <div class="doc-sub-title">设置宽度</div>
  <div class="doc-text">
    设置弹出的宽度，模拟一个确认框。
  </div>
</template>

<template id="code">
  <cv-button @click="dialog4 = true">打开弹窗</cv-button>
  <cv-dialog v-model="dialog4" :mask="true" width="450px" title="提示">
    <i class="cvfont cv-warning"></i>请注意，这是一个提示。您需要在确认与取消之间做出选择！
    <template #footer>
      <cv-button @click="dialog4 = false">确 认</cv-button>
      <cv-button @click="dialog4 = false">取 消</cv-button>
    </template>
  </cv-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvButton } from '@cvtool/design';

const dialog4 = ref(false)
</script>