<template>
  <main>
    <ul>
      <li v-for="media in mediaList" :key="media.id">
        <h2>{{ media.media_type === 'tv' ? media.name : media.title }}</h2>
        <p><strong>Titolo originale:</strong> {{ media.media_type === 'tv' ? media.original_name : media.original_title }}</p>
        <p v-if="media.media_type === 'movie'"><strong>Lingua:</strong> <span :class="`fi fi-${media.original_language}`"></span></p>
        <p v-if="media.media_type === 'tv'"><strong>Lingua:</strong> <span :class="`fi fi-${media.original_language}`"></span></p>          
        <div class="star-rating">
          <template v-for="star in starList(media.vote_average)">
            <i :class="[star ? 'fas' : 'far', 'fa-star']"></i>
          </template>
        </div>
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
  computed: {
    starList() {
      return (vote) => {
        const maxStars = 5;
        const roundedVote = Math.round(vote / 2); 
        const stars = [];
        for (let i = 1; i <= maxStars; i++) {
          stars.push(i <= roundedVote); 
        }
        return stars;
      };
    }
  }
};
</script>

<style>
.star-rating {
  font-size: 24px;
  color: gold;
}
</style>
