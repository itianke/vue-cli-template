/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/

/*
 * 校验规则
 */

// 是否邮箱
const _isEmailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/

// 是否日期 20120409 | 2012-04-09 | 2012/04/09 | 2012.04.09 | 以上各种无 0 的状况
const _isDateReg = /^([1-2]\d{3})([-/.])?(1[0-2]|0?[1-9])([-/.])?([1-2]\d|3[01]|0?[1-9])$/

// 是否手机
const _isMobileReg = /^1[3-9]\d{9}$/

// 是否身份证
const _isIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

const _telPhone = /0\d{2,3}-\d{7,8}$/

// 营业执照 or 统一信用代码
const _isLicenseNum = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/

// 密码
const _isPassword = /^(?![0-9]+$)(?![a-zA-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-zA-Z]|[0-9]){6,20}$/

export {
    _isLicenseNum,
    _isPassword,
    _isEmailReg,
    _isMobileReg,
    _isIdCard
}