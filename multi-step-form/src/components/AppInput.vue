<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { toRef } from 'vue';
import { useField } from 'vee-validate';

interface AppInputProps {
  name: string;
  label: string;
}

const props = defineProps<AppInputProps>();

const nameRef = toRef(props, 'name');
const { errorMessage, value } = useField(nameRef);
</script>

<template>
  <div class="input-container">
    <div class="input-info">
      <label class="input-label" :for="name">{{ label }}</label>
      <span v-show="errorMessage" class="input-error-message">{{
        errorMessage
      }}</span>
    </div>
    <input
      class="input-base"
      :class="{ 'input-base-error': errorMessage }"
      :id="name"
      :name="name"
      type="text"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-info {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
}

.input-label {
  color: var(--color-text);
}

.input-error-message {
  color: var(--color-input-error);
  font-weight: 700;
}

.input-base {
  color: var(--color-text);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-input-border);
  outline: none;
}
.input-base-error {
  border-color: var(--color-input-error);
}
.input-base::placeholder {
  color: var(--color-input-placeholder);
}
.input-base:focus,
.input-base:hover {
  border-color: var(--color-input-border-active);
}
</style>
