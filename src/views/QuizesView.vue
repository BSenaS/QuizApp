<!-- Watch -> React useEffect.Watches a state and do our logic. -->

<script setup>
import q from "../data/quizes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import gsap from "gsap";

const quizes = ref(q);
const searchInput = ref("");

//Bu Life cycle hook fonksiyonlarına, parametre geliyor.
const beforeEnter = (el) => {
  //card-enter-from
  el.style.opacity = 0;
  el.style.transform = "translateY(-100px)";
};
const enter = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: el.dataset.index * 0.5,
  });
};
const afterEnter = (el) => {
  //card-enter-to
  // el.style.opacity = 1;
  // el.style.transform = "translateY(0)";
};

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
    <!-- Buradaki appear, transitiongroup sayfa'da renderlandığı anda animasyonlarımızın uygulanmasını sağlar. -->
    <div class="options-container">
      <TransitionGroup
        appear
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
        @enter="enter"
      >
        <Card
          v-for="(quiz, index) in quizes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index="index"
        />
      </TransitionGroup>
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

/* card'lara animasyon ekleme, cardlar yukarıdan aşağıya doğru gelsin. */

/* .card-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}

.card-enter-to {
  transform: translate(0);
  opacity: 1;
}

.card-enter-active {
  transition: all 0.4s ease;
} */
/* CARD */
</style>
