<template>
  <div>
    <MovieSearch v-on:search="onSearch" />
    <AppMain :movies="movies" :mediaList="mediaList" />
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
      movies: [],
      mediaList: []
    }
  },
  methods: {
    onSearch(results) {
      this.movies = results;
      this.mediaList = results.concat(this.mediaList);
    }
  }
};
</script>
