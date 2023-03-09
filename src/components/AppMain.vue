<template>
  <main>
    <ul>
      <li v-for="media in mediaList" :key="media.id">
        <h2>{{ media.media_type === 'tv' ? media.name : media.title }}</h2>
        <img :src="'https://image.tmdb.org/t/p/w342/' + media.poster_path" alt="">
        <p><strong>Titolo originale:</strong> {{ media.media_type === 'tv' ? media.original_name : media.original_title }}
        </p>
        <p v-if="media.media_type === 'movie'"><strong>Lingua:</strong> <span
            :class="`fi fi-${media.original_language}`"></span></p>
        <p v-if="media.media_type === 'tv'"><strong>Lingua:</strong> <span
            :class="`fi fi-${media.original_language}`"></span></p>
        <p><strong>Voto:</strong> 
          <span v-for="star in starList(media.vote_average)" :key="star" class="star-rating">
            <i v-if="star" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
          </span>
        </p>
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
  },
  methods: {
    starList(vote) {
      const maxStars = 5;
      const roundedVote = Math.round(vote / 2);
      const stars = [];
      for (let i = 1; i <= maxStars; i++) {
        if (i <= roundedVote) {
          stars.push(true);
        } else {
          stars.push(false);
        }
      }
      return stars;
    }
  }
};
</script>

<style>
main {
  background: #000;
  color: white;
}

.star-rating {
  font-size: 24px;
  color: gold;
}

li {
  margin-bottom: 10px;
}
</style>
