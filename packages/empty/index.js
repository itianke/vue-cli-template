import Empty from './src/main'

Empty.install = function(Vue) {
    Vue.component(Empty.name, Empty)
}

export default Empty