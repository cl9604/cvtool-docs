<template>

    <div class="doc-text">
    将信息聚合在卡片容器中展示。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    包含标题，内容。
    </div>

<cv-example :code="cvScope_1">
    <cv-card title="标题" :arrow="true">
        <cv-button>
        默认按钮
        </cv-button>
    </cv-card>
</cv-example>

    <div class="doc-sub-title">
    可折叠
    </div>
    <div class="doc-text">
    点击标题，可以对内容进行折叠。
    </div>

<cv-example :code="cvScope_2">
    <cv-card title="标题" :arrow="true">
        <cv-button>
        默认按钮
        </cv-button>
    </cv-card>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './card'
import { cvScope_1 } from './card'
import { CvButton, CvCard } from '@cvtool/design';
import { cvScope_2 } from './card'
import '@cvtool/design';
</script>