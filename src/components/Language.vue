<script>
export default {
  name: 'Language',

  props: ['name', 'color'],

  methods: {
    showDevelopers () {
      this.$router.push('/developers/' + this.name)
    }
  }
}
</script>

<template>
<div class="language" v-on:click="showDevelopers">
  <div class="content-wrapper">
    <div class="content" :style="{ borderColor: color }">
      {{ name }}
    </div>
  </div>
</div>
</template>

<style lang="less" scoped>
.language {
  position: relative;
  padding-top: 100%; /* 1:1 aspect ratio */
  border-radius: 10px;
  background-color: #eee;

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
    font-family: 'Exo 2', sans-serif;
    font-size: 1.6em;
    font-weight: 800;

    @media (min-width: 768px) {
      font-size: 3.2em;
    }

    @media (min-width: 1200px) {
      font-size: 1.6em;
    }
  }
}
</style>
