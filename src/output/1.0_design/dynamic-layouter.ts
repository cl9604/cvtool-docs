export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <div :style="style2">
        <cv-dynamic-layouter>
        </cv-dynamic-layouter>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CvDynamicLayouter } from '@cvtool/design';

const style2 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;'
})
</script>`
export const cvScope_2 = `<template>
    <div :style="style3">
        <cv-dynamic-layouter :mode="'vertical'">
        </cv-dynamic-layouter>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { CvDynamicLayouter } from '@cvtool/design';

const style3 = computed(() => {
  return 'height:400px;border:1px solid var(var(--cv-border-color));margin:20px 0;'
})
</script>`