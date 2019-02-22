export default {
    name: 'appNav',
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        defaultActive: {
            type: String
        }
    },
    data() {
        return {

        }
    },
    computed: {
        routes() {
            return this.$router.options.routes
        }
    },
    methods: {
    }
}