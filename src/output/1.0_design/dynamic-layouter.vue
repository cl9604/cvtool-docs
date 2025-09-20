<template>

    <div class="doc-text">
    动态布局器，支持水平/垂直的对内容进行分区并支持使用鼠标动态调整。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <div :style="style2">
        <cv-dynamic-layouter>
        </cv-dynamic-layouter>
    </div>
</cv-example>

    <div class="doc-sub-title">
    3.0_垂直布局
    </div>

<cv-example :code="cvScope_2">
    <div :style="style3">
        <cv-dynamic-layouter :mode="'vertical'">
        </cv-dynamic-layouter>
    </div>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './dynamic-layouter'
import { cvScope_1 } from './dynamic-layouter'
import { computed } from 'vue';
import { CvDynamicLayouter } from '@cvtool/design';
const style2 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;';
});
import { cvScope_2 } from './dynamic-layouter'
import 'vue';
import '@cvtool/design';
const style3 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;';
});
</script>