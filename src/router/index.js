/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/components/layout.vue'
import About from '@/view/page/about.vue'
import Home from '@/view/page/home.vue'
import Product from '@/view/page/product.vue'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'about',
          name: 'About',
          component: About
        },
        {
          path: 'product',
          name: 'Product',
          component: Product
        }
      ]
    }
  ]
})
