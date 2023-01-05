<script setup lang="ts">
import { computed } from 'vue';

interface FormStepperProps {
  stepsLabel: string[];
  currentStep: number;
}

const props = defineProps<FormStepperProps>();

const currentStepIndex = computed(() => {
  const stepsRange = props.stepsLabel.length - 1;

  return props.currentStep > stepsRange ? stepsRange : props.currentStep;
});
</script>

<template>
  <ul class="stepper">
    <li
      v-for="(stepLabel, index) in stepsLabel"
      :key="stepLabel + index"
      class="step-item"
    >
      <div
        class="step-counter"
        :class="{ 'step-counter--active': index === currentStepIndex }"
      >
        {{ index + 1 }}
      </div>
      <div class="step-info">
        <span class="step-subtitle">Step {{ index + 1 }}</span>
        <p class="step-title">{{ stepLabel }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.stepper {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  background-image: url('@/assets/images/bg-sidebar-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 568px;
  min-width: 274px;
  padding: 3.2rem;
  border-radius: 1rem;
  overflow: hidden;
  text-transform: uppercase;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.step-counter {
  width: 3.2rem;
  height: 3.2rem;
  background-color: transparent;
  color: var(--color-white);
  border: 1px solid var(--color-white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  transition: 500ms;
}

.step-counter--active {
  background-color: var(--color-active-step-marker);
  color: var(--color-text);
  border-color: var(--color-active-step-marker);
}

.step-subtitle {
  display: inline-block;
  color: var(--color-step-text-muted);
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
}
.step-title {
  color: var(--color-white);
  font-weight: 700;
  font-size: 1.4rem;
}

@media screen and (max-width: 425px) {
  .stepper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 17.2rem;
    padding: 3.2rem 10rem;
    flex-direction: initial;
    justify-content: space-between;
    align-items: flex-start;
    gap: initial;
    background-image: url('@/assets/images/bg-sidebar-mobile.svg');
    border-radius: 0;
    z-index: -1;
  }

  .step-info {
    display: none;
  }
}
</style>
