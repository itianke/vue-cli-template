import { MessageBox, Message } from 'element-ui'
import { getToken, setCompanyToken, removeToken } from '../../../utils/auth'
import { isEmpty, arrayAttrToObj } from '../../../utils/utils'
import { postJson } from '../../../utils/http'
import { dateTimeFormat } from '../../../utils/filters'

export default {
    name: 'headerBar',
    filters: {
        dateTimeFormat
    },
    props: {
        enabledDropdown: {
            type: Boolean,
            default: false
        },
        config: {
            type: Object,
            default: () => {}
        },
        from: {
            type: String
        }
    },
    data() {
        return {
            user: {},
            isDropDownShow: false,
            isDropDownShowUser: false,
            companyList: [],
            defaultCompany: {
                companyId: null,
                orgName: null,
                companyLogo: ''
            },
            unTreated: 0,
            unReaded: 0,
            userName: '',
            messages: []
        }
    },
    computed: {
        isLogin() {
            return !isEmpty(getToken())
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            if (this.isLogin) {
                // 加载未读/未处理消息
                this.loadTipsRecord()
                // 加载消息下拉
                this.loadMessage()
            }
        },
        logout() {
            Message({
                type: 'success',
                dangerouslyUseHTMLString: true,
                customClass: 'success',
                iconClass: 'msg-success',
                duration: 1500,
                message: '<div class="p1">用户登出成功</div>',
                onClose: () => {
                    removeToken(this.domain)
                    this.handleToPath('PAM', '/login')
                }
            })
        },
        userLogout() {
            MessageBox({
                title: '确定要退出登录吗？',
                message: '退出后须重新登录',
                center: true,
                iconClass: 'alert-warning',
                showCancelButton: true,
                type: 'warning',
                callback: (action) => {
                    if(action == 'confirm'){
                        this.logout()
                    }
                }
            })
        },
    
        handleChange(val) {
            this.isDropDownShow = val
        },
        handleChangeUser(val) {
            this.isDropDownShowUser = val
        },
        handleToPath(_module, path) {
            location.href = `${this.config[_module]}${path}`
        },
        handleRedirect(_module, path) {
            if (this.from === _module) {
                this.$router.push(path)
            } else {
                let tempWindow = window.open()
                tempWindow.location = `${this.config[_module]}${path}`
            }
        },
        handleToJoined(_moduleName) {
            let path = '/organization/joined'
            if (this.unTreated > 0) {
                path = '/organization/invite'
            }
            this.handleRedirect(_moduleName, path)
        },
        /**
         * 切换组织
         *
         * @param {*} val
         */
        handleChangeOrg(id) {
            MessageBox({
                title: '确定要切换到该组织吗',
                message: '',
                center: true,
                iconClass: 'alert-warning',
                showCancelButton: true,
                type: 'warning',
                callback: (action) => {
                    if(action == 'confirm'){
                        window.open(`${location.origin}${location.pathname}?id=${id}`)
                        // postJson(this.config.host, '/lz/console/org/change', { id }).then((data) => {
                        //     console.log(data)
                        // })
                    }
                }
            })
        },
        /**
         * 查询未读/未处理消息
         *
         */
        loadTipsRecord() {
            postJson(this.config.host, '/lz/console/index/load').then((data) => {
                if (data) {
                    this.unReaded = data.msgNumber || 0
                    this.unTreated = data.inviteNumber || 0
                    this.userName = data.userName
                    this.companyList = data.joinedOrgList || []
                    const companyId = this.getParam('id')
                    if (!isEmpty(companyId)) {
                        const obj = arrayAttrToObj(this.companyList, 'companyId', companyId)
                        // 设置切换后的企业ID
                        setCompanyToken(companyId)
                        this.defaultCompany = obj
                    } else {
                        this.$nextTick(() => {
                            // 设置默认的企业ID
                            setCompanyToken(data.joinedOrgList[0].companyId)
                            this.defaultCompany = data.joinedOrgList[0]
                        })
                    }
                }
            })
        },
        /**
         * 查询未读消息（最多五条）
         *
         * @param {*} [params={}]
         */
        loadMessage(params = {}) {
            params.msgClass = 2
            params.pageNum = 1
            params.pageSize = 5
            params.readStatus = 1
            postJson(this.config.host, '/lz/sitemsg/msg/recv/list', params).then(({ list }) => {
                this.messages = list
            })
        },
        /**
         * 获取URL参数
         *
         * @param {*} paramName
         * @returns
         */
        getParam(paramName) { 
            let paramValue = "", isFound = !1; 
            if (location.search.indexOf("?") == 0 && location.search.indexOf("=") > 1) { 
                let arrSource = unescape(location.search).substring(1, location.search.length).split("&"), i = 0; 
                while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
            } 
            return paramValue == "" && (paramValue = null), paramValue 
        } 
    }
}