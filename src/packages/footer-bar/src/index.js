export default {
    name: 'footerBar',
    props: {
        protocolUrl: {
            type: String,
            default: ''
        },
        privacyUrl: {
            type: String,
            default: ''
        },
        onlineMallUrl: {
            type: String,
            default: ''
        },
        enginnerUrl: {
            type: String,
            default: ''
        },
        maintenanceUrl: {
            type: String,
            default: ''
        },
        financeUrl: {
            type: String,
            default: ''
        },
        labourServiceUrl: {
            type: String,
            default: ''
        },
        config: {
            type: Object,
            default: {}
        }
    },
    methods: {
        handleOpen(path) {
            window.open(path)
        },
        toModule(_moduleName, path) {
            if (this.fromModule === _moduleName) {
                this.$router.push(path)
            } else {
                const redirectPath = this.config.api[_moduleName] + path
                this.handleOpen(redirectPath)
            }
        }
    }
}