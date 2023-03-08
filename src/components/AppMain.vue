<template>
    <main>
      <ul>
        <li v-for="media in mediaList" :key="media.id">
          <h2>{{ media.media_type === 'tv' ? media.name : media.title }}</h2>
          <p><strong>Titolo originale:</strong> {{ media.media_type === 'tv' ? media.original_name : media.original_title }}</p>
          <p v-if="media.media_type === 'movie'"><strong>Lingua:</strong> {{ media.original_language }}</p>
          <p v-if="media.media_type === 'tv'"><strong>Lingua:</strong> {{ media.original_language || media.origin_country[0] }}</p>
          <p><strong>Voto:</strong> {{ media.vote_average }}</p>
        </li>
      </ul>
    </main>
  </template>
  
  <script>
  export default {
    name: 'AppMain',
    props: {
      mediaList: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  