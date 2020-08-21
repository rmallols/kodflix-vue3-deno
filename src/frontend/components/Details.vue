<template>Hello details!, {{ movie.title }}</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      movie: {},
    };
  },
  async mounted() {
    const result = await fetch(`/api/movies/${this.$route.params.movieId}`);
    try {
      this.movie = await result.json();
    } catch (ex) {
      this.$router.push("/not-found");
    }
  },
};
</script>