import SearchBar from './src/main'

SearchBar.install = function(Vue) {
  Vue.component(SearchBar.name, SearchBar)
};

export default SearchBar