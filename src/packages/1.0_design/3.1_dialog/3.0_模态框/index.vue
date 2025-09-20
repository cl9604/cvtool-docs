<template id="text">
  <div class="doc-sub-title">模态框</div>
  <div class="doc-text">
    开启模态框
  </div>
</template>

<template id="code">
  <cv-button @click="openDialog">打开弹窗</cv-button>
  <cv-dialog v-model="dialog3_1" :mask="true" title="模态框">
    <cv-row v-for="i in 30" :key="i">
      <cv-col>
        这是一个弹窗,它需要展示一些内容
      </cv-col>
    </cv-row>
    <template #footer>
      <cv-button @click="dialog3_2 = true">打开另一个模态框</cv-button>
    </template>
  </cv-dialog>
  <cv-dialog v-model="dialog3_2" :mask="true" title="模态框">
    <cv-row v-for="i in 30" :key="i">
      <cv-col>这是一个弹窗,它需要展示一些内容</cv-col>
    </cv-row>
    <template #footer>
      <cv-button @click="dialog3_3 = true">打开另一个模态框</cv-button>
    </template>
  </cv-dialog>
  <cv-dialog v-model="dialog3_3" :mask="true" title="模态框">
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

const dialog3_1 = ref(false)
const dialog3_2 = ref(false)
const dialog3_3 = ref(false)

const openDialog = () => {
  dialog3_1.value = true
}
</script>