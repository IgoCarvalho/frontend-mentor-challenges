<script setup lang="ts">
interface AppButtonProps {
  variant?: 'primary' | 'secondary' | 'transparent';
}

withDefaults(defineProps<AppButtonProps>(), {
  variant: 'primary',
});
</script>

<template>
  <button type="button" class="btn" :class="[`btn--${variant}`]">
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 1.6rem 2.6rem;
  font-weight: 500;
  font-size: 1.6rem;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
}
.btn--primary {
  background-color: var(--color-btn);
  color: var(--color-white);
}

.btn--secondary {
  background-color: var(--color-btn-secondary);
  color: var(--color-white);
}

.btn--transparent {
  background-color: transparent;
  color: var(--color-text-muted);
  padding-left: 0;
}
.btn--transparent:hover {
  color: var(--color-text);
}
</style>
