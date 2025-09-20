<template>

    <div class="doc-text">
    提供全局的配置选项，让你的配置能够在全局都能够被访问到。
    </div>


    <div class="doc-sub-title">
    基础用法
    </div>

<cv-example :code="cvScope_1">
    <cv-provider :readonly="true">
        <cv-input v-model="input2">
        </cv-input>
    </cv-provider>
</cv-example>

    <div class="doc-sub-title">
    多级嵌套
    </div>
    <div class="doc-text">
    支持嵌套使用，在局部范围内提供一个新的配置选项
    </div>

<cv-example :code="cvScope_2">
    <cv-provider :clearable="true" :input="{ width: '280px' }">
        <div class="doc-text">
        1.全局配置
        </div>
        <cv-label label="输入框">
            <cv-input v-model="state3.input">
            </cv-input>
        </cv-label>
        <cv-label>
            <cv-provider :readonly="true" :clearable="false" :label="{ width: 80 }" :input="{ width: '400px' }" :row="{ margin: 10 }">
                <cv-row>
                    <cv-col>
                        <div class="doc-text">
                        2.子级配置
                        </div>
                        <cv-label label="子下拉框">
                            <cv-select v-model="state3.select" :data="state3.options" :width="'63.4%'">
                            </cv-select>
                        </cv-label>
                        <cv-label>
                            <cv-provider :readonly="false" :clearable="true" :label="{ width: 280, align: 'right' }" :input="{ width: '50%' }" :row="{ gutter: 20, margin: 20 }">
                                <cv-row>
                                    <cv-col>
                                        <div class="doc-text">
                                        3.孙级配置
                                        </div>
                                        <cv-label label="孙下拉框" :width="50">
                                            <cv-select v-model="state3.select" :data="state3.options">
                                            </cv-select>
                                        </cv-label>
                                    </cv-col>
                                </cv-row>
                                <cv-row>
                                    <cv-col>
                                        <cv-label label="孙级联框" :width="50">
                                            <cv-cascader v-model="state3.select" :data="state3.cascader">
                                            </cv-cascader>
                                        </cv-label>
                                    </cv-col>
                                </cv-row>
                                <cv-row>
                                    <cv-label label="孙级联框">
                                        <cv-cascader v-model="state3.select" :data="state3.cascader" :clearable="false">
                                        </cv-cascader>
                                    </cv-label>
                                </cv-row>
                            </cv-provider>
                        </cv-label>
                    </cv-col>
                </cv-row>
            </cv-provider>
        </cv-label>
    </cv-provider>
</cv-example>
</template>
<script lang="ts" setup>
import { cvScope_0 } from './provider'
import { cvScope_1 } from './provider'
import { ref } from 'vue';
import { CvProvider, CvInput } from '@cvtool/design';
const input2 = ref('');
import { cvScope_2 } from './provider'
import 'vue';
import { CvLabel, CvSelect, CvCascader, CvRow, CvCol } from '@cvtool/design';
const state3 = ref({
  input: '',
  number: '',
  select: '2',
  options: [{
    label: '选项1',
    value: '1'
  }, {
    label: '选项2',
    value: '2'
  }],
  cascader: [{
    label: '选项1',
    value: '1'
  }, {
    label: '选项2',
    value: '2'
  }, {
    label: '选项3',
    value: '3',
    children: [{
      label: '选项3-1',
      value: '31'
    }, {
      label: '选项3-2',
      value: '32'
    }]
  }]
});
</script>