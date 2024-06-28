<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <!-- Buraya header gelebilir -->
    <RouterView />
    <!-- Buraya Footer gelebilir -->
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
