import TagsView from './src/main'

TagsView.install = function(Vue) {
    Vue.component(TagsView.name, TagsView)
}

export default TagsView