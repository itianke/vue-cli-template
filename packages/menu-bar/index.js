import MenuBar from './src/main'

MenuBar.install = function(Vue) {
    Vue.component(MenuBar.name, MenuBar)
}

export default MenuBar