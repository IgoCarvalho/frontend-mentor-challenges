<script setup lang="ts">
import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';
import FormSection from './FormSection.vue';
</script>

<template>
  <form class="form">
    <FormSection
      title="Personal Info"
      subtitle="Please provide your name, email address, and phone number."
    >
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
    </FormSection>

    <div class="form-action-buttons">
      <AppButton variant="transparent"> Go Back </AppButton>
      <AppButton> Next Step </AppButton>
    </div>
  </form>
</template>

<style scoped>
.form {
  flex: 1;
  padding: 2rem 10rem;
  position: relative;
}

.form-inputs-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 4rem;
}

.form-action-buttons {
  position: absolute;
  bottom: 1.6rem;
  left: 0;
  padding: 0 10rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
