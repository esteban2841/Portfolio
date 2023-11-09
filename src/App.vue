<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .wrapper {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

}
</style>
