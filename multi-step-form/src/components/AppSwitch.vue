<script setup lang="ts">
import { computed } from 'vue';

interface AppSwitchProps {
  onText: string;
  onValue: string;
  offText: string;
  offValue: string;
  modelValue: string;
}
const props = defineProps<AppSwitchProps>();

interface AppSwitchEmits {
  (e: 'update:modelValue', value: string): void;
}

const emit = defineEmits<AppSwitchEmits>();

const isChecked = computed(() => {
  return props.modelValue === props.onValue;
});

function handleSwitchChange(e: Event) {
  const input = e.target as HTMLInputElement;

  const inputValue = input.checked ? props.onValue : props.offValue;
  emit('update:modelValue', inputValue);
}

if (props.modelValue === '') {
  emit('update:modelValue', props.offValue);
}
</script>

<template>
  <label class="switch">
    <input type="checkbox" :checked="isChecked" @change="handleSwitchChange" />

    <span class="switch-off-text">{{ offText }}</span>

    <span class="switch-handler"></span>

    <span class="switch-on-text">{{ onText }}</span>
  </label>
</template>

<style scoped>
input {
  display: none;
}
input:checked ~ .switch-handler::before {
  left: calc(100% - 1.6rem);
}

.switch {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
}

.switch-handler {
  /* padding: 1rem; */
  width: 4rem;
  height: 2rem;
  display: inline-block;
  border-radius: 1rem;
  background-color: var(--color-switch-toggle-bg);
  position: relative;
  cursor: pointer;
}

.switch-handler::before {
  content: '';
  position: absolute;
  left: 0.4rem;
  top: 0.4rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: var(--color-switch-toggle-circle);
  transition: 300ms;
}

.switch-on-text {
  color: var(--color-text-muted);
  transition: color 300ms;
}
.switch-off-text {
  color: var(--color-text);
  transition: color 300ms;
}

input:checked ~ .switch-off-text {
  color: var(--color-text-muted);
}
input:checked ~ .switch-on-text {
  color: var(--color-text);
}
</style>
