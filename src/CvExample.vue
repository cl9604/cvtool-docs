<template>
  <div class="cv-example">
    <div class="example-card">
      <slot></slot>
    </div>
    <div class="code-card">
      <div class="code" v-if="state.show" @contextmenu.prevent>
        <i class="cvfont cv-fuzhi copy" title="复制" @click="copy"></i>
        <pre><code class="hljs atom-one-dark language-html" v-html="codeBloack"></code></pre>
      </div>
      <div class="arrow" :class="{ 'show': state.show }" @click="state.show = !state.show">
        <i class="cvfont cv-icon-test4"></i> {{ state.show ? '收起' : '展开' }}代码
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, computed } from 'vue';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);

const props = defineProps({
  code: { default: '' }
})

const state = ref({
  show: false
})

const codeBloack = computed(() => {
  return hljs.highlightAuto(props.code).value
})

function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement("textarea")
  textArea.setAttribute('style', 'position:fixed;z-index:-999;')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log('复制失败')
  }

  document.body.removeChild(textArea);
}

const copy = () => {
  navigator.clipboard ? navigator.clipboard.writeText(props.code) : fallbackCopyTextToClipboard(props.code)
}
</script>

<style lang="less" scoped>
@import 'highlight.js/styles/atom-one-dark.css';
@import '~@cvtool/design/theme/utils.less';

.cv-example {
  .w;
  .border;
  .box_sizing;

  .example-card {
    .w;
    .pad(20px);
    .box_sizing;
  }

  .code-card {
    .w;
    .pad(0, 10px);
    .box_sizing;

    .code {
      .w;
      .border(var(--cv-border-color), var(--cv-border-size), solid, top);
      .box_sizing;
      .t_s(16px);
      .relative;

      .copy {
        .absolute(10px, 26px, right);
        .handle;
        .hover;
        .t_s(18px);

        &:hover {
          .c(var(--cv-topic-color-active));
        }
      }

      .hljs{
        font-family: 'Consolas';
      }
    }

    .arrow {
      .w;
      .h(32px);
      .l_h(32px);
      .flex;
      .flex_layout;
      .border(var(--cv-border-color), var(--cv-border-size), solid, top);
      .handle;
      .c(#797979);

      .cvfont {
        margin-right: 5px;
      }
    }

    .arrow.show {
      i {
        transform: rotate(180deg);
      }
    }
  }
}
</style>