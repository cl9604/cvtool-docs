<template>
  <div class="cv-doc">
    <div class="doc-header">
      <div class="doc-logo">
        <img class="doc-logo" @click="router.push('/')"
          :src="`logo/透明背景LOGO.png`" alt="logo">
        <span class="doc-package">{{ currentRoute?.meta?.package }}</span>
      </div>
    </div>
    <div class="doc-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const currentRoute = useRoute()
</script>

<style lang="less">
@import '~@cvtool/design/theme/global.less';
@import '~@cvtool/design/font/iconfont.css';

@header-height: 80px;
@logo-size: 120px;

html,
body,
#app {
  .w;
  .h;
  .pad(0);
  .mar(0);
  .clip;
  .b_c(var(--cv-topic-color));
  .t_f;
}

.cv-doc {
  .w(1300px);
  .h;
  .mar(0, auto);
  .c(var(--cv-font-color));
  .t_s;

  a {
    .c(var(--cv-font-color));
  }

  .doc-header {
    .w;
    .h(@header-height);
    .flex;
    .flex_layout(space-between);
    .box_sizing;
    .border(var(--cv-border-color), 1px, solid, bottom);

    .doc-logo {
      .flex;
      .flex_layout(flex-start);

      .doc-logo {
        .handle;
        .w(@logo-size);
      }
    }

    .doc-package {
      .c(var(--cv-topic-color-active));
      .t_w;
      .t_s(20px);
      .mar(0, 0, 0, 20px);
    }

    .doc-link {
      .h;
      .flex;
      .flex_layout(flex-end);
      .t_s(var(--cv-title-size));

      .doc-item {
        .t_w;
        .mar(0, 0, 0, 20px);
        .pad(0, 0, 0, 20px);
        .c(#eee);
        .handle;
      }

      .doc-item.active {
        .c(var(--cv-blue-color));
      }
    }
  }

  .doc-body {
    .w;
    .h_c(@header-height);
    .flex;
    .flex_layout;
  }


  .doc-title {
    .t_s(24px);
    .t_w;
  }

  .doc-sub-title {
    .t_s(20px);
    .t_w;
    .mar(55px, 0, 20px);
  }

  .doc-text {
    .l_h(1.5em);
    .c(#e1e1e1);
    .mar(14px, 0);
  }

  .doc-card {
    .w;
    .border;
    .radius;
    .pad(20px);
    .box_sizing;
  }

  .engine-wrapper {
    .w;
    .h(500px);
    .relative;
  }
}
</style>
