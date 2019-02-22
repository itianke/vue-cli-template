import Cookies from 'js-cookie'
import { isEmpty } from './utils'
import config from 'common/config'
import storage from 'unit/storage'

const key = 'token'

// 获取用户信息
export function getToken() {
    let token = Cookies.get(key)
    if (!isEmpty(token)) {
        return token
    }
    return null
}

// 获取企业Token
export function getCompanyToken() {
    let user = Cookies.get(key)
    if (!isEmpty(user)) {
        return JSON.parse(user).companyToken
    }
    return null
}

// 设置用户信息
export function setToken(data) {
    // 设置顶级域
    // Cookies.domain = config.api.host
    return Cookies.set(key, data, { domain : config.api.domain})
}

// 删除用户信息
export function removeToken() {
    storage.clear()
    Cookies.set('sevenDay', "", { domain : config.api.domain })
    Cookies.set('companyId', "", { domain : config.api.domain })
    return Cookies.set(key, "", { domain : config.api.domain})
}

// 设置公司ID
export function setCompanyId(id) {
    return Cookies.set('companyId', id, { domain : config.api.domain})
}

export function setPreview(data) {
    Cookies.set('preview', JSON.stringify(data), { domain : config.api.domain })
}

export function getPreview() {
    let preview = Cookies.get('preview')
    if (!isEmpty(preview)) {
        return JSON.parse(preview)
    }
    return null
}