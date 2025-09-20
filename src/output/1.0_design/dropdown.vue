<template>

    <div class="doc-text">
    下拉菜单。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>
    <div class="doc-text">
    由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。
    </div>

<cv-example :code="cvScope_1">
    <cv-drapdown :data="options2" :custom="true">
        <cv-button>
        打开下拉菜单
        </cv-button>
    </cv-drapdown>
</cv-example>

    <div class="doc-sub-title">
    有禁用选项
    </div>

<cv-example :code="cvScope_2">
    <cv-drapdown :data="options3" :custom="true" :disabled="true">
        <cv-button>
        打开下拉菜单
        </cv-button>
    </cv-drapdown>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './dropdown'
import { cvScope_1 } from './dropdown'
import { CvDrapdown, CvButton } from '@cvtool/design';
const options2 = [{
  label: '选项1',
  value: '1'
}, {
  label: '选项2',
  value: '2'
}, {
  label: '选项3',
  value: '3'
}, {
  label: '选项4',
  value: '4'
}];
import { cvScope_2 } from './dropdown'
import '@cvtool/design';
const options3 = [{
  label: '选项1',
  value: '1'
}, {
  label: '选项2',
  value: '2'
}, {
  label: '选项3',
  value: '3'
}, {
  label: '选项4',
  value: '4'
}];
</script>