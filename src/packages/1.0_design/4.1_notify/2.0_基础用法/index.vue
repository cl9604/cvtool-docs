<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    默认的消息通知
  </div>
</template>

<template id="code">
    <cv-button @click="notify.send('这是默认的消息通知!')">发送消息</cv-button>
</template>

<script lang="ts" setup>
import { notify, CvButton } from '@cvtool/design';

</script>