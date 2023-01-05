import type { AddOn, Plan } from '@/types';

import AdvancedIcon from '@/components/icons/AdvancedIcon.vue';
import ArcadeIcon from '@/components/icons/ArcadeIcon.vue';
import ProIcon from '@/components/icons/ProIcon.vue';

export const plans: Plan[] = [
  {
    icon: ArcadeIcon,
    name: 'Arcade',
    id: 'arcade',
    price: {
      monthly: {
        text: '$9/mo',
        value: 9,
      },
      yearly: {
        text: '$90/yr',
        value: 90,
      },
    },
    discount: '2 months free ',
  },
  {
    icon: AdvancedIcon,
    name: 'Advanced',
    id: 'advanced',
    price: {
      monthly: {
        text: '$12/mo',
        value: 12,
      },
      yearly: {
        text: '$120/yr',
        value: 120,
      },
    },
    discount: '2 months free ',
  },
  {
    icon: ProIcon,
    name: 'Pro',
    id: 'pro',
    price: {
      monthly: {
        text: '$15/mo',
        value: 15,
      },
      yearly: {
        text: '$150/yr',
        value: 150,
      },
    },
    discount: '2 months free ',
  },
];

export const addOns: AddOn[] = [
  {
    name: 'Online service',
    id: 'online-service',
    description: 'Access to multiplayer games',
    price: {
      monthly: {
        text: '+$1/mo',
        value: 1,
      },
      yearly: {
        text: '+$10/yr',
        value: 10,
      },
    },
  },
  {
    name: 'Large storage',
    id: 'large-storage',
    description: 'Extra 1TB of cloud save',
    price: {
      monthly: {
        text: '+$2/mo',
        value: 2,
      },
      yearly: {
        text: '+$20/yr',
        value: 20,
      },
    },
  },
  {
    name: 'Customizable profile',
    id: 'customizable-profile',
    description: 'Custom theme on your profile',
    price: {
      monthly: {
        text: '+$2/mo',
        value: 2,
      },
      yearly: {
        text: '+$20/yr',
        value: 20,
      },
    },
  },
];
