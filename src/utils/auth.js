import Cookies from 'js-cookie'
import { isEmpty } from './utils'

const key = 'token'
const prefix = 'z_'

// 删除用户信息
export function removeToken(domain) {
    sessionStorage.clear()
    localStorage.clear()
    // localStorage.removeItem('userInfo')
    // localStorage.removeItem('menus')
    // localStorage.removeItem('roles')
    // localStorage.removeItem('routes')
    // localStorage.removeItem('historyParams')
    // localStorage.removeItem('historyPath')
    Cookies.set('preview', "", { domain : domain })
    Cookies.set('sevenDay', "", { domain : domain })
    Cookies.set('companyId', "", { domain : domain })
    return Cookies.set(key, "", { domain : domain })
}

/**
 * 获取权限按钮列表
 *
 * @export
 * @returns
 */
export function getRoles() {
    return new Promise((resolve, reject) => {
        const data = localStorage.getItem(prefix + 'roles')
        resolve(eval(data))
    })
}

/**
 * 获取权限菜单列表
 *
 * @export
 * @returns
 */
export function getRoutes() {
    const data = localStorage.getItem(prefix + 'routes')
    return eval(data)
}

/**
 * 获取权限菜单列表
 *
 * @export
 * @returns
 */
export function getMenus() {
    const data = localStorage.getItem(prefix + 'menus')
    return eval(data)
}

// 获取用户token
export function getToken() {
    let token = Cookies.get(key)
    if (!isEmpty(token)) {
        return token
    }
    return null
}

// 设置企业token
export function setCompanyToken(val) {
    sessionStorage.setItem(prefix + 'token', val)
}

// 获取企业token
export function getCompanyToken() {
    return sessionStorage.get(prefix + 'token')
}