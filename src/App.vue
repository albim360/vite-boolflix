<template>
  <div>
    <MovieSearch v-on:search="onSearch" />
    <AppMain :movies="movies" />
  </div>
</template>

<script>
import MovieSearch from './components/MovieSearch.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    MovieSearch,
    AppMain
  },
  data() {
    return {
      movies: []
    }
  },
  methods: {
    onSearch(results) {
      this.movies = results;
    }
  }
};
</script>
