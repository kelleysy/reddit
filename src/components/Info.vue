<template>
  <div>
    <div class="post">
      <div class="left">
        <img :src="post.data.thumbnail"
             v-if="imageExists(post.data.thumbnail)"
             class="image" />
      </div>
      <div class="right">
        {{ post.data.title }}
        <p>
          created at {{ getDate(post.data.created_utc) }}
          upvotes: {{ post.data.ups }}
          <a :href="post.data.url"
             target="_blank">
            link
          </a>
        </p>
      </div>
      <div class="clear" />
    </div>       
  </div>
</template>

<script>
export default {
  name: 'Info',

  props: {
    post: Object
  },

  methods: {
    getDate (unixTimeStamp) {
      let date = new Date(unixTimeStamp * 1000)
      date = (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear()
      return date
    },

    imageExists(url) {
      if (url === 'self' || url === 'default' || url === 'nsfw') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  margin-left: 30px;
}

.left, .right {
  float: left;
}

.right {
  max-width: 800px;
  margin-left: 30px;
}

.clear {
  clear: both;
}
</style>
