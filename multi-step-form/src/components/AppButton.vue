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
  transition: 200ms;
}
.btn--primary {
  background-color: var(--color-btn);
  color: var(--color-white);
}
.btn--primary:hover {
  background-color: var(--color-btn-hover);
}

.btn--secondary {
  background-color: var(--color-btn-secondary);
  color: var(--color-white);
}
.btn--secondary:hover {
  background-color: var(--color-btn-secondary-hover);
}

.btn.btn--transparent {
  background-color: transparent;
  color: var(--color-text-muted);
  padding-left: 0;
}
.btn.btn--transparent:hover {
  color: var(--color-text);
}

@media screen and (max-width: 425px) {
  .btn {
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.4rem;
  }

  .btn.btn--secondary {
    padding: 1.2rem 2.2rem;
  }
}
</style>
