<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
interface AppInputProps {
  name: string;
  label: string;
  error?: string;
}

defineProps<AppInputProps>();
</script>

<template>
  <div class="input-container">
    <div class="input-info">
      <label class="input-label" :for="name">{{ label }}</label>
      <span v-show="error" class="input-error-message">{{ error }}</span>
    </div>
    <input
      class="input-base"
      :class="{ 'input-base-error': error }"
      :id="name"
      :name="name"
      type="text"
      v-bind="$attrs"
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
  font-weight: 700;
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
