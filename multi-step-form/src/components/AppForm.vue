<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { ErrorMessage, useForm } from 'vee-validate';
import * as yup from 'yup';

import AppButton from './AppButton.vue';
import AppInput from './AppInput.vue';
import FormSection from './FormSection.vue';
import InputRadioBox from './InputRadioBox.vue';
import AppSwitch from './AppSwitch.vue';
import AppCheckBox from './AppCheckBox.vue';
import FormFinishingUp from './FormFinishingUp.vue';
import FormStepper from './FormStepper.vue';
import FormThanksVue from './FormThanks.vue';

import type { FormFinishingUpAddOn } from './FormFinishingUp.vue';
import type { PlanDuration } from '@/types';

import { plans, addOns } from '@/data';

const planDuration = ref<PlanDuration>('monthly');
const formStep = ref(0);
const slideDirection = ref<'left' | 'right'>('left');
const formSteps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];

const formSchema = [
  yup.object({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    phone: yup.string().required(),
  }),
  yup.object({
    plan: yup.string().required('Choose a plan'),
  }),
  yup.object({
    'add-ons': yup
      .array()
      .of(yup.string().required())
      .min(1, 'Select at least 1 items')
      .required('Select at least 1 items'),
  }),
];

const currentSchema = computed(() => {
  return formSchema[formStep.value];
});

watch(formStep, (actualStep, oldStep) => {
  const slideToNextStep = actualStep > oldStep;

  setSlideDirection(slideToNextStep);
});

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
  nextStep();
}

function navigateToPlanStep() {
  const planStep = 1;

  goToStep(planStep);
}

function setSlideDirection(slidingToNextStep: boolean) {
  slideDirection.value = slidingToNextStep ? 'left' : 'right';
}

interface FormFields {
  name: string;
  email: string;
  phone: string;
  plan: string;
  'add-ons'?: string[];
}

const { meta, handleSubmit, values } = useForm<FormFields>({
  validationSchema: currentSchema,
  keepValuesOnUnmount: true,
});

const onSubmit = handleSubmit(() => {
  nextStep();
});

const selectedAddOns = computed(() => {
  const selectedPlan = plans.find((p) => p.id === values.plan);

  if (!selectedPlan) return;

  const planDurationFullName =
    planDuration.value === 'monthly' ? 'Monthly' : 'Yearly';

  const planName = `${selectedPlan?.name} (${planDurationFullName})`;
  const planPrice = selectedPlan?.price[planDuration.value].text;

  interface SelectedAddonsData {
    addOnsData: FormFinishingUpAddOn[];
    addOnsTotalPrice: number;
  }

  const selectedAddOnsIndexes = values['add-ons']?.map((addOn) => {
    return addOns.findIndex((a) => a.id === addOn);
  });

  const selectedAddOnsData = selectedAddOnsIndexes?.reduce<SelectedAddonsData>(
    (acc, addOnIndex) => {
      const addOnData: FormFinishingUpAddOn = {
        title: addOns[addOnIndex].name,
        price: addOns[addOnIndex].price[planDuration.value].text,
      };

      const addOnPrice = addOns[addOnIndex].price[planDuration.value].value;

      return {
        addOnsData: [...(acc.addOnsData || []), addOnData],
        addOnsTotalPrice: (acc.addOnsTotalPrice || 0) + addOnPrice,
      };
    },
    {} as SelectedAddonsData
  );

  const totalPrice =
    selectedPlan.price[planDuration.value].value +
    (selectedAddOnsData?.addOnsTotalPrice || 0);

  const totalPriceText =
    planDuration.value === 'monthly'
      ? `+$${totalPrice}/mo`
      : `$${totalPrice}/yr`;

  return {
    planName,
    planPrice,
    addOns: selectedAddOnsData?.addOnsData,
    totalPrice: totalPriceText,
  };
});
</script>

<template>
  <FormStepper :stepsLabel="formSteps" :currentStep="formStep" />

  <form class="form" @submit="onSubmit">
    <Transition mode="out-in" :name="`slide-${slideDirection}`">
      <FormSection
        v-if="formStep === 0"
        title="Personal info"
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
        subtitle="You have the option of monthly or yearly billing."
      >
        <div class="form-radio-box-container">
          <InputRadioBox
            v-for="plan in plans"
            :key="plan.id"
            :label="plan.name"
            name="plan"
            :value="plan.id"
            :price="plan.price[planDuration].text"
            :info="planDuration === 'yearly' && plan.discount"
          >
            <Component :is="plan.icon" />
          </InputRadioBox>
        </div>

        <div class="plan-duration-selection-container">
          <AppSwitch
            v-model="planDuration"
            onText="Yearly"
            onValue="yearly"
            offText="Monthly"
            offValue="monthly"
          />
        </div>

        <ErrorMessage
          v-if="meta.touched"
          name="plan"
          class="error-message-container"
        />
      </FormSection>

      <FormSection
        v-else-if="formStep === 2"
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      >
        <div class="add-ons-selection-container">
          <AppCheckBox
            v-for="addOn in addOns"
            :key="addOn.id"
            name="add-ons"
            :label="addOn.name"
            :value="addOn.id"
            :description="addOn.description"
            :price="addOn.price[planDuration].text"
          />
        </div>

        <ErrorMessage
          v-if="meta.touched"
          name="add-ons"
          class="error-message-container"
        />
      </FormSection>

      <FormSection
        v-else-if="formStep === 3"
        title="Finishing up"
        subtitle="Double-check everything looks OK before confirming."
      >
        <div class="finishing-up-container">
          <FormFinishingUp
            :planName="selectedAddOns?.planName || ''"
            :planPrice="selectedAddOns?.planPrice || ''"
            :planDuration="planDuration"
            :addOns="selectedAddOns?.addOns || []"
            :totalPrice="selectedAddOns?.totalPrice || ''"
            :onChangePlan="navigateToPlanStep"
          />
        </div>
      </FormSection>

      <FormThanksVue v-else />
    </Transition>

    <div
      v-if="formStep < 4"
      class="form-action-buttons"
      :class="{ 'one-button': formStep <= 0 }"
    >
      <AppButton v-if="formStep > 0" @click="prevStep" variant="transparent">
        Go Back
      </AppButton>
      <AppButton v-if="formStep < 3" type="submit"> Next Step </AppButton>
      <AppButton
        v-if="formStep === 3"
        @click="formConfirmation"
        variant="secondary"
      >
        Confirm
      </AppButton>
    </div>
  </form>
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

.error-message-container {
  display: block;
  background-color: var(--color-text-error-bg);
  color: var(--color-text-error);
  font-size: 1.4rem;
  text-align: center;
  padding: 1rem;
  border-radius: 0.8rem;
  margin-top: 1rem;
}
.form-radio-box-container {
  display: flex;
  gap: 1rem;
  margin-top: 4.4rem;
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

@media screen and (max-width: 425px) {
  .form {
    position: initial;
    align-self: flex-start;
    padding: 3.1rem 2.4rem 3.2rem;
    border-radius: 0.8rem;
    background-color: var(--color-foreground);
  }

  .form-inputs-container {
    margin-top: 2.2rem;
  }

  .form-radio-box-container {
    flex-direction: column;
    margin-top: 2.2rem;
    gap: 1.2rem;
  }

  .plan-duration-selection-container {
    margin-top: 2.4rem;
  }

  .add-ons-selection-container {
    margin-top: 2.2rem;
    gap: 1.2rem;
  }

  .finishing-up-container {
    margin-top: 2.2rem;
  }

  .form-action-buttons {
    position: fixed;
    bottom: 0;
    padding: 1.6rem;
    background-color: var(--color-foreground);
  }
}
</style>
