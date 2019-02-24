<template>
  <div class="container">
    <div v-for="(posts, key, index) in subreddits"
         :key="index">
      <h4>{{ key }} ({{ posts.length }})</h4>
      <Info v-for="post in ordered(posts)"
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

  methods: {
    ordered (posts) {
      if (posts.length === 1) { return posts }
      else {
        return posts.sort((a, b) => {
          return b.data.ups - a.data.ups
        })
      }
    }
  },

  computed: {
    ...mapGetters([
      'unsortedPosts'
    ]),

    subreddits () {
      if (!this.unsortedPosts) { return }
      return this.unsortedPosts.reduce((groups, post) => {
        if (groups.hasOwnProperty(post.data.subreddit) && Array.isArray(groups[post.data.subreddit])) {
          groups[post.data.subreddit].push(post)
        } else {
          Object.assign(groups, { [post.data.subreddit]: [post] })
        }
        return groups
      }, {})
    }
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
