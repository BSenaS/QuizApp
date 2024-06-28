<script setup lang="ts">
import { useRoute } from "vue-router";
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import { computed, ref, watch } from "vue";
import quizes from "../data/quizes.json";
import Result from "../components/Result.vue";

//Url'den parametreyi bulma
const route = useRoute();
const quizId = parseInt(route.params.id);

//Data içerisin de ilgili Quizi bulma.
const quiz = quizes.find((q) => q.id === quizId);

//Quiz içerisindeki soru indexi.
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const questionLength = quiz?.questions.length;
const showResults = ref(false);

// const questionStatus = ref(
//   `${currentQuestionIndex.value}/${quiz?.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionStatus.value = `${currentQuestionIndex.value}/${quiz?.questions.length}`;
//   }
// );

const questionStatus = computed(() => {
  return `${currentQuestionIndex.value}/${questionLength}`;
});

const barPercentage = computed(() => {
  return `${(currentQuestionIndex.value / questionLength) * 100}%`;
});

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (questionLength - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }
  currentQuestionIndex.value++;
  console.log(numberOfCorrectAnswers.value);
};
</script>

<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <div>
      <Question
        v-if="!showResults"
        :question="quiz.questions[currentQuestionIndex]"
        @selectOption="onOptionSelected"
      />
      <Result
        v-else
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
        :questionLength="questionLength"
      />
    </div>
  </div>
</template>
