<template>
  <main class="main-container">
    <div class="container">
      <MovieSearch v-on:search="onSearch" />
    </div>
    <div class="container card-container">
      <div class="card" v-for="media in mediaList" :key="media.id">
        <img :src="'https://image.tmdb.org/t/p/w342/' + media.poster_path" alt="">
        <div class="card-details">
          <h4 class="card-title">{{ media.media_type === 'tv' ? media.name : media.title }}</h4>
          <p><strong>Titolo originale:</strong> {{ media.media_type === 'tv' ? media.original_name : media.original_title }}</p>
          <p v-if="media.media_type === 'movie'"><strong>Lingua:</strong> <span :class="`fi fi-${media.original_language}`"></span></p>
          <p v-if="media.media_type === 'tv'"><strong>Lingua:</strong> <span :class="`fi fi-${media.original_language}`"></span></p>          
          <p><strong>Voto:</strong> {{ media.vote_average }} <span class="star-rating">{{ starList(media.vote_average) }}</span></p>
          <div class="card-hoverable">
            <p><strong>Descrizione:</strong> {{ media.overview }}</p>
            <p><strong>Data di uscita:</strong> {{ media.release_date }}</p>
          </div>
        </div>
      </div>
    </div>
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

<style scoped>
.main-container {
  background-color: black;
  margin-top: 20px;
  padding-bottom: 50px;
}

.container {
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}

.card {
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  position: relative;
}

.card img {
  max-width: 100%;
  height: auto;
  transition: transform 0.2s;
}

.card:hover img {
  transform: scale(1.05);
}

.card .card-details {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.2s;
  overflow-y: auto;
}

.card:hover .card-details {
  display: block;
  opacity: 1;
}

.card h4,
.card p {
  margin-top: 0;
}
.card p {
  font-size: 14px;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card .card-details {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.2s;
  overflow-y: auto;
  margin-top: 0px;
}

.card:hover .card-details {
  display: block;
  opacity: 1;
}

.card h2 {
  margin-bottom: 10px;
}

.card p:not(:last-child) {
  margin-bottom: 10px;
}

.card .card-details p {
  margin-bottom: 10px;
}

.main-container {
  background-color: black;
  margin-top: 30px;
  padding: 20px;
}

@media (max-width: 991.98px) {
  .card {
    width: calc(50% - 10px);
  }
}

</style>