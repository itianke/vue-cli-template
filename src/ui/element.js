/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import Vue from 'vue'
import eleUI from 'element-ui'

const components = [
    'Container',
    'Aside',
    'Header',
    'Main',
    'Footer',
    'Pagination',
    'Dialog',
    'Menu',
    'Submenu',
    'MenuItem',
    'MenuItemGroup',
    'Input',
    'InputNumber',
    'Radio',
    'RadioGroup',
    'RadioButton',
    'Checkbox',
    'CheckboxGroup',
    'Cascader',
    'Switch',
    'Select',
    'Option',
    'OptionGroup',
    'Button',
    'ButtonGroup',
    'Table',
    'TableColumn',
    'DatePicker',
    'TimeSelect',
    'TimePicker',
    'Popover',
    'Tooltip',
    'Breadcrumb',
    'BreadcrumbItem',
    'Form',
    'FormItem',
    'Tabs',
    'TabPane',
    'Tag',
    'Tree',
    'Alert',
    'Icon',
    'Row',
    'Col',
    'Upload',
    'Progress',
    'Loading',
    'Dropdown',
    'DropdownMenu',
    'DropdownItem',
    'Steps',
    'Step'
]

Object.keys(eleUI).forEach(name => {
    if(components.includes(name)) {
        Vue.use(eleUI[name])
    }
})

const { Loading, Message, MessageBox, Notification } = eleUI
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$notify = Notification
