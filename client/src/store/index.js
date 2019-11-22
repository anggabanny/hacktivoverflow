import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loginUser(){
      return axios({
        method : 'POST',
        url : '/user/login',
        headers : {}
      })
    },
    registerUser(){
      return axios({
        method : 'POST',
        url : '/user/register',
        headers : {}
      })
    }
  },
  modules: {
  }
})
