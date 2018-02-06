<script>
import api from '@/api'

import Developer from '@/components/Developer'
import LoadButton from '@/components/LoadButton'

export default {
  name: 'Developers',

  props: ['language'],

  data () {
    return {
      developers: [],
      nextUrl: `/search/users?q=type:user+language:${this.language}`,
      loading: false,
      error: false
    }
  },

  methods: {
    load () {
      this.loading = true

      api.get(this.nextUrl)
        .then(({ headers, data }) => {
          this.developers = [...this.developers, ...data.items]
          this.nextUrl = headers.link.match(/<(.*)>; rel="next"/)[1]
          this.error = false
        }, error => {
          console.log(error)
          this.error = true
        })
        .then(() => {
          this.loading = false
        })
    }
  },

  components: {
    'developer': Developer,
    'load-button': LoadButton
  },

  created () {
    this.load()
  }
}
</script>

<template>
<div class="developers">
  <div class="developer-container">
    <div
      v-for="developer in developers"
      class="developer-wrapper"
      :key="developer.login">
      <developer
        :login="developer.login"
        :avatarUrl="developer.avatar_url"
        :htmlUrl="developer.html_url">
      </developer>
    </div>
  </div>

  <div class="load-button-wrapper">
    <load-button
      :loading="loading"
      :error="error"
      :load="load">
    </load-button>
  </div>
</div>
</template>

<style lang="less" scoped>
.developers {
  .developer {
    &-container:after {
      content: "";
      display: table;
      clear: both;
    }

    &-wrapper {
      float: left;
      box-sizing: border-box;
      width: 100%;
      padding: 10px;

      @media (min-width: 768px) {
        width: 33%;
      }

      @media (min-width: 1200px) {
        width: 20%;
      }
    }
  }

  .load-button-wrapper {
    padding: 10px;
    margin: 0 auto 0 auto;
  }

  @media (min-width: 768px) {
    .load-button-wrapper {
      width: 40%;
    }
  }
}
</style>
