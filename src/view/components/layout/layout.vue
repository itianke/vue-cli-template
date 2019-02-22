<template>
  <div class="app-wrapper">
      <el-container>
        <el-header>
            <header-bar>
            </header-bar>
        </el-header>
        <el-container class="app-wrapper">
            <el-aside>
                <app-nav></app-nav>
            </el-aside>
            <el-main class="el-main-container">
                <main-container sysName="账户中心"></main-container>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */ 
import mainContent from '../../page/home.vue'
export default {
  name: 'layout',
  components: {
    mainContent
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
