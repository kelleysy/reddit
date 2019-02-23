<template>
  <div id="app">
    <Posts />
  </div>
</template>

<script>
import Posts from './components/Posts.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Posts,
    HelloWorld
  },

  created () {
    console.log('before mount')
    this.getPosts()
  },

  methods: {
    getPosts () {
      this.$store.dispatch('getPosts')
    }
  },

  mounted () {
    console.log('app.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
