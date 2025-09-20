export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
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
</template>

<script lang="ts" setup>
import { CvPopover, CvButton } from '@cvtool/design';
</script>`
export const cvScope_2 = `<template>
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
</template>

<script lang="ts" setup>
import { CvPopover, CvButton } from '@cvtool/design';
</script>`
export const cvScope_3 = `<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvDialog, CvPopover, CvButton } from '@cvtool/design';

const dialog4_1 = ref(false)
const dialog4_2 = ref(false)
</script>`
export const cvScope_4 = `<template>
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
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvPopover, CvButton } from '@cvtool/design';

const controls = ref(false)

const changeControls = () => {
  controls.value = !controls.value
}
</script>`