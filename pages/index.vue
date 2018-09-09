<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        A Nuxt Brotli Example
      </h1>
      <h2 class="subtitle">
        by Alexander Lichter
      </h2>
      <div class="links">
        <a href="https://blog.lichter.io/posts/nuxtjs-on-brotli" target="_blank" class="button--green">
          To the blog
          post</a>
        <a href="https://twitter.com/TheAlexLichter" target="_blank" class="button--grey">Twitter</a>
        <br>
        <br>
        <ul>
          <li v-for="topic in trendingTopics">
            <a :href="'https://blog.lichter.io/topic/'+topic.slug" v-text="topic.name"/>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() { return { tags: [] } },
  async asyncData({ error, app }) {
    try {
      const tags = await app.$axios.$get('tags')
      return { tags }
    } catch (e) {
      error(e)
    }
  },
  computed: {
    trendingTopics() {
      return this.tags.slice().sort((a, b) => a.count > b.count ? -1 : 1).slice(0, 4)
    }
  }
}
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
