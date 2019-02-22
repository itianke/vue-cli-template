import Sidebar from '../../sidebar'
import AppMain from '../../app-main'
import TagsView from '../../tags-view'

export default {
    name: 'mainContent',
    components: {
        Sidebar,
        AppMain,
        TagsView
    },
    props: {
        noNeedDynamic: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            sidebar: {
                opened: false,
                routeName: null
            }
        }
    },
    mounted() {
        this.sidebar.routeName = this.$route.meta.source
    },
    watch: {
        $route(route) {
            this.sidebar.routeName = route.meta.source
        }
    }
}