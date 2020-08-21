<template>
  <!-- 
          TODO: Find a way to get dynamic images by e.g.
          using the equivalent of "require" for Rollup
  -->
  <div class="Movie">
    <img :src="`/src/frontend/assets/${movie.id}.jpg`" />
    <div class="overlay">{{movie.title}}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "../_variables.scss";
.Movie {
  position: relative;

  &:hover {
    .overlay {
      bottom: 0;
    }
  }
}
.overlay {
  $height: 100px;
  transition: bottom $animation-type $animation-duration;
  position: absolute;
  bottom: -$height;
  left: 0;
  width: 100%;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.9);
  color: $color;
  font-size: 20px;
  height: $height;
}
</style>

<script>
export default {
  name: "Movie",
  props: ["movie"],
};
</script>