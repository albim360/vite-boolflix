<template>
    <header>
      <MovieSearch @search="searchMovies" />
    </header>
  </template>
  
  <script>
  import MovieSearch from './MovieSearch.vue';
  
  export default {
    name: 'AppHeader',
    components: { MovieSearch },
    methods: {
      searchMovies(searchText) {
        this.$emit('search', searchText);
      }
    }
  };
  </script>

  <style>
  header {
    background-color: black;
    min-height: 60px;
  }
</style>
  