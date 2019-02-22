<template>
    <el-menu :default-active="defaultActive" class="el-menu-content" mode="horizontal" @select="handleSelect" v-clickoutside="handleClose">
        <li class="el-menu-item el-menu-item-module" :style="styles" name="title" @click="handleToggleDropdown" :class="[!isBBC ? 'add-margin': '']">
            <template v-if="isBBC">
                <template v-if="hasDropdownList">
                    <img v-if="selectedItem.companyLogo" :src="selectedItem.companyLogo"/>
                    <img src="/static/default.png" v-else />
                </template>
                <template v-else>
                    <img src="/static/default.png"/>
                </template>
            </template>
            <span class="el-module-name">
                {{ selectedItem.orgName || moduleName }}
            </span>
            <template v-if="isBBC">
                <transition name="arrow" v-if="hasDropdownList">
                    <i class="el-icon-arrow-down" :class="[visible ? 'arrow-rotate-start' : 'arrow-rotate-end']" />
                </transition>
                <el-collapse-transition>
                    <ul class="drop-down-module" v-if="visible && hasDropdownList">
                        <li v-for="(item, index) in moduleItems" :key="index" @click="handleIn(item)" :class="[ (value === item.companyId || moduleItems.length === 1 ) ? 'active' : '' ]">
                            <img :src="item.companyLogo" v-if="item.companyLogo"/>
                            <img src="/static/default.png" v-else />
                            {{ item.orgName }}
                        </li>
                    </ul>
                </el-collapse-transition>
            </template>
        </li>
        <router-link :to="tag.path" :key="tag.name" v-for="(tag, index) in menuItems">
            <el-menu-item :index="index + ''" class="el-menu-item-action">
                {{ tag.label }}
            </el-menu-item>
        </router-link>
        <li class="el-menu-item message-btn" v-if="showBtn">
            <slot name="sendMessage"></slot>
            <!-- <template v-if="hasDropdownList">
                <el-button plain @click="handleSendMessage" >发消息</el-button>
            </template> -->
        </li>
    </el-menu>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>