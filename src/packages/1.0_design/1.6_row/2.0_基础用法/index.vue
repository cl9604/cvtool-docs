<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-row :gutter="10">
    <cv-col :span="12" :offset="6">
      <div class="gray-bloack" style="width: 100%;height: 30px;border-radius: 2px;background: var(--cv-border-color);">
      </div>
    </cv-col>
    <cv-col :span="6">
      <div class="gray-bloack" style="width: 100%;height: 30px;border-radius: 2px;background: var(--cv-border-color);">
      </div>
    </cv-col>
  </cv-row>
  <cv-row :gutter="10">
    <cv-col :span="6">
      <div class="gray-bloack" style="width: 100%;height: 30px;border-radius: 2px;background: var(--cv-border-color);">
      </div>
    </cv-col>
    <cv-col :span="12">
      <div class="gray-bloack" style="width: 100%;height: 30px;border-radius: 2px;background: var(--cv-border-color);">
      </div>
    </cv-col>
    <cv-col :span="6">
      <div class="gray-bloack" style="width: 100%;height: 30px;border-radius: 2px;background: var(--cv-border-color);">
      </div>
    </cv-col>
  </cv-row>
</template>

<script lang="ts" setup>
import { CvRow, CvCol } from '@cvtool/design';

</script>