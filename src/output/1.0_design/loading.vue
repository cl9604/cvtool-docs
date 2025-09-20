<template>

    <div class="doc-text">
    加载数据时显示动效。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-button @click="showLoading2">
    展示loading 2s
    </cv-button>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './loading'
import { cvScope_1 } from './loading'
import { CvButton, loading } from '@cvtool/design';
const showLoading2 = () => {
  loading.show();
  setTimeout(() => loading.close(), 2000);
};
</script>