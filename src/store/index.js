// 状态管理
'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 0
}

const getter = {
    countPlus(state, getter) {
        return state.count ++
    }
}

const mutations = {
    countPlus(state, payload) {
        console.log(payload.amount)
        state.count += payload.amount
    }
}

const actions = {
    countPlus ({commit}, s) {
        console.log(commit)
        console.log(s)
        commit('countPlus', s)
    }
  }



let store = new Vuex.Store({
    state,
    getter,
    mutations,
    actions
})

export default store