<template id="text">
  <div class="doc-sub-title">基础用法</div>
  <div class="doc-text">
    适用广泛的基础单选
  </div>
</template>

<template id="code">
  <cv-button @click="open2">打开提示框</cv-button>
</template>

<script lang="ts" setup>
import { CvButton, confirm } from '@cvtool/design'

const open2 = async () => {
  const success = await confirm({ message: '您的操作可能造成重大影响，请确认是否继续？' })
  if (success) {
    console.log('成功确认')
  } else {
    console.log('取消确认')
  }
}

</script>