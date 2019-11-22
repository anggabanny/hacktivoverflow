import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../../apis/server'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin : false,
    allQuestions : []
  },
  mutations: {
    SET_LOGIN(state){
      if (state.isLogin == true) {
        state.isLogin = false
      } else {
        state.isLogin = true
      }
    },
    SET_QUESTION(state, payload){
      state.allQuestions = payload
    }
  },
  actions: {
    loginUser({ commit, dispatch }, payload){
      return axios({
        method : 'POST',
        url : '/user/login',
        data : payload,
        headers : {}
      })
    },
    registerUser({ commit, dispatch }, payload){
      return axios({
        method : 'POST',
        url : '/user/register',
        data : payload,
        headers : {}
      })
    },
    allQuestion({commit, dispatch},payload){
      axios({
        method : 'GET',
        url : '/question',
        headers : {}
      })
      .then(({ data })=>{
        console.log(data);
        commit('SET_QUESTION',data)
      })
      .catch(console.log)
    },
    oneQuestion({commit, dispatch},payload){
      axios({
        method : 'GET',
        url : '/question/'+payload.id,
        headers : {
          'token' : localStorage.getItem('token')
        }
      })
      .then(({ data })=>{
        commit('SET_QUESTION',data)
      })
      .catch(console.log)
    },
    createQuestion({commit, dispatch},payload){
      return axios({
        method : 'POST',
        url : '/question',
        data : payload,
        headers : {
          'token' : localStorage.getItem('token')
        }
      })
    }
  },
  modules: {
  }
})
