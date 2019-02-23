<template>
  <div class="container">
    <div v-for="(posts, key, index) in subreddits"
         :key="index">
      <h4>{{ key }} ({{ posts.length }})</h4>
      <Info v-for="post in posts"
            :post="post" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Info from './Info.vue'

export default {
  name: 'Posts',

  components: {
    Info
  },

  data () {
    return {
      posts: []
    }
  },

  computed: {
    ...mapGetters([
      'unsortedPosts'
    ]),

    subreddits () {
      if (!this.unsortedPosts) { return }
      return this.unsortedPosts.reduce((carry, current) => {
        console.log(carry)
        console.log(current.data.subreddit)
        if (carry.hasOwnProperty(current.data.subreddit) && Array.isArray(carry[current.data.subreddit])) {
          carry[current.data.subreddit].push(current)
        } else {
          Object.assign(carry, { [current.data.subreddit]: [current] })
        }
        return carry
      }, {})}
  },

  methods: {
   getDate (unixTimeStamp) {
      return new Date(unixTimeStamp * 1000) 
    }
  },

  mounted () {
    this.unsortedPosts
    console.log('posts.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0 50px;
  text-align: left;
}
</style>
