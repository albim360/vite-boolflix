<template>
    <div class="movie-search d-flex justify-content-between align-items-center">
      <div class="col-md-11">
        <input type="text" v-model="searchText" v-on:keyup.enter="searchMovies" placeholder="Cerca un titolo.." class="form-control">
      </div>
      <div class="col-md-1 text-right">
        <img src="../../public/Netflix-logo-500x281.png" alt="" width="160" class="ml-auto">
      </div>
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
          .get('https://api.themoviedb.org/3/search/multi', {
            params: {
              api_key: '86266cf9d1624b84396ef30960961674',
              query: this.searchText,
              language: 'it-IT' 
            }
          })
          .then(response => {
            // filtra i risultati per tenere solo i film e le serie TV
            const moviesAndTvShows = response.data.results.filter(result => result.media_type === 'movie' || result.media_type === 'tv');
            this.$emit('search', moviesAndTvShows);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 1rem;
    background-color: black;
  }

  .movie-search {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    z-index: 999;
    width: 100%;
  }
  
  .movie-search img {
  }

  .form-control {
    width: 33%;
  }
  
  </style>
  