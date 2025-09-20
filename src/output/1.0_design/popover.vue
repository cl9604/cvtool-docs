<template>

    <div class="doc-text">
    用于快捷导航、情境选项、提示引导或临时视图等场景。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    基础的用法。
    </div>

<cv-example :code="cvScope_1">
    <cv-popover>
        <template #trigger="">
            <cv-button>
            弹出层click的锚点
            </cv-button>
        </template>
    弹出层click的内容
    </cv-popover>
    <cv-popover trigger="hover">
        <template #trigger="">
            <cv-button>
            弹出层hover的锚点
            </cv-button>
        </template>
    弹出层hover的内容
    </cv-popover>
</cv-example>

    <div class="doc-sub-title">
    禁用
    </div>

<cv-example :code="cvScope_2">
    <cv-popover :disabled="true">
        <template #trigger="">
            <cv-button>
            弹出层的锚点
            </cv-button>
        </template>
        <div>
        1233
        </div>
    </cv-popover>
</cv-example>

    <div class="doc-sub-title">
    弹窗中使用
    </div>

<cv-example :code="cvScope_3">
    <cv-button @click="dialog4_1 = true">
    打开弹窗
    </cv-button>
    <cv-dialog v-model="dialog4_2" :mask="false">
        <cv-popover :trigger="'click'">
            <template #trigger="">
                <cv-button>
                弹出层的锚点
                </cv-button>
            </template>
            <div>
            1233
            </div>
        </cv-popover>
    </cv-dialog>
    <cv-dialog v-model="dialog4_1" :mask="false">
        <cv-popover :trigger="'click'">
            <template #trigger="">
                <cv-button>
                弹出层的锚点
                </cv-button>
            </template>
            <cv-button @click="dialog4_2 = true">
            打开新弹出层
            </cv-button>
        </cv-popover>
    </cv-dialog>
</cv-example>

    <div class="doc-sub-title">
    主动控制
    </div>

<cv-example :code="cvScope_4">
    <cv-button @click.stop="changeControls">
    {{ controls ? '关闭' : '打开' }}弹出层
    </cv-button>
    <cv-popover v-model="controls">
        <template #trigger="">
            <span>
            触发元素
            </span>
        </template>
    这里是主动触发的弹出层内容
    </cv-popover>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './popover'
import { cvScope_1 } from './popover'
import { CvPopover, CvButton } from '@cvtool/design';
import { cvScope_2 } from './popover'
import '@cvtool/design';
import { cvScope_3 } from './popover'
import { ref } from 'vue';
import { CvDialog } from '@cvtool/design';
const dialog4_1 = ref(false);
const dialog4_2 = ref(false);
import { cvScope_4 } from './popover'
import 'vue';
import '@cvtool/design';
const controls = ref(false);
const changeControls = () => {
  controls.value = !controls.value;
};
</script>