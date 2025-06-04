<template>
  <div class="min-h-screen w-full flex flex-col">
    <header
      :class="[
        'sticky top-0 z-10 shadow flex items-center justify-between px-8 py-5 transition-colors duration-300',
        scrolled ? 'bg-white' : 'bg-transparent',
      ]"
    >
      <div class="flex items-center gap-3 cursor-pointer">
        <router-link to="/">
          <img src="/vite.svg" alt="AI Website Builder Logo" class="h-10" />
        </router-link>
      </div>
      <nav class="flex gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          class="px-4 py-2 font-medium transition bg-transparent hover:text-blue-600"
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
          to="/auth"
          class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >Sign In</router-link
        >
        <router-link
          to="/editor"
          class="px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
          >Demo</router-link
        >
      </div>
    </header>
    <main class="flex-1 px-2 max-w-5xl w-full mx-auto">
      <router-view />
    </main>
    <footer
      class="bg-white text-slate-500 text-center py-6 text-base border-t border-slate-200 mt-auto"
    >
      <span
        >© {{ new Date().getFullYear() }} AI Website Builder. All rights
        reserved.</span
      >
      <span class="block mt-2 space-x-2">
        <router-link to="/features" class="text-blue-600 hover:underline"
          >Features</router-link
        >
        <span>|</span>
        <router-link to="/showcase" class="text-blue-600 hover:underline"
          >Showcase</router-link
        >
        <span>|</span>
        <router-link to="/learn" class="text-blue-600 hover:underline"
          >Learn</router-link
        >
        <span>|</span>
        <router-link to="/about" class="text-blue-600 hover:underline"
          >About</router-link
        >
      </span>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const navItems = [
  { key: "landing", label: "Home", to: "/" },
  { key: "features", label: "Features", to: "/features" },
  { key: "showcase", label: "Showcase", to: "/showcase" },
  { key: "learn", label: "Learn", to: "/learn" },
  { key: "about", label: "About", to: "/about" },
  { key: "blog", label: "Blog", to: "/blog" },
];
const scrolled = ref(false);
const onScroll = () => {
  scrolled.value = window.scrollY > 10;
};
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
