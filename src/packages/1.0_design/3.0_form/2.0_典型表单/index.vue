<template id="text">
  <div class="doc-sub-title">典型表单</div>
  <div class="doc-text">
    包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
  </div>
</template>

<template id="code">
    <cv-provider :label="{ width: 75, align: 'left' }">
        <cv-form ref="ruleForm2" :data="state2" :rules="rules2">
            <cv-row>
                <cv-col>
                    <cv-label label="活动名称" rule="name">
                        <cv-input v-model="state2.name" :clearable="true"></cv-input>
                    </cv-label>
                </cv-col>
            </cv-row>
            <cv-row>
                <cv-col :span="12">
                    <cv-label label="活动区域" rule="select">
                        <cv-select v-model="state2.select" :data="state2.selectOptions" :searchable="true"
                            :clearable="true"></cv-select>
                    </cv-label>
                </cv-col>
                <cv-col :span="12">
                    <cv-label label="活动级联" rule="cascader">
                        <cv-cascader v-model="state2.cascader" :data="state2.cascaderOptions" :searchable="true"
                            :clearable="true"></cv-cascader>
                    </cv-label>
                </cv-col>
            </cv-row>
            <cv-row>
                <cv-col :span="12">
                    <cv-label label="活动人数" rule="number">
                        <cv-input-number v-model="state2.number" :clearable="true"></cv-input-number>
                    </cv-label>
                </cv-col>
                <cv-col :span="12">
                    <cv-label label="自动提醒">
                        <cv-checked v-model="state2.checked"></cv-checked>
                    </cv-label>
                </cv-col>
            </cv-row>
            <cv-row>
                <cv-col :span="12">
                    <cv-label label="活动主题">
                        <cv-color-picker v-model="state2.color"></cv-color-picker>
                    </cv-label>
                </cv-col>
                <cv-col :span="12">
                </cv-col>
            </cv-row>
        </cv-form>
    </cv-provider>
    <cv-button @click="validateRuleForm2">验证</cv-button>
    <cv-button @click="resetRuleForm2">重置</cv-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CvProvider, CvForm, CvRow, CvCol, CvLabel, CvInput, CvInputNumber, CvChecked, CvSelect, CvCascader, CvColorPicker, CvButton } from '@cvtool/design';

const state2 = ref({
    name: '',
    select: '',
    selectOptions: [
        { label: '活动大厅', value: '1', },
        { label: '圆浪浪展厅', value: '2', },
    ],
    cascader: '',
    cascaderOptions: [
        { label: '活动大厅', value: '1', },
        { label: '圆浪浪展厅', value: '2', },
        {
            label: '自定义', value: '3', children: [
                { label: '自定义1', value: '3-1' },
                { label: '自定义2', value: '3-2' },
                { label: '自定义3', value: '3-3' },
                { label: '自定义4', value: '3-4' },
            ]
        },
    ],
    checked: false,
    number: '',
    color: '',
})

const ruleForm2 = ref<typeof CvForm>()
const rules2 = {
    name: { required: true, message: '名称不能为空' },
    select: { required: true, message: '区域不能为空' },
    cascader: { required: true, message: '级联不能不为空' },
    number: { required: true, message: '人数不能不为空' },
}
const validateRuleForm2 = () => {
    ruleForm2.value?.validator()
}
const resetRuleForm2 = () => {
    ruleForm2.value?.reset()
}
</script>
