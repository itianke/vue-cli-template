import { formProps } from './props'
import { startTimeLimit, endTimeLimit } from './utils'
import '../../../utils/directive'

export default {
    name: 'searchBar',
    props: formProps,
    data() {
        const { forms, fuzzy } = this.$props
        const datePrefix = 'daterange-prefix'
        const selectOptionPrefix = 'select-option-prefix'
        let dataObj = {
            selectOptions: {}
        }

        let params = {}
        let format = {}
        let fuzzyOps = {}
        let options = {
            foldDownText: '展 开',
            foldUpText: '收 起',
            arrowUp: true
        }

        forms.forEach((v, i) => {
            const propType = typeof v.prop
            if (propType === 'string') {
                v.modelValue = v.prop
                v.defaultValue = v.defaultValue
                if(v.itemType === 'cascader'){
                    params[v.prop] = v.defaultValue ? v.defaultValue : []
                }else{
                    params[v.prop] = v.defaultValue ? v.defaultValue : ''
                    fuzzyOps[v.prop] = v.fuzzy ? v.fuzzy : fuzzy
                    if (v.format) {
                        format[v.prop] = v.format
                    }
                }
            } else if (propType === 'object' && Object.prototype.toString.call(v.prop) === '[object Array]') {
                v.prop.forEach(vv => {
                    params[vv] = ''
                    if (v.format) {
                        format[vv] = v.format
                    }

                    fuzzyOps[vv] = v.fuzzy ? v.fuzzy : fuzzy
                })
            }
            if (v.itemType === 'daterange') {
                params[datePrefix + i] = ''
                v.modelValue = datePrefix + i
            }
            if (v.itemType === 'select' && (v.selectFetch || v.selectUrl)) {
                const dataKey = selectOptionPrefix + i
                dataObj.selectOptions[dataKey] = []
                const { $axios } = this
                if (!v.selectMethod) {
                    v.selectMethod = 'get'
                }
                this.getRemoteData({
                    fetch: v.selectFetch ? v.selectFetch : () => {
                        return $axios[v.selectMethod](v.selectUrl, v.selectMethod.toLowerCase() === 'get' ?
                            { params: v.selectParams } : v.selectParams)
                    },
                    dataKey,
                    resultField: v.selectResultField || 'result',
                    resultHandler: v.selectResultHandler
                })
            }
        })

        return {
            params,
            datePrefix,
            selectOptionPrefix,
            ...dataObj,
            format,
            fuzzyOps,
            options
        }
    },
    computed: {
        itemStyle() {
            const { itemWidth } = this
            if (itemWidth) {
                return `width: ${itemWidth}px;`
            }
            return ''
        }
    },
    methods: {
        startTimeLimit,
        endTimeLimit,
        isArray(value) {
            return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]'
        },
        searchHandler() {
            this.getParams((error, params) => {
                if (!error) {
                    const { submitHandler } = this
                    if (submitHandler) {
                        submitHandler(params)
                    } else {
                        throw new Error('Need to set attribute: submitHandler !')
                    }
                }
            })
        },
        handleAddHandler() {
            const { addHandler } = this
            if (addHandler) {
                addHandler()
            } else {
                throw new Error('Need to set attrubute: addHandler !')
            }
        },
        getParamFuzzy() {
            return this.fuzzyOps
        },
        getParams(callback) {
            this.$refs['form'].validate(valid => {
                if (valid) {
                    const { params, datePrefix, format } = this
                    let formattedForm = {}
                    Object.keys(params).forEach(v => {
                        if (v.indexOf(datePrefix) === -1) {
                            formattedForm[v] = format[v] ? format[v](params[v], v) : params[v]
                        }
                    })
                    if (callback) callback(null, formattedForm)
                } else {
                    if (callback) callback(new Error())
                }
            })
        },
        resetForm() {
            this.params = {}
            this.$refs['form'].resetFields()
        },
        changeDate(date, startDate, endDate) {
            let dates
            if (date === null) {
                this.params[startDate] = ''
                this.params[endDate] = ''
                return
            }
            if (typeof date === 'string') {
                dates = date.split(' - ')
            } else if (date && date.hasOwnProperty('length')) {
                const firstDate = date[0]
                const secondDate = date[1]
                dates = [
                    `${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)}`,
                    `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)}`
                ]
            }
            
            this.params[startDate] = dates[0]
            this.params[endDate] = dates[1]
        },
        getRemoteData({ fetch, dataKey, resultField, resultHandler }) {
            fetch().then(response => {
                let result = response
                if (typeof response === 'object' && !this.isArray(response)) {
                    if (resultField.indexOf('.') !== -1) {
                        resultField.split('.').forEach(vv => {
                            result = result[vv]
                        })
                    } else {
                        result = response[resultField]
                    }
                }

                if (!result || !(result instanceof Array)) {
                    console.warn(`The result of key:${resultField} is not Array. 接口返回的字段:${resultField} 不是一个数组`)
                }

                if (this.resultHandler) {
                    this.selectOptions[dataKey] = result.map(this.resultHandler)
                } else {
                    this.selectOptions[dataKey] = result
                }
            })
        },
        collapseUp() {
            this.options.arrowUp = false
            this.forms.filter(item => item.autoVisible = true)
        },
        collapseDown() {
            this.options.arrowUp = true
            this.forms.filter(item => {
                if (item.collapsible) {
                    item.autoVisible = false
                }
            })
        }
    }
}