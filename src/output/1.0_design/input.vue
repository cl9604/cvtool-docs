<template>

    <div class="doc-text">
    通过鼠标或键盘输入字符
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-input v-model="input2">
    </cv-input>
</cv-example>

    <div class="doc-sub-title">
    只读
    </div>

<cv-example :code="cvScope_2">
    <cv-input v-model="input3" :readonly="true">
    </cv-input>
</cv-example>

    <div class="doc-sub-title">
    可清空
    </div>

<cv-example :code="cvScope_3">
    <cv-input v-model="input4" :clearable="true">
    </cv-input>
</cv-example>

    <div class="doc-sub-title">
    自动聚焦
    </div>

<cv-example :code="cvScope_4">
    <cv-input v-model="input5" :autofocus="true">
    </cv-input>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './input'
import { cvScope_1 } from './input'
import { ref } from 'vue';
import { CvInput } from '@cvtool/design';
const input2 = ref('');
import { cvScope_2 } from './input'
import 'vue';
import '@cvtool/design';
const input3 = ref('');
import { cvScope_3 } from './input'
import 'vue';
import '@cvtool/design';
const input4 = ref('');
import { cvScope_4 } from './input'
import 'vue';
import '@cvtool/design';
const input5 = ref('');
</script>