<script setup lang="ts">
import { ref } from 'vue';

import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';
import FormSection from './FormSection.vue';
import InputRadioBox from './InputRadioBox.vue';

import ArcadeIcon from './icons/ArcadeIcon.vue';
import AdvancedIcon from './icons/AdvancedIcon.vue';
import ProIcon from './icons/ProIcon.vue';
import AppSwitch from './AppSwitch.vue';
import AppCheckBox from './AppCheckBox.vue';
import FormFinishingUp from './FormFinishingUp.vue';
import type { FormFinishingUpAddOn } from './FormFinishingUp.vue';

const plan = ref('');
const addOns = ref<String[]>([]);

const formAddOns: FormFinishingUpAddOn[] = [
  { title: 'Online service', price: '+$1/mo' },
  { title: 'Large storage', price: '+$2/mo' },
];
</script>

<template>
  <form class="form">
    <FormSection
      v-if="false"
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

    <FormSection
      v-if="false"
      title="Select your plan"
      subtitle="Add-ons help enhance your game experience."
    >
      <div class="form-radio-box-container">
        <InputRadioBox
          v-model="plan"
          label="Arcade"
          name="arcade"
          price="$9/mo"
        >
          <ArcadeIcon />
        </InputRadioBox>
        <InputRadioBox
          v-model="plan"
          label="Advanced"
          name="advanced"
          price="$12/mo"
        >
          <AdvancedIcon />
        </InputRadioBox>
        <InputRadioBox v-model="plan" label="Pro" name="pro" price="$15/mo">
          <ProIcon />
        </InputRadioBox>
      </div>

      <div class="plan-duration-selection-container">
        <AppSwitch onText="Yearly" offText="Monthly" />
      </div>
    </FormSection>

    <FormSection
      v-if="false"
      title="Pick add-ons"
      subtitle="Add-ons help enhance your gaming experience."
    >
      <div class="add-ons-selection-container">
        <AppCheckBox
          v-model="addOns"
          name="online-service"
          label="Online service"
          description="Access to multiplayer games"
          price="+$1/mo"
        />
        <AppCheckBox
          v-model="addOns"
          name="large-storage"
          label="Large storage"
          description="Extra 1TB of cloud save"
          price="+$2/mo"
        />
        <AppCheckBox
          v-model="addOns"
          name="customizable-profile"
          label="Customizable profile"
          description="Custom theme on your profile"
          price="+$2/mo"
        />
      </div>
    </FormSection>

    <FormSection
      title="Finishing up"
      subtitle="Double-check everything looks OK before confirming."
    >
      <div class="finishing-up-container">
        <FormFinishingUp
          planName="Arcade"
          planPrice="$9/mo"
          planDuration="mo"
          :addOns="formAddOns"
          totalPrice="+$12/mo"
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

.form-radio-box-container {
  display: flex;
  gap: 1rem;
  padding-top: 4.4rem;
}

.plan-duration-selection-container {
  background-color: var(--color-plan-period-bg);
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  margin-top: 3.2rem;
  border-radius: 0.8rem;
}

.add-ons-selection-container {
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.finishing-up-container {
  margin-top: 4.2rem;
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
