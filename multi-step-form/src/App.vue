<script setup lang="ts">
import AppForm from './components/AppForm.vue';
</script>

<template>
  <main>
    <div class="container">
      <AppForm />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
}
.container {
  background-color: var(--color-foreground);
  width: 100%;
  max-width: 94rem;
  margin: 0 auto;
  border-radius: 1.6rem;
  padding: 1.6rem;
  padding-right: 0;
  display: flex;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

@media screen and (max-width: 425px) {
  main {
    align-items: initial;
  }

  .container {
    align-self: flex-start;
    background-color: initial;
    padding: 1.6rem;
    padding-top: 9.9rem;
    padding-bottom: 9rem;
    box-shadow: none;
    z-index: 10;
  }
}
</style>
