<template>
    <div>
        <div class="large-tips-layout">
            <div class="layout-item">
                <slot name="img"></slot>
                <div class="layout-tips">
                    <span class="large">{{ tips}}</span>
                    <span class="small">{{ smallTips }}</span>
                    <div class="layout-option" v-if="needButton">
                        <el-button type="primary" @click="handleRedirect">{{ buttonText }}</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
