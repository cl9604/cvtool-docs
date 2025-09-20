<template>
  <cv-scroll :margin="10" :padding="10">
    <div class="doc-entry">
      <div class="route-entry" v-for="(route, i) in routes" :key="i" @click="$router.push(route.path)">
        {{ route.name }}
      </div>
      <div class="route-entry route-entry-space" v-for="i in 3" :key="i"></div>
    </div>
  </cv-scroll>
</template>

<script lang="ts" setup>
import { CvScroll } from '@cvtool/design';
import routes from './output';
</script>

<style lang="less" scoped>
@import '~@cvtool/design/theme/utils.less';

@page-wdith: 230px;

.doc-entry {
  .w;
  .h;
  .flex(wrap);
  .flex_layout(flex-start, space-around);

  .route-entry {
    .w(350px);
    .h(240px);
    .mar(0, 20px, 20px);
    .border;
    .radius(8px);
    .shadow(0, 0, 0);
    .flex;
    .flex_layout(space-around);
    .hover;
    .handle;

    &:hover {
      .shadow(0, 0, 8px, var(--cv-blue-color));
    }
  }

  .route-entry-space {
    .mar(0);
    .h(0);
    border-width: 0;
  }
}
</style>