export const cvScope_0 = `<template>
</template>

<script lang="ts" setup>
</script>`
export const cvScope_1 = `<template>
    <cv-button @click="showLoading2">
    展示loading 2s
    </cv-button>
</template>

<script lang="ts" setup>
import { CvButton, loading } from '@cvtool/design'

const showLoading2 = () => {
  loading.show()
  setTimeout(() => loading.close(), 2000);
}
</script>`