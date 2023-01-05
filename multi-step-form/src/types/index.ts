import type { Component } from 'vue';

export type PlanDuration = 'yearly' | 'monthly';

interface Price {
  value: number;
  text: string;
}

export interface Plan {
  icon: Component;
  name: string;
  id: string;
  price: Record<PlanDuration, Price>;
  discount: string;
}

export interface AddOn {
  name: string;
  id: string;
  description: string;
  price: Record<PlanDuration, Price>;
}
