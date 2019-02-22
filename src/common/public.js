import Vue from 'vue'
import Component from 'vue-class-component'
import { phoneFormat, dateFormat, dateTimeFormat, emailFormat } from 'common/filters'
@Component({
    filters: {
        phoneFormat,
        dateFormat,
        dateTimeFormat,
        emailFormat
    }
})
export default class Public extends Vue {
    btnLoading = false
    pageLoading = true
    pageLoadingText = 'LOADING'
    userInfo = {}
    table = {
        data: [],
        url: null,
        maxHeight: 0
    }
    pagination = {
        total: 0,
        page: 1,
        size: 10,
        pageSizes: [10, 20, 50, 100]
    }
    dialog = {
        data: null,
        visible: false,
        title: null,
        size: 'normal'
    }
    /**
     * 验证是否为数字类型
     *
     * @param {*} rule
     * @param {*} value
     * @param {*} callback
     * @returns
     * @memberof Public
     */
    validateNumber(rule, value, callback) {
        let limit = typeof rule.low !== 'undefined' ? rule.low : 1
        if (value === undefined || value === '' || value === null) {
            return callback(new Error('请输入'))
        }
        if (value - 0 < limit) {
            return callback('不能小于' + limit);
        }
        const reg = /^([0-9][\d]{0,5})(\.[\d]{1,2})?$/;

        if (!reg.test(value)) {
            return callback(new Error('请输入有效数字'))
        };
        callback()
    }

    validateMobile(rule, value, callback) {
        if (value === undefined || value === '' || value === null) {
            return callback(new Error('请输入手机号码'))
        }
        const reg = new RegExp(/^1[3-9]\d{9}$/)
        if (!reg.test(value)) {
            return callback(new Error('请输入正确的手机号码'))
        }
        callback()
    }

    validateSpace(rule, value, callback) {
        if (/\s+/.test(value)) {
            return callback(new Error('不允许有空格字符'))
        }
        callback()
    }

    hidePageLoading() {
        if (this.pageLoading) {
            this.$nextTick(() => {
                this.pageLoading = false
            })
        }
    }
}