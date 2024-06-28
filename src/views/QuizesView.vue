<!-- Watch -> React useEffect.Watches a state and do our logic. -->

<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const quizes = ref(q);
const searchInput = ref("");

watch(searchInput, () => {
  console.log(searchInput.value);
  quizes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
});
</script>

<template>
  <div>
    <header>
      <h1>Quizes</h1>
      <!-- Model Binding v-model updates the value of searchInput via input's event.target.value -->
      <input v-model.trim="searchInput" type="text" placeholder="Search..." />
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </div>
  </div>
</template>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARD */
</style>
