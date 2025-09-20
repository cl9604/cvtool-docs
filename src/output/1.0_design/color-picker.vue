<template>

    <div class="doc-text">
    用于颜色选择，支持多种格式。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-color-picker v-model="input2">
    </cv-color-picker>
</cv-example>

    <div class="doc-sub-title">
    只读
    </div>

<cv-example :code="cvScope_2">
    <cv-color-picker v-model="input3" :readonly="true">
    </cv-color-picker>
</cv-example>

    <div class="doc-sub-title">
    组合使用
    </div>
    <div class="doc-text">
    搭配Label组件一起使用
    </div>

<cv-example :code="cvScope_3">
    <cv-label label="颜色">
        <cv-color-picker v-model="input4">
        </cv-color-picker>
    </cv-label>
</cv-example>

    <div class="doc-sub-title">
    透明度
    </div>
    <div class="doc-text">
    使用透明度形式
    </div>

<cv-example :code="cvScope_4">
    <cv-label label="颜色">
        <cv-color-picker v-model="input5" :opacity="true">
        </cv-color-picker>
    </cv-label>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './color-picker'
import { cvScope_1 } from './color-picker'
import { ref } from 'vue';
import { CvColorPicker } from '@cvtool/design';
const input2 = ref('');
import { cvScope_2 } from './color-picker'
import 'vue';
import '@cvtool/design';
const input3 = ref('#268AE7');
import { cvScope_3 } from './color-picker'
import 'vue';
import { CvLabel } from '@cvtool/design';
const input4 = ref('');
import { cvScope_4 } from './color-picker'
import 'vue';
import '@cvtool/design';
const input5 = ref('');
</script>