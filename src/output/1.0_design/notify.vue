<template>

    <div class="doc-text">
    悬浮出现在页面角落，显示全局的通知提醒消息。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    默认的消息通知
    </div>

<cv-example :code="cvScope_1">
    <cv-button @click="notify.send('这是默认的消息通知!')">
    发送消息
    </cv-button>
</cv-example>

    <div class="doc-sub-title">
    指定消息类型
    </div>
    <div class="doc-text">
    发送消息时可以指定类型，时间
    </div>

<cv-example :code="cvScope_2">
    <cv-button @click="notify.send('这是一条成功消息!', 'success', 1000)">
    成功消息 1s
    </cv-button>
    <cv-button @click="notify.send('这是一条警告消息', 'warning', 2000)">
    警告消息 2s
    </cv-button>
    <cv-button @click="notify.send('这是一条危险消息', 'danger', 3000)">
    危险消息 3s
    </cv-button>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './notify'
import { cvScope_1 } from './notify'
import { notify, CvButton } from '@cvtool/design';
import { cvScope_2 } from './notify'
import '@cvtool/design';
</script>