<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    Dialog 弹出一个对话框，适合需要定制性更大的场景。
  </div>
</template>

<template id="code">
  <cv-button @click="dialog1 = true">打开弹窗</cv-button>
  <cv-dialog v-model="dialog1" title="弹窗一">
    <cv-row v-for="i in 30" :key="i">
      <cv-col>
        这是一个弹窗,它需要展示一些内容
      </cv-col>
    </cv-row>
  </cv-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvRow, CvCol, CvButton } from '@cvtool/design';

const dialog1 = ref(false)
</script>