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
      console.log('store get posts')
      let cors = 'https://cors.io/?'
      let api = `${cors}https://www.reddit.com/.json`
      axios({ method: 'GET', url: api }).then(response => {
        context.commit('setUnsortedPosts', response)
        console.log('commit the getter')
      }, error => {
        console.error(error)
      })
    }
  }
}
