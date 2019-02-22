import MainContent from '../../main-content'
import Sidebar from '../../sidebar'

export default {
    name: 'mainContainer',
    components: {
        MainContent,
        Sidebar
    },
    props: {
        sysName: {
            type: String
        }
    },
    provide() {
        return {
            sysName: this.sysName
        }
    }
}