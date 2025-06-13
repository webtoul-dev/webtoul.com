<script setup lang="ts">
import { useUserStore } from "../../stores/builder";
import { useBuilderStore } from "../../stores/builder";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const userStore = useUserStore();
const builderStore = useBuilderStore();

const plans = computed(() => [
  {
    name: "Free",
    price: "$0",
    period: "month",
    description: "Perfect for getting started",
    features: [
      "5 websites per month",
      "10 UI components per month",
      "20 AI images per month",
      "Basic templates",
      "Email support",
      "Community access",
    ],
    current: userStore.user.plan === "Free",
  },
  {
    name: "Pro",
    price: "$29",
    period: "month",
    description: "Best for professionals",
    features: [
      "Unlimited websites",
      "Unlimited UI components",
      "500 AI images per month",
      "Premium templates",
      "Priority support",
      "Custom domains",
      "Advanced customization",
      "Export source code",
      "HD image generation",
      "Custom component styles",
    ],
    current: userStore.user.plan === "Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "month",
    description: "For teams and agencies",
    features: [
      "Everything in Pro",
      "Unlimited AI images",
      "Team collaboration",
      "White-label solution",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Bulk image generation",
      "Advanced UI component library",
      "Custom brand templates",
    ],
    current: userStore.user.plan === "Enterprise",
  },
]);

const changePlan = (planName: string) => {
  userStore.updateUserProfile({ plan: planName });
  builderStore.showToast(`Switched to ${planName} plan`, "success");
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900">Billing & Plans</h3>
      <p class="mt-1 text-sm text-gray-600">
        Manage your subscription and billing information.
      </p>
    </div>

    <!-- Current Plan -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-base font-medium text-gray-900">Current Plan</h4>
          <p class="text-sm text-gray-500">
            You are currently on the {{ userStore.user.plan }} plan
          </p>
        </div>
        <div class="text-right">
          <div class="text-2xl font-bold text-gray-900">
            {{ plans.find((p) => p.current)?.price }}
            <span class="text-sm font-normal text-gray-500">/month</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Available Plans -->
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="relative bg-white border-2 rounded-lg p-6 transition-all hover:shadow-lg"
        :class="
          plan.current
            ? 'border-primary-500 ring-2 ring-primary-200'
            : plan.popular
            ? 'border-primary-300'
            : 'border-gray-200'
        "
      >
        <div v-if="plan.current" class="absolute -top-3 right-3">
          <span
            class="bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-full"
          >
            Current Plan
          </span>
        </div>

        <div
          v-else
          v-if="plan.popular"
          class="absolute -top-3 left-1/2 transform -translate-x-1/2"
        >
          <span
            class="bg-primary-500 text-white px-3 py-1 text-xs font-medium rounded-full"
          >
            Most Popular
          </span>
        </div>

        <div class="text-center">
          <h3 class="text-lg font-semibold text-gray-900">{{ plan.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ plan.description }}</p>

          <div class="mt-4">
            <span class="text-3xl font-bold text-gray-900">{{
              plan.price
            }}</span>
            <span class="text-gray-500">/ {{ plan.period }}</span>
          </div>
        </div>

        <ul class="mt-6 space-y-3">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-start"
          >
            <CheckIcon
              class="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
            />
            <span class="text-sm text-gray-700">{{ feature }}</span>
          </li>
        </ul>

        <div class="mt-8">
          <button
            type="button"
            class="w-full py-2 px-4 rounded-lg font-medium transition-colors"
            :class="
              plan.current
                ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            "
            :disabled="plan.current"
            @click="changePlan(plan.name)"
          >
            {{ plan.current ? "Current Plan" : `Switch to ${plan.name}` }}
          </button>
        </div>
      </div>
    </div>

    <!-- Usage Stats -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h4 class="text-base font-medium text-gray-900 mb-4">Current Usage</h4>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-gray-900">12</div>
          <div class="text-sm text-gray-500">Websites Created</div>
          <div class="text-xs text-gray-400 mt-1">This month</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-gray-900">45</div>
          <div class="text-sm text-gray-500">UI Components</div>
          <div class="text-xs text-gray-400 mt-1">This month</div>
        </div>
        <div class="text-center p-4 bg-gray-50 rounded-lg">
          <div class="text-2xl font-bold text-gray-900">128</div>
          <div class="text-sm text-gray-500">AI Images</div>
          <div class="text-xs text-gray-400 mt-1">This month</div>
        </div>
      </div>
    </div>

    <!-- Billing History -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <h4 class="text-base font-medium text-gray-900 mb-4">Billing History</h4>
      <div class="text-center text-gray-500 py-8">
        <p class="text-sm">No billing history available</p>
        <p class="text-xs text-gray-400 mt-1">
          Invoices will appear here once you upgrade to a paid plan
        </p>
      </div>
    </div>
  </div>
</template>
