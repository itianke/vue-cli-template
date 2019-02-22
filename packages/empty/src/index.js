export default {
    name: 'empty',
    props: {
        imgSrc: {
            type: String,
        },
        icon: {
            type: String,
        },
        iconColor: {
            type: String,
        },
        tips: {
            type: String,
        },
        smallTips: {
            type: String,
        },
        buttonText: {
            type: String,
        },
        redirectUrl: {
            type: String,
        },
        needButton: {
            type: Boolean,
            default: false
        }
    },
    created() {
        
    },
    methods: {
        handleRedirect() {
            if(this.redirectUrl){
                this.$router.push(this.redirectUrl)
            }
        }
    }
}