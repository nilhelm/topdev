<script>
export default {
  name: 'LoadButton',

  props: ['loading', 'error', 'load']
}
</script>

<template>
<div v-if="loading" class="button button_loading">
  Loading...
</div>

<div v-else-if="error" class="button button_error" v-on:click="load()">
  Try again!
</div>

<div v-else class="button" v-on:click="load()">
  More devs!
</div>
</template>

<style>
.button {
  box-sizing: border-box;
  padding: 20px;
  border-radius: 5px;
  margin: 0 auto 0 auto;
  background-color: #eee;
  font-family: 'Exo 2', sans-serif;
  font-size: 1.6em;
  font-weight: 600;
  text-align: center;
  color: #000;

  &_loading {
    color: #ccc;
  }
}
</style>
