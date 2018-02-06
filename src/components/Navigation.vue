<script>
export default {
  name: 'Navigation'
}
</script>

<template>
<div class="navigation">
  <div class="brand">TOPDEV</div>

  <router-link
    v-if="this.$route.name === 'developers'"
    class="link"
    to="/">
    &laquo; Back to languages
  </router-link>

  <div
    v-if="this.$route.name === 'languages'"
    class="intro">
    Select a language, find your top dev
  </div>
</div>
</template>

<style lang="less" scoped>
.navigation {
  font-family: 'Exo 2', sans-serif;

  &:after {
    content: "";
    display: table;
    clear: both;
  }

  .brand, .intro, .link {
    padding: 10px;
    text-align: center;
  }

  .brand {
    padding: 10px;
    text-align: center;
    font-size: 4em;
    font-weight: 800;
    text-align: center;
  }

  .intro, .link {
    font-size: 1.2em;
    font-weight: 600;
  }

  .link {
    display: block;
    text-decoration: none;
    color: #000;
  }

  @media (min-width: 768px) {
    .intro, .link {
      float: left;
      font-size: 1.6em;
      line-height: 3.2em;
    }

    .brand {
      float: right;
    }
  }
}
</style>
