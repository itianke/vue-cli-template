<template>
    <el-container class="app-main-wrapper">
        <template v-if="!$route.meta.mode">
            <main-content></main-content>
        </template>
        <template v-else>
            <transition name="el-fade-in-linear"> 
                <router-view name="public"></router-view>
            </transition>
        </template>
    </el-container>
</template>

<script src="./index" ></script>
<style src="./index.scss" lang="scss" scoped></style>
