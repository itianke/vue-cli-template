import AppMain from './src/main'

AppMain.install = function(Vue) {
    Vue.component(AppMain.name, AppMain)
}

export default AppMain