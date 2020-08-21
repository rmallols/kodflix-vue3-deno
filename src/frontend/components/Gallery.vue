<template>
  <div class="Gallery">
    <Movie v-for="movie in movies" v-bind:key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.Gallery {
  display: grid;
}

@media (min-width: 600px) {
  .Gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .Gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<script>
import Movie from "./Movie.vue";

export default {
  name: "Gallery",
  components: {
    Movie,
  },
  data() {
    return {
      movies: [],
    };
  },
  async mounted() {
    const result = await fetch("/api/movies");
    this.movies = await result.json();
  },
};
</script>