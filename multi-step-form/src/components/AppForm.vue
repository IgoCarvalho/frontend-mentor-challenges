<script setup lang="ts">
import { ref, watch } from 'vue';
import { Form } from 'vee-validate';
import * as yup from 'yup';

import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';
import FormSection from './FormSection.vue';
import InputRadioBox from './InputRadioBox.vue';
import AppSwitch from './AppSwitch.vue';
import AppCheckBox from './AppCheckBox.vue';
import FormFinishingUp from './FormFinishingUp.vue';
import FormStepper from './FormStepper.vue';

import ArcadeIcon from './icons/ArcadeIcon.vue';
import AdvancedIcon from './icons/AdvancedIcon.vue';
import ProIcon from './icons/ProIcon.vue';

import type { FormFinishingUpAddOn } from './FormFinishingUp.vue';

const plan = ref('');
const addOns = ref<String[]>([]);
const formStep = ref(0);
const slideDirection = ref<'left' | 'right'>('left');
const formSteps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

const formSchema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().required().email(),
  phone: yup.string().required(),
});

watch(formStep, (actualStep, oldStep) => {
  const slideToNextStep = actualStep > oldStep;

  setSlideDirection(slideToNextStep);
});

const formAddOns: FormFinishingUpAddOn[] = [
  { title: 'Online service', price: '+$1/mo' },
  { title: 'Large storage', price: '+$2/mo' },
];

function nextStep() {
  formStep.value += 1;
}

function prevStep() {
  formStep.value -= 1;
}

function goToStep(step: number) {
  formStep.value = step;
}

function formConfirmation() {
  window.alert('Thankyou!');
}

function navigateToPlanStep() {
  const planStep = 2;

  goToStep(planStep);
}

function setSlideDirection(slidingToNextStep: boolean) {
  slideDirection.value = slidingToNextStep ? 'left' : 'right';
}
</script>

<template>
  <FormStepper :stepsLabel="formSteps" :currentStep="formStep" />

  <Form class="form" :validation-schema="formSchema">
    <Transition mode="out-in" :name="`slide-${slideDirection}`">
      <FormSection
        v-if="formStep === 0"
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
            name="phone"
            label="Phone Number"
            type="phone"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </FormSection>

      <FormSection
        v-else-if="formStep === 1"
        title="Select your plan"
        subtitle="Add-ons help enhance your game experience."
      >
        <div class="form-radio-box-container">
          <InputRadioBox
            v-model="plan"
            label="Arcade"
            name="arcade"
            price="$9/mo"
            info="2 months free"
          >
            <ArcadeIcon />
          </InputRadioBox>
          <InputRadioBox
            v-model="plan"
            label="Advanced"
            name="advanced"
            price="$12/mo"
            info="2 months free"
          >
            <AdvancedIcon />
          </InputRadioBox>
          <InputRadioBox
            v-model="plan"
            label="Pro"
            name="pro"
            price="$15/mo"
            info="2 months free"
          >
            <ProIcon />
          </InputRadioBox>
        </div>

        <div class="plan-duration-selection-container">
          <AppSwitch onText="Yearly" offText="Monthly" />
        </div>
      </FormSection>

      <FormSection
        v-else-if="formStep === 2"
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
        v-else-if="formStep === 3"
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
            :onChangePlan="navigateToPlanStep"
          />
        </div>
      </FormSection>
    </Transition>

    <div class="form-action-buttons" :class="{ 'one-button': formStep <= 0 }">
      <AppButton v-if="formStep > 0" @click="prevStep" variant="transparent">
        Go Back
      </AppButton>
      <AppButton v-if="formStep < 3" @click="nextStep"> Next Step </AppButton>
      <AppButton
        v-if="formStep === 3"
        @click="formConfirmation"
        variant="secondary"
      >
        Confirm
      </AppButton>
    </div>
  </Form>
</template>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 200ms ease-out;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.form {
  flex: 1;
  padding: 4rem 10rem 2rem;
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

.form-action-buttons.one-button {
  justify-content: flex-end;
}
</style>
