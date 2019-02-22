/**
 * 工具类
 */

/**
 *判断是否为空
 *
 * @export
 * @param {*} val 字符串 对象
 * @returns
 */
export function isEmpty(val) {
    if (val === undefined || val === null || val === '' || val.length === 0)
        return true
    if (typeof val === 'string') {
        if (val.trim().length === 0) return true
    }
    else if (typeof val === 'object') {
        if (JSON.stringify(val) === '{}') return true
    }
    return false
}

/**
 *非空判断（数组）
 *
 * @export
 * @param {*} array
 * @returns
 */
export function isEmptyArray(array) {
    if (array && Array.isArray(array) && array.length > 0) 
        return false
    return true
}

/**
 *更新对象值
 *
 * @export
 * @param {*} original
 * @param {*} obj
 * @returns
 */
export function setKeyValue(original, obj) {
    for (const key in obj) {
        original[key] = obj[key]
    }
    return original
}

export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 判断数组某个对象包包含某个字符串的对象
 *
 * @export
 * @param {*} array
 * @param {*} attr
 * @param {*} str
 * @returns
 */
export function arrayAttrToObj(array, attr, str) {
    if (Array.isArray(array) && array.length > 0) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][attr] == str)
                return array[i]
        }
    }
    return null
}