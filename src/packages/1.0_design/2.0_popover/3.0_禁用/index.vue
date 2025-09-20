<template id="text">
  <div class="doc-sub-title">禁用</div>
</template>

<template id="code">
  <cv-popover :disabled="true">
    <template #trigger>
      <cv-button>弹出层的锚点</cv-button>
    </template>
    <div>1233</div>
  </cv-popover>
</template>

<script lang="ts" setup>
import { CvPopover, CvButton } from '@cvtool/design';
</script>