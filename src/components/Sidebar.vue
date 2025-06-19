<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from "vue-router";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import { useBuilderStore, useUserStore } from "../stores/builder";

const userStore = useUserStore();
const builderStore = useBuilderStore();
const router = useRouter();

interface NavigationItem {
  name: string;
  href: string;
  icon: any;
}

defineProps<{
  navigation: NavigationItem[];
  open: boolean;
}>();

defineEmits<{
  close: [];
}>();

const route = useRoute();

const isActive = (href: string) => {
  return route.path === href;
};
const userLogout = async () => {
  try {
    await userStore.logout();
    builderStore.showToast("Sign out successfull!", "success");
    setTimeout(() => {
      router.push("/auth");
    }, 1000);
  } catch (e) {
    builderStore.showToast("Error signing out!", "error");
  }
};
</script>

<template>
  <!-- Sidebar -->
  <div
    class="fixed inset-y-0 left-0 h-screen z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:inset-0 lg:shadow-none lg:border-r lg:border-gray-200"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Sidebar header -->
    <div
      class="flex h-16 items-center justify-between px-6 border-b border-gray-200"
    >
      <router-link to="/">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center">
            <img src="/favicon.svg" />
          </div>
          <span class="text-xl font-bold text-gray-900">Webtoul</span>
        </div>
      </router-link>

      <button
        type="button"
        class="lg:hidden -mr-2 h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
        @click="$emit('close')"
      >
        <span class="sr-only">Close sidebar</span>
        <XMarkIcon class="h-6 w-6" />
      </button>
    </div>

    <div class="w-full flex flex-col h-[calc(100vh-64px)] justify-start">
      <!-- Navigation -->
      <nav class="flex-1 px-4 py-6 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
          :class="
            isActive(item.href)
              ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
          "
          @click="$emit('close')"
        >
          <component
            :is="item.icon"
            class="mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200"
            :class="
              isActive(item.href)
                ? 'text-primary-500'
                : 'text-gray-400 group-hover:text-gray-500'
            "
          />
          {{ item.name }}
        </RouterLink>
      </nav>
      <!-- Sign out Button -->
      <button
        v-if="userStore"
        type="button"
        class="inline-flex items-center w-fit mx-auto mb-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        @click="userLogout"
      >
        Sign Out
      </button>
      <!-- User info -->
      <div class="p-4 border-t border-gray-200">
        <div v-if="userStore" class="flex items-center space-x-3">
          <div
            class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center"
          >
            <img
              v-if="userStore.user.photoURL"
              :src="userStore.user.photoURL"
              :alt="userStore.user.name || userStore.user.email"
              class="w-full h-full rounded-full object-cover"
            />
            <span v-else class="text-gray-600 text-sm font-medium">
              {{
                userStore.user.name
                  ? userStore.user.name.charAt(0)
                  : userStore.user.email
                  ? userStore.user.email.charAt(0)
                  : "JD"
              }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{ userStore.user.name || userStore.user.name || "John Doe" }}
            </p>
            <p class="text-xs text-gray-500 truncate">
              {{ userStore.user.email || "No Email" }}
            </p>
          </div>
        </div>
        <div v-else class="text-xs text-gray-400">Not signed in</div>
      </div>
    </div>
  </div>
</template>
