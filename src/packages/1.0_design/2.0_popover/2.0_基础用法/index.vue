<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    基础的用法。
  </div>
</template>

<template id="code">
  <cv-popover>
    <template #trigger>
      <cv-button>弹出层click的锚点</cv-button>
    </template>
    弹出层click的内容
  </cv-popover>

  <cv-popover trigger='hover'>
    <template #trigger>
      <cv-button>弹出层hover的锚点</cv-button>
    </template>
    弹出层hover的内容
  </cv-popover>
</template>

<script lang="ts" setup>
import { CvPopover, CvButton } from '@cvtool/design';
</script>