<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../stores/builder";
import UserProfile from "../components/settings/UserProfile.vue";
import AppSettings from "../components/settings/AppSettings.vue";
import ApiKeys from "../components/settings/ApiKeys.vue";
import BillingPlan from "../components/settings/BillingPlan.vue";

const userStore = useUserStore();
const activeTab = ref("profile");

const tabs = [
  { id: "profile", name: "Profile", component: UserProfile },
  { id: "settings", name: "App Settings", component: AppSettings },
  { id: "api", name: "API Keys", component: ApiKeys },
  { id: "billing", name: "Billing", component: BillingPlan },
];
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <!-- Tabs -->
      <div class="border-b border-gray-200">
        <nav class="flex space-x-8 px-6" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            type="button"
            class="py-4 px-1 border-b-2 font-medium text-sm transition-colors"
            :class="
              activeTab === tab.id
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            "
            @click="activeTab = tab.id"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div class="p-6">
        <component :is="tabs.find((tab) => tab.id === activeTab)?.component" />
      </div>
    </div>
  </div>
</template>
