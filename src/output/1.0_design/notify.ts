export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-button @click="notify.send('这是默认的消息通知!')">
    发送消息
    </cv-button>
</template>

<script lang="ts" setup>
import { notify, CvButton } from '@cvtool/design';
</script>`
export const cvScope_2 = `<template>
    <cv-button @click="notify.send('这是一条成功消息!', 'success', 1000)">
    成功消息 1s
    </cv-button>
    <cv-button @click="notify.send('这是一条警告消息', 'warning', 2000)">
    警告消息 2s
    </cv-button>
    <cv-button @click="notify.send('这是一条危险消息', 'danger', 3000)">
    危险消息 3s
    </cv-button>
</template>

<script lang="ts" setup>
import { notify, CvButton } from '@cvtool/design';
</script>`