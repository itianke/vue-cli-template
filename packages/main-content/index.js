import MainContent from './src/main'

MainContent.install = function(Vue) {
    Vue.component(MainContent.name, MainContent)
}

export default MainContent