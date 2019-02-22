/**
 * 过滤状态显示
 * @param {*} arr 
 * @param {*} val 
 * @param {*} key 
 */
export const filterOpts = (arr, val, key = 'value') => {
    let obj = {}
    arr.forEach((item) => {
        if (item[key] + '' === val + '') {
            obj = { ...item }
            return false
        }
    })
    return obj
}

/**
 * 用户状态
 */
export const USER_STATUS = [
    { label: '未激活', value: 0 },
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已注销', value: 3 }
]

/**
 * 用户类型
 */
export const USER_TYPE = [
    { label: '个人用户', value: 0 },
    { label: '企业用户', value: 1 }
]

/**
 * 认证类型
 */
export const USER_AUTH_TYPE = [
    { label: '实名认证', value: 0 },
    { label: '其它认证', value: 1 }
]

/**
 * 认证状态
 */
export const USER_AUTH_STATUS = [
    { label: '未认证', value: 0 },
    { label: '认证中', value: 1 },
    { label: '认证成功', value: 2 },
    { label: '认证失败', value: 3 }
]

/**
 * 绑定状态
 */
export const USER_BIND_STATUS = [
    { label: '未绑定', value: 0 },
    { label: '已绑定', value: 1 }
]

/**
 * 企业状态
 */
export const COMPANY_STATUS = [
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已注销', value: 3 }
]

/**
 * 企业认证类型
 */
export const COMPANY_AUTH_TYPE = [
    { label: '企业认证', value: 0 },
    { label: '工程公司认证', value: 1 },
    { label: '材料供应商认证', value: 2 }
]

/**
 * 用户被授权状态
 */
export const USER_AUTHED_STATUS = [
    { label: '正常', value: 1 },
    { label: '已冻结', value: 2 },
    { label: '已解除', value: 3 }
]

/**
 * 字典类型
 */
export const DICT_TYPE = {
    companyType: 'COMPANY_TYPE', // 公司类型
    companyScale: 'COMPANY_SCALE', // 公司规模
    companyNature: 'COMPANY_NATURE' // 公司行业
}

/**
 * 用户授权状态
 */
export const USER_AUTH_APPLY_STATUS = [
    { label: '邀请中', value: 0 },
    { label: '已通过', value: 1 },
    { label: '已拒绝', value: 2 },
    { label: '已作废', value: 3 }
]

/**
 * 是否
 */
export const WHETHER = [
    { label: '否', value: 0 },
    { label: '是', value: 1 },
    { label: '-', value: 2}
]