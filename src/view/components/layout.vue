<template>
  <div class="app-wrapper">
      <header-bar></header-bar>
      <main-content class="main-content">
          <router-view></router-view>
      </main-content>
  </div>
</template>

<script>
/* eslint-disable */ 
import mainContent from '../page/home.vue'
import headerBar from './header-bar.vue'
export default {
  name: 'layout',
  components: {
    headerBar,
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
