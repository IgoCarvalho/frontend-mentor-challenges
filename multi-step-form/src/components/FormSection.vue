<script setup lang="ts">
interface FormSectionProps {
  title: string;
  subtitle: string;
}

defineProps<FormSectionProps>();
</script>

<template>
  <fieldset class="form-section">
    <legend class="form-section-title">{{ title }}</legend>
    <span class="form-section-subtitle">{{ subtitle }}</span>

    <slot></slot>
  </fieldset>
</template>

<style scoped>
.form-section {
  border: none;
}
.form-section-title {
  font-size: 3.2rem;
  color: var(--color-text);
  font-weight: 700;
  margin-bottom: 1.6rem;
}

.form-section-subtitle {
  color: var(--color-text-muted);
}
</style>
