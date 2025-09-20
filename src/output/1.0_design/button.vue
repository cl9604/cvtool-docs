<template>

    <div class="doc-text">
    常用的操作按钮。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    基础的按钮用法。
    </div>

<cv-example :code="cvScope_1">
    <cv-button @click="click">
    默认按钮
    </cv-button>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './button'
import { cvScope_1 } from './button'
import { CvButton, notify } from '@cvtool/design';
const click = () => {
  notify.send('触发了按钮的 click 事件');
};
</script>