import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex)

export const store = new Vuex.Store({
  state: {
    articles: [],
    user: '',
    searches: []
  },
  mutations: {
    getArticles (state, payload) {
      state.articles = payload
    },
    getUser (state, payload) {
      state.user = payload
    },
    getSearch (state,payload) {
      state.searches = payload
    },
    logout (state) {
      state.user = ''
    }
  },
  actions: {
    getArticles (store) {
      axios.post('http://localhost:3000/articles/')
      .then(response => {
        store.commit('getArticles', response.data)
      })
    },
    getUser (store) {
      axios.post('http://localhost:3000/userdata', {
        token: localStorage.getItem('token')
      })
      .then(response => {
        store.commit('getUser', response.data)
      })
    }
  },
  getters: {
    articles (state) {
      return state.articles
    },
    user (state) {
      return state.user
    },
    searches (state) {
      return searches
    }
  }
})
