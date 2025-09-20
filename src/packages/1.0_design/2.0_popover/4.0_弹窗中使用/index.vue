<template id="text">
  <div class="doc-sub-title">弹窗中使用</div>
</template>

<template id="code">
  <cv-button @click="dialog4_1 = true">打开弹窗</cv-button>
  <cv-dialog v-model="dialog4_2" :mask="false">
    <cv-popover :trigger="'click'">
      <template #trigger>
        <cv-button>弹出层的锚点</cv-button>
      </template>
      <div>1233</div>
    </cv-popover>
  </cv-dialog>
  <cv-dialog v-model="dialog4_1" :mask="false">
    <cv-popover :trigger="'click'">
      <template #trigger>
        <cv-button>弹出层的锚点</cv-button>
      </template>
      <cv-button @click="dialog4_2 = true">打开新弹出层</cv-button>
    </cv-popover>
  </cv-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvPopover, CvButton } from '@cvtool/design';

const dialog4_1 = ref(false)
const dialog4_2 = ref(false)
</script>