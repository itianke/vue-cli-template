
import SearchTableContain from './packages/search-table-contain/index.js'
import HeaderBar from './packages/header-bar/index.js'
import ScrollPane from './packages/scroll-pane/index.js'
import ScrollBar from './packages/scroll-bar/index.js'
import MenuBar from './packages/menu-bar/index.js'
import FooterBar from './packages/footer-bar/index.js'
import Sidebar from './packages/sidebar/index.js'
import SearchBar from './packages/search-bar/index.js'
import MainContent from './packages/main-content/index.js'
import Empty from './packages/empty/index.js'
import AppMain from './packages/app-main/index.js'
import AppNav from './packages/app-nav/index.js'
import MainContainer from './packages/main-container/index.js'
import TagsView from './packages/tags-view/index.js'

import packageInfo from '../package.json'

const components = [
  SearchTableContain,
  HeaderBar,
  ScrollPane,
  ScrollBar,
  MenuBar,
  FooterBar,
  Sidebar,
  SearchBar,
  MainContent,
  Empty,
  AppMain,
  AppNav,
  MainContainer,
  TagsView
]

const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default {
  version: packageInfo.version,
  install,
  SearchTableContain,
  HeaderBar,
  ScrollPane,
  ScrollBar,
  MenuBar,
  FooterBar,
  Sidebar,
  SearchBar,
  MainContent,
  Empty,
  AppMain,
  AppNav,
  MainContainer,
  TagsView
}
