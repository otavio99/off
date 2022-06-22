import { createStore } from 'vuex'

export default createStore({
  state: {
    items: [
      {id: 0, name: "Homem aranha", rate: 7},
      {id: 1, name: "Homem aranha 2", rate: 7},
      {id: 2, name: "Homem aranha de volta pra casa", rate: 7},
      {id: 3, name: "Homem aranha sem volta pra casa", rate: 7}
    ]
  },
  getters: {
    getItems (state) {
      return state.items
    },
    getItem: (state) => (id: any) => {
      return state.items.find((item: any) => item.id === id);
    }
  },
  mutations: {
    setItem (state, payload) {
      state.items.push({...payload.item})
    },
    deleteItem (state, payload) {
      state.items = state.items.filter(item => item.id !== payload.item.id)
    }
  }
})
