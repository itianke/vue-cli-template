<template>
    <section class="el-visible-content">
        <el-aside class="el-aside-content" width="200px">
            <sidebar >
            </sidebar>
        </el-aside>
        <transition name="main-content">
        <div :class="{'mLeft200': !sidebar.opened}">
            <tags-view/>
            <app-main/>
        </div>
        </transition>
    </section>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
<style lang="scss">
.el-pagination .el-select .el-input {
    width: 83px;
    margin: 0 0 0 16px;
}
.el-pagination__editor.el-input {
    margin: 0 8px 0 6px;
}
.el-pagination__sizes {
    margin-right: 0;
}
.el-pagination__jump {
    margin-left: 17px;
}
.el-pagination__total {
    margin-left: 16px;
    margin-right: 0;
}
.main-content-enter-active {
  transition: all 1s ease;
}

.content {
    position: relative;
    animation: move 1s;
}

@-webkit-keyframes move {
    from {
        left: 0;
    }
    to {
        left: 30px;
    }
}
</style>