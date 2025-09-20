<template id="text">
  <div class="doc-sub-title">指定消息类型</div>
  <div class="doc-text">
    发送消息时可以指定类型，时间
  </div>
</template>

<template id="code">
  <cv-button @click="notify.send('这是一条成功消息!', 'success', 1000)">成功消息 1s</cv-button>
  <cv-button @click="notify.send('这是一条警告消息', 'warning', 2000)">警告消息 2s</cv-button>
  <cv-button @click="notify.send('这是一条危险消息', 'danger', 3000)">危险消息 3s</cv-button>
</template>

<script lang="ts" setup>
import { notify, CvButton } from '@cvtool/design';

</script>