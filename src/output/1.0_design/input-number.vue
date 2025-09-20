<template>

    <div class="doc-text">
    仅允许输入标准的数字值，可定义范围
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-input-number v-model="input2">
    </cv-input-number>
</cv-example>

    <div class="doc-sub-title">
    步数
    </div>
    <div class="doc-text">
    允许定义递增递减的步数控制
    </div>

<cv-example :code="cvScope_2">
    <cv-input-number v-model="input2_1" :step="1" :min="0" :max="10">
    </cv-input-number>
</cv-example>

    <div class="doc-sub-title">
    只读
    </div>

<cv-example :code="cvScope_3">
    <cv-input-number v-model="input3" :readonly="true">
    </cv-input-number>
</cv-example>

    <div class="doc-sub-title">
    可清空
    </div>

<cv-example :code="cvScope_4">
    <cv-input-number v-model="input4" :clearable="true">
    </cv-input-number>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './input-number'
import { cvScope_1 } from './input-number'
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design';
const input2 = ref('');
import { cvScope_2 } from './input-number'
import 'vue';
import '@cvtool/design';
const input2_1 = ref('');
import { cvScope_3 } from './input-number'
import 'vue';
import '@cvtool/design';
const input3 = ref(1.23);
import { cvScope_4 } from './input-number'
import 'vue';
import '@cvtool/design';
const input4 = ref('');
</script>