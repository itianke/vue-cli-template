import SideBar from './src/main'

SideBar.install = function(Vue) {
    Vue.component(SideBar.name, SideBar)
}

export default SideBar