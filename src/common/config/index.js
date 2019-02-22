/*
    author：peter (185832959@qq.com)
    date：2018-07-04
*/
import env from 'src/env'
import * as deepExtend from 'deep-extend'

if (env.env !== 'deploy') {
    console.log('version:' + env.version)
}

export default deepExtend(env, {
})
