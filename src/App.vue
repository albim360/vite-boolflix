<template>
  <div>
    <app-header />
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import MovieSearch from './components/MovieSearch.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    MovieSearch
  }
}
</script>
