<script setup lang="ts">
import { RouterView } from 'vue-router'
import type NavItem from './components/NavItem.vue';
</script>

<template>
  <header>
    <NavItem/>
  </header>
</template>

<style scoped>
header {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
