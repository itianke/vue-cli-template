<template>
  <div class="tags-view-container" ref="tagViewContainer">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <router-link
        v-for="tag in visitedTags"
        ref="tag"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
        :key="tag.path"
        tag="span"
        class="tags-view-item"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag,$event)">
        {{ tag.title }}
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">刷新</li>
      <li @click="closeSelectedTag(selectedTag)">关闭</li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags">关闭所有</li>
    </ul>
  </div>
</template>

<script src="./index"></script>
<style src="./index.scss" lang="scss" scoped></style>
<style rel="stylesheet/scss" lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 20px;
      height: 20px;
      vertical-align: 4px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        // transform: scale(.8);
        display: inline-block;
        vertical-align: -4px;
      }
      &:hover {
        background-color: rgba(0,0,0,.08);
        color: #000;
      }
    }
  }
  .router-link-active {
    .el-icon-close {
      &:hover {
        background-color: rgba(255,255,255,0.38);
        color: #fff;
      }
    }
  }
}
</style>