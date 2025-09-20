<template id="text">
  <div class="doc-sub-title">基础用法</div>
</template>

<template id="code">
  <cv-row style="height: 400px">
    <cv-col :span="12" style="height: 100%;">
      <cv-scroll ref="scroll2">
        <p v-for="i in state2.list" :key="i">
          <cv-popover #trigger>第{{ i }}项数据</cv-popover>
        </p>
        <div id="local">描点</div>
      </cv-scroll>
    </cv-col>
    <cv-col :span="12">
      <div>
        <cv-button @click="add2">添加数据</cv-button>
        <cv-button @click="back2">返回顶部</cv-button>
        <cv-button @click="scrollDom2">滚动到指定元素</cv-button>
      </div>
    </cv-col>
  </cv-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvRow, CvCol, CvButton, CvScroll, CvPopover } from '@cvtool/design';

const state2 = ref({
  list: [] as number[],
  currnt: 0,
  count: 8,
})
const add2 = () => {
  for (let i = 0; i < state2.value.count; i++) {
    state2.value.list.push(state2.value.currnt)
    state2.value.currnt++
  }
}
add2()

const scroll2 = ref()
const back2 = () => {
  scroll2.value.scrollTo(0)
}
const scrollDom2 = () => {
  scroll2.value.scrollTo(document.getElementById('local'))
}
</script>