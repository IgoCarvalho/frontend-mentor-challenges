<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { toRef, watch } from 'vue';
import { useField } from 'vee-validate';

interface AppInputProps {
  name: string;
  label: string;
  type?: string;
}

const props = defineProps<AppInputProps>();

const nameRef = toRef(props, 'name');
const { errorMessage, value, handleChange } = useField(nameRef);

watch(value, (newValue) => {
  if (props.type === 'tel') {
    let parsedText = String(newValue);
    parsedText = parsedText.replace(/\D/g, '');
    parsedText = parsedText.replace(/^(\d\d)(\d)/g, '$1) $2');
    parsedText = parsedText.replace(/(\d{5})(\d)/, '$1-$2');
    if (parsedText.length > 0) {
      parsedText = `(${parsedText}`;
    }
    handleChange(parsedText.slice(0, 15), false);
  }
});
</script>

<template>
  <div class="input-container">
    <div class="input-info">
      <label class="input-label" :for="name">{{ label }}</label>
      <span v-show="errorMessage" class="input-error-message">{{
        errorMessage
      }}</span>
    </div>
    <input
      class="input-base"
      :class="{ 'input-base-error': errorMessage }"
      :id="name"
      :name="name"
      :type="type"
      v-bind="$attrs"
      v-model="value"
    />
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.input-info {
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
}

.input-label {
  color: var(--color-text);
}

.input-error-message {
  color: var(--color-input-error);
  font-weight: 700;
}

.input-base {
  color: var(--color-text);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.5rem 1.6rem;
  border-radius: 0.8rem;
  border: none;
  outline: 1px solid var(--color-input-border);
  outline-offset: -1px;
  width: 100%;
}
.input-base-error {
  border-color: var(--color-input-error);
}
.input-base::placeholder {
  color: var(--color-input-placeholder);
}
.input-base:focus,
.input-base:hover {
  outline-color: var(--color-input-border-active);
}

@media screen and (max-width: 425px) {
  .input-container {
    gap: 0.4rem;
  }

  .input-base {
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border-radius: 0.4rem;
  }
  .input-base::placeholder {
    letter-spacing: 0.03em;
  }

  .input-label,
  .input-error-message {
    font-size: 1.2rem;
  }
}
</style>
