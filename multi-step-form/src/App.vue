<script setup lang="ts">
import AppForm from './components/AppForm.vue';
import FormStepper from './components/FormStepper.vue';

const formSteps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];
</script>

<template>
  <main>
    <div class="container">
      <FormStepper :stepsLabel="formSteps" :currentStep="0" />
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
}
</style>
