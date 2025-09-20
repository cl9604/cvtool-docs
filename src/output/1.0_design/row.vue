<template>

    <div class="doc-text">
    提供全局的配置选项，让你的配置能够在全局都能够被访问到。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
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
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './row'
import { cvScope_1 } from './row'
import { CvRow, CvCol } from '@cvtool/design';
</script>