import AppNav from './src/main'

AppNav.install = function(Vue) {
    Vue.component(AppNav.name, AppNav)
}

export default AppNav