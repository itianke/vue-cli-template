import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import template from './layout.vue'
// import { getToken, getUserId } from '../../common/auth'
// import { Store as ComStore } from '../../store/modules/common'
// import { Store as UserStore } from '../../store/modules/user'

@Component({
    name: 'layout',
    mixins: [template],
    components: {
    }
})
export default class Layout extends Vue {
    // @ComStore.getter('messageInfo') messageInfo
    // @UserStore.action('changeOrg') changeOrg

    // menuItems = [
    //     { label: '账号详情', name: 'account', path: '/account/survey' },
    //     { label: '认证管理', name: 'auth', path: '/auth/user-auth' },
    //     { label: '安全设置', name: 'security', path: '/security/setting' },
    //     { label: '加入的组织', name: 'organization', path: '/organization/joined' }
    // ]
    defaultActive = ''
    headerInfo = {
        unReaded: 0,
        unTreated: 0
    }
    isOpend = false

    created() {
        if (!this.utils.isEmpty(getToken())) {
            // if (this.messageInfo.trigger)
                // this.loadData()   
        }
    }

    mounted() {
        // this.updateActiveIndex()
    }

    updateActiveIndex() {
        let _moduleName = this.$route.path.match(/[^\/]+/)[0]
        this.menuItems.filter((item, index) => {
            if (item.name === _moduleName) {
                this.activeIndex = index + ''
            }
        })
    }

    loadData() {
        // 加载工作台信息
        this.api.commonApi.loadViewData().then((data) => {
            this.headerInfo.unReaded = data.msgNumber
            this.headerInfo.unTreated = data.inviteNumber
        })
    }

    handleOrgRoute(val) {
        if (!this.utils.isEmpty(val)) {
            this.changeOrg(true)
        }
    }

    handleMouseOver() {
        this.isOpend = true
    }

    handleMouseOut() {
        this.isOpend = false
    }

    @Watch('$route', {
        immediate: true,
        deep: true
    })
    handleWatchPath(val) {
        // this.updateActiveIndex()
    }

    /**
     * 触发更新未读消息/未处理邀请
     *
     * @param {*} val
     * @memberof Layout
     */
    @Watch('messageInfo', {
        immediate: true,
        deep: true
    })
    handleWatchTrigger(val) {
        if (val.trigger) { 
            setTimeout(() => {
                if (!this.utils.isEmpty(getToken()))
                    this.loadData()
            }, 200)
        }
    }
}
