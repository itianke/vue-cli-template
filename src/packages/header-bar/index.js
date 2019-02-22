import HeaderBar from './src/main'

HeaderBar.install = function(Vue) {
    Vue.component(HeaderBar.name, HeaderBar)
}

export default HeaderBar