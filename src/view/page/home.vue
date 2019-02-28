<template>
  <div class="home-page">
    this is home page.
    <br>
    <router-link to="about">about</router-link>
    <router-link to="product">product</router-link>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Home',
  data() {
    return {
      msg: 'information'
    }
  }
}
</script>