export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvRow, CvCol, CvButton } from '@cvtool/design';

const dialog1 = ref(false)
</script>`
export const cvScope_2 = `<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvRow, CvCol, CvButton } from '@cvtool/design';

const dialog3_1 = ref(false)
const dialog3_2 = ref(false)
const dialog3_3 = ref(false)

const openDialog = () => {
  dialog3_1.value = true
}
</script>`
export const cvScope_3 = `<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvButton } from '@cvtool/design';

const dialog4 = ref(false)
</script>`