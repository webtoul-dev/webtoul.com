<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useBuilderStore, useUserStore } from "../stores/builder";
import {
  PlusIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  Squares2X2Icon,
  PhotoIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/vue/24/outline";

const builderStore = useBuilderStore();
const userStore = useUserStore();
const stats = computed(() => [
  {
    name: "Total Builds",
    value: builderStore.buildHistory.length,
    change: "+12%",
    icon: WrenchScrewdriverIcon,
  },
  { name: "UI Components", value: "45", change: "+8%", icon: Squares2X2Icon },
  { name: "AI Images", value: "128", change: "+15%", icon: PhotoIcon },
  { name: "Success Rate", value: "98%", change: "+2%", icon: ClockIcon },
]);

const quickActions = [
  {
    name: "Create Website",
    description: "Build a new website with AI",
    href: "/editor/builder",
    icon: WrenchScrewdriverIcon,
    color: "bg-blue-500",
  },
  {
    name: "Generate Components",
    description: "Create custom UI components",
    href: "/editor/ui-components",
    icon: Squares2X2Icon,
    color: "bg-purple-500",
  },
  {
    name: "Generate Images",
    description: "Create AI-powered images",
    href: "/editor/image-generator",
    icon: PhotoIcon,
    color: "bg-green-500",
  },
];

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
</script>

<template>
  <div class="space-y-8">
    <!-- Welcome Section -->
    <div
      class="bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-6 text-white"
    >
      <h2 class="text-2xl font-bold mb-2">
        Welcome back, {{ userStore.user.name || "Guest" }}!
      </h2>
      <p class="text-primary-100 mb-4">
        Ready to build something amazing with AI?
      </p>
      <RouterLink
        to="/editor/builder"
        class="inline-flex items-center px-4 py-2 bg-white text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors"
      >
        <PlusIcon class="h-5 w-5 mr-2" />
        Create New Website
      </RouterLink>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="stat in stats"
        :key="stat.name"
        class="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">{{ stat.name }}</p>
            <p class="text-2xl font-bold text-gray-900">{{ stat.value }}</p>
          </div>
          <div class="flex flex-col items-end">
            <component :is="stat.icon" class="h-8 w-8 text-gray-400 mb-1" />
            <div class="text-sm text-green-600 font-medium">
              {{ stat.change }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <RouterLink
          v-for="action in quickActions"
          :key="action.name"
          :to="action.href"
          class="flex items-center p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group"
        >
          <div
            class="flex items-center justify-center w-12 h-12 rounded-lg mr-4"
            :class="action.color"
          >
            <component :is="action.icon" class="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 class="font-medium text-gray-900 group-hover:text-primary-600">
              {{ action.name }}
            </h4>
            <p class="text-sm text-gray-500">{{ action.description }}</p>
          </div>
        </RouterLink>
      </div>
    </div>

    <!-- Recent Builds -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium text-gray-900">Recent Builds</h3>
          <RouterLink
            to="/editor/builder"
            class="text-primary-600 hover:text-primary-700 text-sm font-medium"
          >
            View all
          </RouterLink>
        </div>
      </div>

      <div
        v-if="builderStore.buildHistory.length === 0"
        class="p-6 text-center"
      >
        <div
          class="w-12 h-12 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4"
        >
          <ClockIcon class="h-6 w-6 text-gray-400" />
        </div>
        <p class="text-gray-500 mb-4">No builds yet</p>
        <RouterLink
          to="/editor/builder"
          class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          <PlusIcon class="h-4 w-4 mr-2" />
          Create your first website
        </RouterLink>
      </div>

      <div v-else class="divide-y divide-gray-200">
        <div
          v-for="build in builderStore.buildHistory.slice(0, 5)"
          :key="build.id"
          class="p-6 hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-medium text-gray-900 truncate">
                {{ build.prompt }}
              </h4>
              <div
                class="mt-1 flex items-center space-x-4 text-sm text-gray-500"
              >
                <span>{{ build.framework }}</span>
                <span>{{ build.theme }} theme</span>
                <span>{{ formatDate(build.createdAt) }}</span>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                title="Preview"
              >
                <EyeIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                title="Download"
              >
                <ArrowDownTrayIcon class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
