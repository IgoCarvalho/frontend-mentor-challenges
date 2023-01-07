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
  padding-top: 1px;
}

.form-section-subtitle {
  color: var(--color-text-muted);
}

@media screen and (max-width: 425px) {
  .form-section-title {
    font-size: 2.4rem;
    margin-bottom: 1.1rem;
  }

  .form-section-subtitle {
    line-height: 1.5;
  }
}
</style>
