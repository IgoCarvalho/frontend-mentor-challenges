<script setup lang="ts">
import { useField } from 'vee-validate';
import { computed, toRef } from 'vue';

interface InputRadioBoxProps {
  name: string;
  value: string;
  label: string;
  price: string;
  info: string | boolean;
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

const nameRef = toRef(props, 'name');
const { value: veeValue } = useField(nameRef);
</script>

<template>
  <input
    type="radio"
    :id="`${name}-${value}`"
    :value="value"
    v-model="veeValue"
  />
  <label :for="`${name}-${value}`" class="radio-box">
    <div class="radio-box-icon">
      <slot></slot>
    </div>

    <div class="radio-box-info">
      <p class="radio-box-title">{{ label }}</p>
      <span class="radio-box-subtitle">{{ price }}</span>
      <span class="radio-box-detail" v-show="info">{{ info }}</span>
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

.radio-box-info {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.radio-box-title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
}

.radio-box-subtitle {
  font-size: 1.4rem;
  color: var(--color-text-muted);
}

.radio-box-detail {
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text);
}

@media screen and (max-width: 425px) {
  .radio-box {
    flex-direction: initial;
    gap: 1.2rem;
  }

  .radio-box-icon {
    margin-bottom: 0;
  }
}
</style>
