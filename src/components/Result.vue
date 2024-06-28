<script setup>
import { RouterLink } from "vue-router";

const { numberOfCorrectAnswers, questionLength } = defineProps([
  "numberOfCorrectAnswers",
  "questionLength",
]);
</script>

<template>
  <div class="results">
    <p>Your results...</p>
    <h1>{{ `${numberOfCorrectAnswers}/${questionLength}` }}</h1>
    <RouterLink to="/">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 100px 0;
}

p {
  font-size: 25px;
}

h1 {
  font-size: 80px;
}
</style>
