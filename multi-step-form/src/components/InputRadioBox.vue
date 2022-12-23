<script setup lang="ts">
import { computed } from 'vue';

interface InputRadioBoxProps {
  name: string;
  label: string;
  price: string;
  modelValue?: string;
}
const props = defineProps<InputRadioBoxProps>();

interface InputRadioBoxEmits {
  (e: 'update:modelValue', value: string): void;
}
const emit = defineEmits<InputRadioBoxEmits>();

function handleInputChange(e: Event) {
  const input = e.target as HTMLInputElement;

  emit('update:modelValue', input.value);
}

const isChecked = computed(() => {
  return props.modelValue === props.name;
});
</script>

<template>
  <input
    type="radio"
    :id="name"
    :checked="isChecked"
    :value="name"
    @change="handleInputChange"
  />
  <label :for="name" class="radio-box">
    <div class="radio-box-icon">
      <slot></slot>
    </div>

    <div class="radio-box-info">
      <p class="radio-box-title">{{ label }}</p>
      <span class="radio-box-subtitle">{{ price }}</span>
    </div>
  </label>
</template>

<style scoped>
input {
  display: none;
}

input:checked + .radio-box {
  border-color: var(--color-radio-box-border-hover);
  background-color: var(--color-radio-box-check-bg);
}

.radio-box {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--color-radio-box-border);
  border-radius: 0.8rem;
  padding: 2rem 1.6rem 1.6rem;
  cursor: pointer;
}
.radio-box:hover {
  border-color: var(--color-radio-box-border-hover);
}

.radio-box-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 4.4rem;
}

.radio-box-title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.8rem;
}

.radio-box-subtitle {
  font-size: 1.4rem;
  color: var(--color-text-muted);
}
</style>
