import ScrollPane from './src/main'

ScrollPane.install = function(Vue) {
    Vue.component(ScrollPane.name, ScrollPane)
}

export default ScrollPane