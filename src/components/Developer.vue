<script>
export default {
  name: 'developer',

  props: ['login', 'avatarUrl', 'htmlUrl'],

  methods: {
    open () {
      window.open(this.htmlUrl, '_blank')
    }
  }
}
</script>

<template>
<div
  class="developer"
  v-bind:style="{ backgroundImage: `url('${avatarUrl}')` }"
  v-on:click="open()">
  <div class="content-wrapper">
    <div class="content">
      {{ login }}
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.developer {
  position: relative;
  padding-top: 100%; /* 1:1 aspect ratio */
  border-radius: 10px;
  background-position: center;
  background-size: cover;

  .content {
    &-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    border-bottom: 15px solid;
    background-color: #eee;
    font-family: 'Exo 2', sans-serif;
    font-size: 1.2em;
    font-weight: 600;
    color: #000;

    @media (min-width: 768px) {
      font-size: 2.4em;
    }

    @media (min-width: 1200px) {
      font-size: 1.2em;
    }
  }
}
</style>
