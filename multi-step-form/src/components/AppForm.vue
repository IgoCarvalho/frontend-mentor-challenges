<script setup lang="ts">
import AppInput from './AppInput.vue';
</script>

<template>
  <form class="form">
    <fieldset class="form-group">
      <legend class="form-group-title">Personal Info</legend>
      <span class="form-group-subtitle">
        Please provide your name, email address, and phone number.
      </span>

      <div class="form-inputs-container">
        <AppInput name="name" label="Name" placeholder="e.g. Stephen King" />
        <AppInput
          name="email"
          label="Email Address"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
        />
        <AppInput
          name="phoneNumber"
          label="Phone Number"
          type="number"
          placeholder="e.g. +1 234 567 890"
          error="This field is required"
        />
      </div>
    </fieldset>
  </form>
</template>

<style scoped>
.form {
  flex: 1;
  padding: 2rem 10rem;
}

.form-group {
  border: none;
}
.form-group-title {
  font-size: 3.2rem;
  color: var(--color-text);
  font-weight: 700;
  margin-bottom: 1.6rem;
}

.form-group-subtitle {
  color: var(--color-text-muted);
}

.form-inputs-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 4rem;
}
</style>
