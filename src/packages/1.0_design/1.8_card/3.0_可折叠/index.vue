<template id="text">
  <div class="doc-sub-title">可折叠</div>
  <div class="doc-text">
    点击标题，可以对内容进行折叠。
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
