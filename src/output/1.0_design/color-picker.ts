export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-color-picker v-model="input2">
    </cv-color-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker } from '@cvtool/design'

const input2 = ref('')
</script>`
export const cvScope_2 = `<template>
    <cv-color-picker v-model="input3" :readonly="true">
    </cv-color-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker } from '@cvtool/design'

const input3 = ref('#268AE7')
</script>`
export const cvScope_3 = `<template>
    <cv-label label="颜色">
        <cv-color-picker v-model="input4">
        </cv-color-picker>
    </cv-label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker, CvLabel } from '@cvtool/design'

const input4 = ref('')
</script>`
export const cvScope_4 = `<template>
    <cv-label label="颜色">
        <cv-color-picker v-model="input5" :opacity="true">
        </cv-color-picker>
    </cv-label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvColorPicker, CvLabel } from '@cvtool/design'

const input5 = ref('')
</script>`