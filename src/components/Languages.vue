<script>
import Language from '@/components/Language'

export default {
  name: 'Languages',

  data () {
    return {
      /* The 15 most popular languages of 2017 according to GitHub...
       * https://octoverse.github.com/
       *
       * ... and their colors as defined in GitHub's Linguist library.
       * https://github.com/github/linguist/blob/master/lib/linguist/languages.yml
       */
      languages: [
        {
          name: 'JavaScript',
          color: '#f1e05a'
        },

        {
          name: 'Python',
          color: '#3572a5'
        },

        {
          name: 'Java',
          color: '#b07219'
        },

        {
          name: 'Ruby',
          color: '#701516'
        },

        {
          name: 'PHP',
          color: '#4f5d95'
        },

        {
          name: 'C++',
          color: '#f34b7d'
        },

        {
          name: 'CSS',
          color: '#563d7c'
        },

        {
          name: 'C#',
          color: '#178600'
        },

        {
          name: 'Go',
          color: '#375eab'
        },

        {
          name: 'C',
          color: '#555555'
        },

        {
          name: 'TypeScript',
          color: '#2b7489'
        },

        {
          name: 'Shell',
          color: '#89e051'
        },

        {
          name: 'Swift',
          color: '#ffac45'
        },

        {
          name: 'Scala',
          color: '#c22d40'
        },

        {
          name: 'Objective-C',
          color: '#438eff'
        }
      ]
    }
  },

  components: {
    'language': Language
  }
}
</script>

<template>
<div class="languages">
  <div class="language-wrapper" v-for="language in languages" :key="language.name">
    <language :name="language.name" :color="language.color" />
  </div>
</div>
</template>

<style scoped>
.language-wrapper {
  float: left;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}

@media (min-width: 768px) {
  .language-wrapper {
    width: 33.33%;
  }
}

@media (min-width: 1200px) {
  .language-wrapper {
    width: 20%;
  }
}
</style>
