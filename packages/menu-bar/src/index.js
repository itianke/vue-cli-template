import ScrollPane from '../../scroll-pane/index'
import Clickoutside from 'src/utils/clickoutside'
import ElCollapseTransition from 'src/utils/collapse-transition'
export default {
    name: 'menuBar',
    components: {
        ScrollPane,
        ElCollapseTransition
    },
    directives: {
        Clickoutside
    },
    props: {
        value: {
            required: false
        },
        menuItems: {
            type: Array,
            default: []
        },
        moduleName: String,
        moduleItems: {
            type: Array,
            default: () => {
                return []
            }
        },
        moduleLogo: {
            type: String,
            default: 'LOGO'
        },
        backgroundColor: String,
        styles: {
            type: Object,
            default: {}
        },
        activeTextColor: String,
        textColor: String,
        defaultActive: {
            type: String
        },
        showBtn: {
            type: Boolean,
            default: false
        },
        selectCallback: {
            type: Function
        },
        messageCode: {
            type: String
        }
    },
    data() {
        return {
            activeIndex: '1',
            visible: false,
            selectedItem: {}
        }
    },
    computed: {
        hasDropdownList() {
            return this.moduleItems.length > 0
        },
        isBBC() {
            return this.$parent.fromModule === 'BBC'
        }
    },
    created() {
        if (this.moduleItems.length > 0) {
            this.selectedItem = this.moduleItems[0]
        }
    },
    mounted() {
    },
    methods: {
        isActive(route) {
            return route.name === this.$route.meta.source
        },
        handleTagRoute(val) {

        },
        handleSelect(key, keyPath) {
            // console.log(keyPath)
        },
        handleToggleDropdown() {
            this.visible = !this.visible
        },
        handleClose() {
            this.visible = false
        },
        updateActiveIndex(val) {
            this.menuItems.forEach((item, index) => {
                if (index + '' === activeIndex) {
                    this.defaultActive = activeIndex
                }
            })
        },
        handleSendMessage() {
            if (this.selectedItem.companyId) {
                window.open(this.$parent.config.api.PMM + '/sended/new?id=' + this.selectedItem.companyId)
            }
        },
        handleIn(item) {
            this.selectedItem = item
            this.selectCallback(item)
        }
    },
    watch: {
        'moduleItems': {
            handler(items) {
                if (this.value === null || this.value === undefined || this.value === '') {
                    this.selectedItem = items[0]
                }
                else {
                    if (items.length === 1)
                        this.selectedItem = items[0]
                    else {
                        items.forEach(item => {
                            if (this.value === item.companyId) {
                                this.selectedItem = item
                            }
                        })
                    }
                }
            },
            deep: true
        }
    }
}