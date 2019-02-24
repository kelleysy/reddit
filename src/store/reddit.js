import axios from 'axios'

function defaultState () {
  return {
    unsortedPosts: null
  }
}

export default {
  state: defaultState(),

  getters: {
    unsortedPosts: (state) => {
      return state.unsortedPosts
    }
  },

  mutations: {
    setUnsortedPosts (state, payload) {
      state.unsortedPosts = payload.data.data.children
    }
  },

  actions: {
    getPosts (context) {
      let api = 'https://www.reddit.com/.json'
      axios({ method: 'GET', url: api }).then(response => {
        context.commit('setUnsortedPosts', response)
      }, error => {
        console.error(error)
      })
    }
  }
}
