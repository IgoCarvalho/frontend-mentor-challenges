<script setup lang="ts">
export interface FormFinishingUpAddOn {
  title: string;
  price: string;
}

interface FormFinishingUpProps {
  planName: string;
  planPrice: string;
  planDuration: string;
  addOns: FormFinishingUpAddOn[];
  totalPrice: string;
}

defineProps<FormFinishingUpProps>();
</script>

<template>
  <div class="finishing-up">
    <div class="finishing-up-info">
      <div class="finishing-plan">
        <div class="plan-info">
          <p class="plan-title">{{ planName }} (Monthly)</p>
          <button class="plan-change-btn">Change</button>
        </div>
        <span class="plan-price">{{ planPrice }}</span>
      </div>

      <ul class="finishing-add-ons">
        <li
          v-for="(addOn, index) in addOns"
          :key="addOn.title + index"
          class="add-on-info"
        >
          <p class="add-on-title">{{ addOn.title }}</p>
          <span class="add-on-price">{{ addOn.price }}</span>
        </li>
      </ul>
    </div>

    <div class="finishing-up-total">
      <p class="finishing-up-total-title">Total (per month)</p>
      <span class="finishing-up-total-price">{{ totalPrice }}</span>
    </div>
  </div>
</template>

<style scoped>
.finishing-up-info {
  background-color: var(--color-finishing-bg);
  padding: 2.4rem;
  border-radius: 0.8rem;
}

.finishing-plan {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 2.4rem;
  border-bottom: 1px solid var(--color-finishing-plan-border);
}

.plan-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}
.plan-title {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
}

.plan-change-btn {
  border: none;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: underline;
  cursor: pointer;
  color: var(--color-text-muted);
}
.plan-change-btn:hover {
  color: var(--color-finishing-plan-change-btn-hover);
}

.plan-price {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-text);
}

.finishing-add-ons {
  list-style: none;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.add-on-info {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  font-weight: 400;
}

.add-on-title {
  color: var(--color-text-muted);
}

.add-on-price {
  color: var(--color-text);
}

.finishing-up-total {
  padding: 0 2.4rem;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
}

.finishing-up-total-title {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-text-muted);
}

.finishing-up-total-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-finishing-total-price);
}
</style>
