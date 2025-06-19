<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  Squares2X2Icon,
  PhotoIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
import Sidebar from "../components/Sidebar.vue";
import { useUserStore } from "../stores/builder";
import ToastNotification from "../components/ToastNotification.vue";

const route = useRoute();
const sidebarOpen = ref(false);
const userStore = useUserStore();

onMounted(() => {
  userStore.syncWithFirebaseAuth();
});

const navigation = [
  { name: "Dashboard", href: "/editor", icon: HomeIcon },
  {
    name: "Website Builder",
    href: "/editor/builder",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "UI Components",
    href: "/editor/ui-components",
    icon: Squares2X2Icon,
  },
  {
    name: "Image Generator",
    href: "/editor/image-generator",
    icon: PhotoIcon,
  },
  { name: "Settings", href: "/editor/settings", icon: Cog6ToothIcon },
];

const closeSidebar = () => {
  sidebarOpen.value = false;
};

const getPageTitle = () => {
  const routeName = route.name as string;
  switch (routeName) {
    case "editor":
      return "Dashboard";
    case "builder":
      return "Website Builder";
    case "ui-components":
      return "UI Components";
    case "image-generator":
      return "Image Generator";
    case "settings":
      return "Settings";
    default:
      return "Dashboard";
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <ToastNotification />

    <!-- Mobile sidebar backdrop -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 lg:hidden bg-gray-600 bg-opacity-75"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <Sidebar
      :navigation="navigation"
      :open="sidebarOpen"
      @close="closeSidebar"
    />

    <!-- Main content -->
    <div class="flex-1 flex flex-col lg:ml-64">
      <!-- Top navigation -->
      <div
        class="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200"
      >
        <div
          class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <button
            type="button"
            class="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" />
          </button>

          <div class="flex-1 min-w-0 lg:ml-0 ml-4">
            <h1 class="text-2xl font-bold text-gray-900">
              {{ getPageTitle() }}
            </h1>
          </div>

          <div class="flex items-center space-x-4">
            <div v-if="userStore" class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center"
              >
                <img
                  v-if="userStore.user.photoURL"
                  :src="userStore.user.photoURL"
                  :alt="userStore.user.name || userStore.user.email"
                  class="w-full h-full rounded-full object-cover"
                />
                <span v-else class="text-white text-sm font-medium">{{
                  userStore.user.name
                    ? userStore.user.name.charAt(0)
                    : userStore.user.email
                    ? userStore.user.email.charAt(0)
                    : "JD"
                }}</span>
              </div>
              <div class="hidden sm:block">
                <span class="text-sm font-medium text-gray-700">{{
                  userStore.user.name || userStore.user.name || "John Doe"
                }}</span>
                <p class="text-xs text-gray-500">{{ userStore.user.plan }}</p>
              </div>
            </div>
            <div v-else class="text-xs text-gray-400">Not signed in</div>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>
