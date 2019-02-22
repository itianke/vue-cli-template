/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
/* 全局过滤函数 */
import dayjs from 'dayjs'

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 年月日
export function dateFormat(date, format = 'YYYY-MM-DD') {
    if (!date || !new Date(date)) return ''
    return dayjs(date).format(format)
}

/**
 * 按格式进行日期过滤
 *
 * @export
 * @param {any} date
 * @param {string} format   // 格式
 * @returns {string}
 */
// 年月日时分秒
export function dateTimeFormat(date, format = 'YYYY-MM-DD HH:mm:ss') {
    if (!date || !new Date(date)) return ''
    return dayjs(date).format(format)
}


/**
 * 手机号加密过滤
 *
 * @export
 * @param {*} str
 * @returns
 */
export function phoneFormat(val) {
    let str = val + ''
    return str.substring(0, 3) + '****' + str.substring(7)
}

/**
 * 邮箱加密
 *
 * @export
 * @param {*} val
 * @returns
 */
export function emailFormat(val) {
    //return val.replace(/(@|\w{5})/, '*****')
    let str = val + ''
    return str.substring(0, str.indexOf('@')).substring(0, 3) + '****' + str.substring(val.indexOf('@'))
 }