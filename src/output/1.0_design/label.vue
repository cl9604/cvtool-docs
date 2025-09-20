<template>

    <div class="doc-text">
    给常用的表单组件提供标签。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-row>
        <cv-col>
            <cv-label label="展示按钮">
                <cv-button>
                按钮
                </cv-button>
            </cv-label>
        </cv-col>
    </cv-row>
    <cv-row>
        <cv-col>
            <cv-label label="输入框">
                <cv-input>
                </cv-input>
            </cv-label>
        </cv-col>
    </cv-row>
</cv-example>

    <div class="doc-sub-title">
    对齐方式
    </div>
    <div class="doc-text">
    有left，center，right三种对齐方式。
    </div>

<cv-example :code="cvScope_2">
    <cv-label label="输入框" align="right">
        <cv-input>
        </cv-input>
    </cv-label>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './label'
import { cvScope_1 } from './label'
import { CvLabel, CvButton, CvInput, CvRow, CvCol } from '@cvtool/design';
import { cvScope_2 } from './label'
import '@cvtool/design';
</script>