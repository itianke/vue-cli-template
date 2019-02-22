/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import store from 'store'

/*
 * 权限判断(预留)
 */
export function checkAcls(acls) {
    let pms = store.state['user'].roles
    if (!pms) return false

    for (let acl of acls) {
        if (pms.indexOf(acl) > -1) return true
    }

    return false
}

/**
 * 检查角色类型
 * checkRole
 * @param {String} role    角色类型
 * @return {Boolean}
 */
export function checkRole(role) {
    let roles = store.state['user'].roles
    if (!roles) return false
    return ('' + role) === ('' + roles)
}
