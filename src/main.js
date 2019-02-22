// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './view/app/App'
import router from './router'
import store from './store'

import components from './index'
import './ui/element'
import './style/common/element/theme/index.css'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.use(components)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
