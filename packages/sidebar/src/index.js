import SidebarItem from '../sidebarItem/sidebarItem'
import { getMenus } from 'src/utils/auth'
// import store from 'store'

export default {
    name: 'sidebar',
    components: {
        SidebarItem
    },
    props: {
        defaultRouteName: {
            type: String
        },
        backgroundColor: {
            type: String,
            default: '#fff'
        },
        activeTextColor: {
            type: String,
            default: '#FFCED2'
        }
    },
    inject: ['sysName'],
    data() {
        return {
            sidebar: {
                opened: false
            }
        }
    },
    created() {
    },
    computed: {
        routes() {
            let routes = this.$router.options.routes
            console.log('this.$store.state', this.$store.state.user.addRouters)
            if (this.$store.state.user.addRouters) {
                const concatArray = routes.concat(this.$store.state.user.addRouters)
                console.log('concatArray', concatArray)
                return concatArray
            }
            return routes
            // if (!this.$parent.$parent.noNeedDynamic) {
            //     const routes = this.$router.options.routes.filter((item) => {
            //         return item.name === this.defaultRouteName
            //     })
            //     // 按sort排序
            //     routes.sort((a, b) => a.sort - b.sort)
            //     return (routes && routes.length > 0 && routes[0].children) || []
            // }
            // else {
            //     const _routes = getMenus()
            //     const routes = _routes.filter((item) => {
            //         return item.name == this.defaultRouteName
            //     })
            //     return (routes && routes.length > 0 && routes[0].children) || []
            // }

        },
        activePath() {
            // const path = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1, this.$route.path.length) 
            // return path
            return this.$route.path
        }
    },
    methods: {
    }
}   