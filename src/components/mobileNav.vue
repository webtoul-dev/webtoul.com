<script setup>
import { ref } from "vue";
import { AnimatePresence, motion } from "motion-v";
const menuIsOpen = ref(false);
const navItems = [
  { key: "features", label: "Features", to: "/features", icon: "star" },
  { key: "showcase", label: "Showcase", to: "/showcase", icon: "visibility" },
  { key: "learn", label: "Learn", to: "/learn", icon: "school" },
  { key: "about", label: "About", to: "/about", icon: "info" },
  { key: "blog", label: "Blog", to: "/blog", icon: "article" },
];
const props = defineProps(["userData"]);
const parent = {
  hidden: {
    opacity: 0,
    scaleX: 0.7,
  },
  visible: {
    scaleX: menuIsOpen ? 1 : 0.7,
    opacity: menuIsOpen ? 1 : 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  leave: {
    scaleX: 0.7,
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.3,
      when: "afterChildren",
    },
  },
};
const child = {
  hidden: {
    opacity: 0,
    x: -400,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 50,
      ease: "easeInOut",
    },
  },
  leave: {
    opacity: 0,
    x: -400,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 50,
      ease: "easeInOut",
    },
  },
};
</script>
<template>
  <div class="flex items-center gap-3 cursor-pointer">
    <router-link to="/">
      <img src="/logo.svg" alt="AI Website Builder Logo" class="h-12" />
    </router-link>
  </div>

  <div class="flex items-center gap-4">
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
    <span @click="menuIsOpen = !menuIsOpen" class="material-symbols">
      menu
    </span>
    <AnimatePresence>
      <motion.nav
        v-show="menuIsOpen"
        class="absolute top-20 left-0 flex flex-col gap-4 w-full h-screen z-50 bg-white px-4 py-12"
        :variants="parent"
        initial="hidden"
        animate="visible"
        exit="leave"
        :style="{ transformOrigin: 'left' }"
      >
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          @click="
            () => {
              menuIsOpen = false;
            }
          "
        >
          <motion.div
            :variants="child"
            :style="{ transformOrigin: 'left' }"
            class="px-4 py-2 font-medium transition bg-transparent hover:text-blue-600 flex items-center gap-1"
            :class="{
              'text-blue-600': $route.path === item.to,
              'text-slate-950': $route.path !== item.to,
            }"
          >
            {{ item.label }}
          </motion.div>
        </router-link>
      </motion.nav>
    </AnimatePresence>
  </div>
</template>
