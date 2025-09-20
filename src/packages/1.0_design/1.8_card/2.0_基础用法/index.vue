<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    包含标题，内容。
  </div>
</template>

<template id="code">
  <cv-card title="标题" :arrow="true">
    <cv-button>默认按钮</cv-button>
  </cv-card>
</template>

<script lang="ts" setup>
import { CvButton, CvCard } from '@cvtool/design'
</script>
