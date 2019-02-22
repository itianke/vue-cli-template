<template>
  <el-main class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/common/transition";
.app-main {
  height: calc(100vh - 112px);
  width: 100%;
  overflow-y: auto;
  position: relative;
  background: #F0F0F0;
}

.app-main::-webkit-scrollbar {
  width: 10px;
}

.app-main::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #eee;
}

.app-main::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #BDBDBD;
}
</style>

