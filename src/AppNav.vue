<template>
  <div class="doc-aside">
    <cv-scroll :padding="topPadding">
      <div class="doc-item" :class="{ 'active': route.path === aside.active }" v-for="(route, i) in aside.menu" :key="i"
        @click="$router.push(route.path)">
        {{ route.meta?.name }}
      </div>
    </cv-scroll>
  </div>
  <div class="doc-viewer">
    <cv-scroll :padding="topPadding">
      <div class="doc-title">{{ currentRoute.meta.name }}</div>
      <router-view></router-view>
    </cv-scroll>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { RouteLocationNormalizedLoaded, RouteRecordRaw, useRoute } from 'vue-router'
import { CvScroll } from '@cvtool/design';
import routers from './output'

const currentRoute = useRoute()

const aside = reactive({
  menu: [] as RouteRecordRaw[],
  active: '',
})
const watchRoute = (cur: RouteLocationNormalizedLoaded) => {
  aside.active = cur.path
  const router = routers.find(router => router.name === cur.meta.package)
  if (router === undefined) {
    aside.menu = []
  } else {
    aside.menu = router.children ?? []
  }
}
watch(currentRoute, watchRoute, { immediate: true })

const topPadding = `50,20,20`
</script>

<style lang="less" scoped>
@import '~@cvtool/design/theme/utils.less';

@aside-width: 230px;
@aside-item-height: 40px;

.doc-aside {
  .w(@aside-width);
  .h;

  .doc-item {
    .w;
    .h(@aside-item-height);
    .l_h(@aside-item-height);
    .handle;
    .hover;
    .t_s(var(--cv-title-size));
  }

  .doc-item:hover,
  .doc-item.active {
    .c(var(--cv-topic-color-active));
  }

  .doc-item.active {
    .t_w;
  }
}

.doc-viewer {
  .w_c(@aside-width);
  .h;
}
</style>