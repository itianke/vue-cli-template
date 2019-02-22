/**
 * 表格自适应 
 */
export default {
    name: 'SearchTableContain',
    mounted() {
        this.computedHeight()
        window.addEventListener('resize', this.resizeHeight)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeHeight)
    },
    methods: {
        resizeHeight() {
            setTimeout(() => {
                this.computedHeight()
            }, 100)
        },
        computedHeight() {
            const table = this.$slots.table[0]
            const footer = this.$slots.footer[0]
            const innerHieght = window.innerHeight
            const tableTop = table.elm.getBoundingClientRect().top
            let maxHeight = innerHieght - tableTop
            if (footer) {
                const footerHeight = footer.elm.offsetHeight
                maxHeight = innerHieght - footerHeight - tableTop
            }
            setTimeout(() => {
                this.$emit('update:height', maxHeight)
            }, 100)
        }
    }
}