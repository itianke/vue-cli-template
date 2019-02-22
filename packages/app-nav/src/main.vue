<template>
    <!-- :collapse="sidebar.opened" -->
    <el-menu
        mode="vertical"
        :unique-opened="false"
        :default-active="defaultActive"
        :collapse="true"
        background-color="#252a2f"
        text-color="#ececec"
        active-text-color="#fff">
        <el-menu-item index="2-1">
            <div class="icon-wrap"><icon icon="console" color="#fff" width="24" height="24"></icon></div>
            <span>控制中心</span>
        </el-menu-item>
        <el-menu-item index="2-2">
            <div class="icon-wrap"><icon icon="logo-white" color="#fff" width="24" height="24"></icon></div>
            <span>领筑工程云</span>
        </el-menu-item>
    </el-menu>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
