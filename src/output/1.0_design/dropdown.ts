export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-drapdown :data="options2" :custom="true">
        <cv-button>
        打开下拉菜单
        </cv-button>
    </cv-drapdown>
</template>

<script lang="ts" setup>
import { CvDrapdown, CvButton } from '@cvtool/design';

const options2 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
]
</script>`
export const cvScope_2 = `<template>
    <cv-drapdown :data="options3" :custom="true" :disabled="true">
        <cv-button>
        打开下拉菜单
        </cv-button>
    </cv-drapdown>
</template>

<script lang="ts" setup>
import { CvDrapdown, CvButton } from '@cvtool/design';

const options3 = [
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3' },
  { label: '选项4', value: '4' },
]
</script>`