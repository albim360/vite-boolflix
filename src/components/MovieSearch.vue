<template>
    <div class="movie-search">
      <input type="text" v-model="searchText" v-on:keyup.enter="searchMovies" placeholder="Cerca film...">
      <button @click="searchMovies">Cerca</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MovieSearch',
    data() {
      return {
        searchText: ''
      };
    },
    methods: {
      searchMovies() {
        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            params: {
              api_key: '86266cf9d1624b84396ef30960961674',
              query: this.searchText
            }
          })
          .then(response => {
            this.$emit('search', response.data.results);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  