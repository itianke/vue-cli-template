import MainContainer from './src/main'

MainContainer.install = function(Vue) {
    Vue.component(MainContainer.name, MainContainer)
}

export default MainContainer