<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-row>
    <cv-col>
      <cv-label label="展示按钮"><cv-button>按钮</cv-button></cv-label>
    </cv-col>
  </cv-row>
  <cv-row>
    <cv-col>
      <cv-label label="输入框"><cv-input></cv-input></cv-label>
    </cv-col>
  </cv-row>
</template>

<script lang="ts" setup>
import { CvLabel, CvButton, CvInput, CvRow, CvCol } from '@cvtool/design'

</script>