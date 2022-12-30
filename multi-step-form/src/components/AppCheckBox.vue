<script setup lang="ts">
import { computed } from 'vue';

interface AppCheckBoxProps {
  name: string;
  label: string;
  description: string;
  price: string;
  modelValue: string | String[];
}
const props = defineProps<AppCheckBoxProps>();

interface AppCheckBoxEmits {
  (e: 'update:modelValue', value: string | String[]): void;
}
const emit = defineEmits<AppCheckBoxEmits>();

const isChecked = computed(() => {
  if (props.modelValue instanceof Array) {
    return props.modelValue.includes(props.name);
  }

  return props.modelValue === props.name;
});

function handleCheckChange(e: Event) {
  const input = e.target as HTMLInputElement;

  if (typeof props.modelValue === 'string') {
    emit('update:modelValue', input.value);
    return;
  }

  let updatedValue: String[];

  if (input.checked) {
    updatedValue = [...props.modelValue, input.value];
  } else {
    updatedValue = props.modelValue.filter((value) => value !== props.name);
  }

  emit('update:modelValue', updatedValue);
}
</script>

<template>
  <input
    :id="name"
    type="checkbox"
    :value="name"
    :checked="isChecked"
    @change="handleCheckChange"
  />
  <label :for="name" class="check">
    <div class="check-content">
      <div class="check-info">
        <p class="check-title">{{ label }}</p>
        <span class="check-subtitle">{{ description }}</span>
      </div>

      <span class="check-price">{{ price }}</span>
    </div>
  </label>
</template>

<style scoped>
input {
  display: none;
}

.check {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.2rem;
  padding: 2rem 2.4rem;
  border: 1px solid var(--color-check-border);
  border-radius: 0.8rem;
  cursor: pointer;
  transition: 300ms;
}
.check::before,
.check::after {
  content: '';
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-check-border);
}

.check::after {
  position: absolute;
  left: 2.4rem;
  border: 1px solid var(--color-check-border-active);
  background-color: var(--color-check-border-active);
  background-image: url('@/assets/images/icon-checkmark.svg');
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  transform: scale(0.5);
  transition: 150ms;
}
input:checked + .check::after {
  opacity: 1;
  transform: scale(1);
}

.check:hover,
input:checked + .check {
  border-color: var(--color-check-border-active);
}
input:checked + .check {
  background-color: var(--color-check-active-bg);
}

.check-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.check-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.check-title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
}

.check-subtitle {
  font-size: 1.4rem;
  color: var(--color-text-muted);
  letter-spacing: 3%;
}

.check-price {
  font-size: 1.4rem;
  color: var(--color-check-price);
}
</style>