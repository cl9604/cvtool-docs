<template>

    <div class="doc-text">
    在保留当前页面状态的情况下，告知用户并承载相关操作。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    Dialog 弹出一个对话框，适合需要定制性更大的场景。
    </div>

<cv-example :code="cvScope_1">
    <cv-button @click="dialog1 = true">
    打开弹窗
    </cv-button>
    <cv-dialog v-model="dialog1" title="弹窗一">
        <cv-row v-for="i in 30" :key="i">
            <cv-col>
            这是一个弹窗,它需要展示一些内容
            </cv-col>
        </cv-row>
    </cv-dialog>
</cv-example>

    <div class="doc-sub-title">
    模态框
    </div>
    <div class="doc-text">
    开启模态框
    </div>

<cv-example :code="cvScope_2">
    <cv-button @click="openDialog">
    打开弹窗
    </cv-button>
    <cv-dialog v-model="dialog3_1" :mask="true" title="模态框">
        <cv-row v-for="i in 30" :key="i">
            <cv-col>
            这是一个弹窗,它需要展示一些内容
            </cv-col>
        </cv-row>
        <template #footer="">
            <cv-button @click="dialog3_2 = true">
            打开另一个模态框
            </cv-button>
        </template>
    </cv-dialog>
    <cv-dialog v-model="dialog3_2" :mask="true" title="模态框">
        <cv-row v-for="i in 30" :key="i">
            <cv-col>
            这是一个弹窗,它需要展示一些内容
            </cv-col>
        </cv-row>
        <template #footer="">
            <cv-button @click="dialog3_3 = true">
            打开另一个模态框
            </cv-button>
        </template>
    </cv-dialog>
    <cv-dialog v-model="dialog3_3" :mask="true" title="模态框">
        <cv-row v-for="i in 30" :key="i">
            <cv-col>
            这是一个弹窗,它需要展示一些内容
            </cv-col>
        </cv-row>
    </cv-dialog>
</cv-example>

    <div class="doc-sub-title">
    设置宽度
    </div>
    <div class="doc-text">
    设置弹出的宽度，模拟一个确认框。
    </div>

<cv-example :code="cvScope_3">
    <cv-button @click="dialog4 = true">
    打开弹窗
    </cv-button>
    <cv-dialog v-model="dialog4" :mask="true" width="450px" title="提示">
        <i class="cvfont cv-warning">
        </i>
    请注意，这是一个提示。您需要在确认与取消之间做出选择！
        <template #footer="">
            <cv-button @click="dialog4 = false">
            确 认
            </cv-button>
            <cv-button @click="dialog4 = false">
            取 消
            </cv-button>
        </template>
    </cv-dialog>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './dialog'
import { cvScope_1 } from './dialog'
import { ref } from 'vue';
import { CvDialog, CvRow, CvCol, CvButton } from '@cvtool/design';
const dialog1 = ref(false);
import { cvScope_2 } from './dialog'
import 'vue';
import '@cvtool/design';
const dialog3_1 = ref(false);
const dialog3_2 = ref(false);
const dialog3_3 = ref(false);
const openDialog = () => {
  dialog3_1.value = true;
};
import { cvScope_3 } from './dialog'
import 'vue';
import '@cvtool/design';
const dialog4 = ref(false);
</script>