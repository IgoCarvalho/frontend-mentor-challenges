<script setup lang="ts">
import ThanksIcon from './icons/ThanksIcon.vue';
</script>

<template>
  <div class="thanks">
    <ThanksIcon />
    <p class="thanks-title">Thank you!</p>
    <span class="thanks-text">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel Free to email us at
      support@loremgaming.com.
    </span>
  </div>
</template>

<style scoped>
.thanks {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

.thanks-title {
  color: var(--color-text);
  font-size: 3.2rem;
  font-weight: 700;
  margin-top: 3.2rem;
}

.thanks-text {
  color: var(--color-text-muted);
  font-size: 1.6rem;
  margin-top: 1.6rem;
  text-align: center;
}
</style>
