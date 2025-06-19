<script setup>
import { useRoute } from "vue-router";

const navItems = [
  { key: "features", label: "Features", to: "/features", icon: "star" },
  { key: "showcase", label: "Showcase", to: "/showcase", icon: "visibility" },
  { key: "learn", label: "Learn", to: "/learn", icon: "school" },
  { key: "about", label: "About", to: "/about", icon: "info" },
  { key: "blog", label: "Blog", to: "/blog", icon: "article" },
];
const props = defineProps(["userData"]);
</script>

<template>
  <div class="flex items-center gap-3 cursor-pointer">
    <router-link to="/">
      <img src="/logo.svg" alt="AI Website Builder Logo" class="h-12" />
    </router-link>
  </div>
  <nav class="flex gap-1">
    <router-link
      v-for="item in navItems"
      :key="item.key"
      :to="item.to"
      class="px-4 py-2 font-medium transition bg-transparent hover:text-blue-600 flex items-center gap-1"
      :class="{
        'text-blue-600': $route.path === item.to,
        'text-slate-950': $route.path !== item.to,
      }"
    >
      {{ item.label }}
    </router-link>
  </nav>
  <div class="flex items-center gap-4">
    <router-link
      v-if="!userData"
      to="/auth"
      class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >Sign In</router-link
    >
    <router-link
      v-else
      to="/editor"
      class="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition"
    >
      Back to Editor
    </router-link>
  </div>
</template>
