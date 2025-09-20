export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-input-number v-model="input2">
    </cv-input-number>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input2 = ref('')
</script>`
export const cvScope_2 = `<template>
    <cv-input-number v-model="input2_1" :step="1" :min="0" :max="10">
    </cv-input-number>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input2_1 = ref('')
</script>`
export const cvScope_3 = `<template>
    <cv-input-number v-model="input3" :readonly="true">
    </cv-input-number>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input3 = ref(1.23)
</script>`
export const cvScope_4 = `<template>
    <cv-input-number v-model="input4" :clearable="true">
    </cv-input-number>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvInputNumber } from '@cvtool/design'

const input4 = ref('')
</script>`