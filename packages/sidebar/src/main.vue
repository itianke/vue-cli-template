<template>
    <div>
        <div class="systemName">
            <span>{{ sysName }}</span>
        </div>
        <el-menu
            mode="vertical"
            :unique-opened="false"
            :default-active="$route.path"
            background-color="#FFF"
            text-color="rgba(0,0,0,.67)"
            active-text-color="#4682F2">
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
        </el-menu>
    </div>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
