import ScrollPane from '../../scroll-pane'

export default {
    name: 'tagsView',
    components: { ScrollPane },
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {}
        }
    },
    computed: {
        visitedTags() {
            return this.$store.state.tagsView.visitedViews
        }
    },
    watch: {
        $route() {
            this.addViewTags()
            this.moveToCurrentTag()
        },
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },
    mounted() {
        this.addViewTags()
    },
    methods: {
        isActive(route) {
            return route.path === this.$route.path
        },
        addViewTags() {
            const { name } = this.$route
            if (name) {
                this.$store.dispatch('addView', this.$route)
            }
            return false
        },
        moveToCurrentTag() {
            const tags = this.$refs.tag
            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to.path === this.$route.path) {
                        this.$refs.scrollPane.moveToTarget(tag)

                        // when query is different then update
                        if (tag.to.fullPath !== this.$route.fullPath) {
                            this.$store.dispatch('updateVisitedView', this.$route)
                        }

                        break
                    }
                }
            })
        },
        refreshSelectedTag(view) {
            this.$store.dispatch('delCachedView', view).then(() => {
                const { fullPath } = view
                this.$nextTick(() => {
                    this.$router.replace({
                        path: '/redirect' + fullPath
                    })
                })
            })
        },
        closeSelectedTag(view) {
            this.$store.dispatch('delView', view).then(({ visitedViews }) => {
                if (this.isActive(view)) {
                    const latestView = visitedViews.slice(-1)[0]
                    if (latestView) {
                        this.$router.push(latestView)
                    } else {
                        this.$router.push('/')
                    }
                }
            })
        },
        closeOthersTags() {
            this.$router.push(this.selectedTag)
            this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
                this.moveToCurrentTag()
            })
        },
        closeAllTags() {
            this.$store.dispatch('delAllViews')
            this.$router.push('/')
        },
        openMenu(tag, e) {
            const menuMinWidth = 108
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$refs['tagViewContainer'].offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX + 15 // 15: margin right

            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }
            this.top = e.clientY - 50

            this.visible = true
            this.selectedTag = tag
        },
        closeMenu() {
            this.visible = false
        }
    }
}