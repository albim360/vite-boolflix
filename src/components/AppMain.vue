<template>
    <main>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <h2>{{ movie.title }}</h2>
          <p><strong>Titolo originale:</strong> {{ movie.original_title }}</p>
          <p><strong>Lingua:</strong> {{ movie.original_language }}</p>
          <p><strong>Voto:</strong> {{ movie.vote_average }}</p>
        </li>
      </ul>
    </main>
  </template>
  
  <script>
  export default {
    name: 'AppMain',
    props: {
      movies: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  