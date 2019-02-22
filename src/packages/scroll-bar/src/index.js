const delta = 15

export default {
    name: 'scrollBar',
    data() {
        return {
            top: 0
        }
    },
    methods: {
        handleScroll(e) {
            const eventDelta = e.wheelDelta || -e.deltaY * 3
            const $container = this.$refs.scrollContainer
            const $containerHeight = $container.offsetHeight
            const $wrapper = this.$refs.scrollWrapper
            const $wrapperHeight = $wrapper.offsetHeight
            if (eventDelta > 0) {
                this.top = Math.min(0, this.top + eventDelta)
            } else {
                if ($containerHeight - delta < $wrapperHeight) {
                    if (this.top < -($wrapperHeight - $containerHeight + delta)) {
                        this.top = this.top
                    } else {
                        this.top = Math.max(this.top + eventDelta, $containerHeight - $wrapperHeight - delta)
                    }
                } else {
                    this.top = 0
                }
            }
        }
    }
}