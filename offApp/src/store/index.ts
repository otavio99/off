import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      {id: 1, name: "Homem aranha", rate: 7},
      {id: 1, name: "Homem aranha 2", rate: 7},
      {id: 1, name: "Homem aranha de volta pra casa", rate: 7},
      {id: 1, name: "Homem aranha sem volta pra casa", rate: 7}
    ]
  },
  getters: {
    getItems (state) {
      return state.items
    }
  },
  mutations: {
    setItem (state, payload) {
      state.items.push({...payload.item})
    },
  },
  actions: {
  },
  modules: {
  }
})
