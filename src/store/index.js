// Общее хранилище для всех компонентов приложения
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Для передачи информации из родительского компонента в дочерний и обратно
const store = new Vuex.Store({
  state: {
    backendUrl: "http://127.0.0.1:8000/api/v1"
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getServerUrl: state => {
      return state.backendUrl
    }
  }
})

export default store