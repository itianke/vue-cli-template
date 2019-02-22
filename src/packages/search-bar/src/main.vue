
<template>
    <el-form :model="params" class="search-bar" :inline="inline" ref="form" @submit.native.prevent="searchHandler()"
        :label-width="labelWidth ? (labelWidth + 'px') : ''">
        <el-row class="search-condition">
            <el-col v-for="(form, index) in forms" :key="index" 
                :xl="form.colWidth"
                :lg="form.colWidth + 2"
                :md="form.colWidth + 6"
                :sm="form.colWidth + 10"
                :xs="(form.colWidth + 16 > 24 ? 24 : (form.colWidth + 16))" >
                <transition name="fade">
                <el-form-item 
                v-show="form.autoVisible"
                :prop="form.itemType != 'daterange' ? form.prop : (datePrefix + index)"
                :label="form.label" :rules="form.rules || []"
                :label-width="form.itemType === 'daterange' ? '370px !important' : (form.labelWidth ? (form.labelWidth + 'px') : '')">
                <el-input v-if="form.itemType === 'input' || form.itemType === undefined"
                    v-model="params[form.modelValue]"
                    :size="form.size ? form.size : size"
                    :readonly="form.readonly"
                    :disabled="form.disabled"
                    :placeholder="form.placeholder"
                    :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')" />
                <el-select v-else-if="form.itemType === 'select'"
                    v-model="params[form.modelValue]"
                    clearable
                    :size="form.size ? form.size : size"
                    :disabled="form.disabled"
                    :placeholder="form.placeholder"
                    :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')" >
                    <el-option v-for="(option, optionIndex) in form.options" :key="optionIndex + '_local'"
                    :value="(typeof option === 'object') ? option[form.valueKey || 'value'] : option"
                    :label="(typeof option === 'object') ? option[form.labelKey || 'label'] : option" />
                    <el-option v-for="(op, opIndex) in selectOptions[selectOptionPrefix + index]" :key="opIndex + '_remote'"
                    :value="(typeof op === 'object') ? op[form.valueKey || 'value'] : op"
                    :label="(typeof op === 'object') ? op[form.labelKey || 'label'] : op" />
                </el-select>
                <el-cascader v-else-if="form.itemType === 'cascader'"
                    v-model="params[form.modelValue]"
                    clearable
                    change-on-select
                    :options="form.options"
                    :size="form.size ? form.size : size"
                    :disabled="form.disabled"
                    :placeholder="form.placeholder"
                    :props="props"
                    :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')">
                </el-cascader>
                <el-date-picker v-else-if="form.itemType === 'date'"
                    v-model="params[form.modelValue]"
                    type="date" :placeholder="form.placeholder"
                    :size="form.size ? form.size : size"
                    :disabled="form.disabled"
                    :readonly="form.readonly"
                    :editable="form.editable"
                    :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
                    :picker-options="form.pickerOptions || {}" />
                <template v-else-if="form.itemType === 'daterange'">
                    <ul class="el-date-range">
                        <li class="el-date-start">
                            <el-date-picker 
                                v-model="params[form.prop[0]]"
                                type="date" :placeholder="form.placeholder"
                                :size="form.size ? form.size : size"
                                :disabled="form.disabled"
                                :readonly="form.readonly"
                                :editable="form.editable"
                                value-format="yyyy-MM-dd"
                                :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
                                :picker-options="startTimeLimit(params[form.prop[1]])" />
                        </li>
                        <li class="el-date-between">-</li>
                        <li class="el-date-end">
                            <el-date-picker 
                                v-model="params[form.prop[1]]"
                                type="date" :placeholder="form.placeholder"
                                :size="form.size ? form.size : size"
                                :disabled="form.disabled"
                                :readonly="form.readonly"
                                :editable="form.editable"
                                value-format="yyyy-MM-dd"
                                :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
                                :picker-options="endTimeLimit(params[form.prop[0]])" />
                        </li>
                    </ul>        
                </template>
 
                </el-form-item>
                </transition>
            </el-col>
        </el-row>
        <el-row type="flex">
            <div class="search-bar-btn-group">
                <div class="search-bar-left-btns">
                    <div class="search-bar-btn" v-if="showAddBtn">
                        <el-button
                            v-hasPermisson="addCode"
                            type="primary"
                            :size="size"
                            @click="handleAddHandler"
                            :loading="addLoading">
                            {{ addBtnText }}
                        </el-button>
                    </div>
                </div>
                <div class="search-bar-right-btns">
                    <div class="search-bar-btn" v-if="showSearchGroupBtn">
                        <el-button
                            type="primary"
                            :size="size"
                            @click="searchHandler"
                            :loading="submitLoading">
                            {{ submitBtnText }}
                        </el-button>
                    </div>
                    <div class="search-bar-btn" v-if="showSearchGroupBtn">
                        <el-button :plain="true"
                            :size="size" 
                            @click="resetForm"
                            :loading="submitLoading">
                            {{ resetBtnText }}
                        </el-button>
                    </div>
                    <div class="search-bar-btn" v-if="showCollapseBtn">
                        <el-button type="text" :plain="false"
                            :size="size"
                            v-if="options.arrowUp"
                            @click="collapseUp">
                            {{ options.foldDownText }}
                            <i class="el-icon-arrow-down" />
                        </el-button>
                        <el-button type="text" :plain="false"
                            :size="size"
                            v-if="!options.arrowUp"
                            @click="collapseDown">
                            {{ options.foldUpText }}
                            <i class="el-icon-arrow-up" />
                        </el-button>
                    </div>
                </div>
            </div>
        </el-row>
        <el-row>
            <slot></slot>
        </el-row>
    </el-form>
</template>

<script src="./index"></script>
<style src="./main.scss" lang="scss" scoped></style>
<style lang="scss">
.search-bar {
    .el-form-item {
        padding: 0 32px;
        margin-bottom: 10px !important;
        .el-form-item__label {
            // width: 200px !important;
            line-height: 32px;
            text-align: left;
        }
        
        .el-form-item__content {
            line-height: 32px;
            margin-left: 0 !important;
        }
        .el-date-range {
            list-style-type: none;
            li {
                float: left;
            }
            .el-date-editor {
                width: 170px !important;
            }
            .el-date-between {
                height: 100%;
            }
            .el-date-between, .el-date-end {
                margin-left: 5px;
            }
        }
    }
}
</style>
