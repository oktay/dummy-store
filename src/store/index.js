import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    categories: [],
  },
  mutations: {
    SET_PRODUCTS (state, products) {
      state.products = products
    },
    SET_CATEGORIES (state, products) {
      state.categories = products
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/products/`)
      const products = await response.json();
        
      commit('SET_PRODUCTS', products);
    },
    async fetchCategories({ commit }) {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/products/categories/`)
      const categories = await response.json();
        
      commit('SET_CATEGORIES', categories);
    },
    async filterProducts({ commit }, [category, sort]) {
      if (category) {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/products/category/${category}?sort=${sort}`)
        const products = await response.json();
          
        commit('SET_PRODUCTS', products);
      } else {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/products/?sort=${sort}`)
        const products = await response.json();
          
        commit('SET_PRODUCTS', products);
      }
    },
  },
  modules: {}
})
