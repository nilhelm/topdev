<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'App',

  components: {
    'navigation': Navigation
  }
}
</script>

<template>
<div class="app">
  <navigation></navigation>
  <router-view></router-view>
</div>
</template>
