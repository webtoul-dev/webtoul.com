<template>
  <div class="min-h-screen w-full flex flex-col">
    <header
      v-if="!hideLayout"
      :class="[
        'sticky top-0 z-10 shadow flex items-center justify-between px-8 py-5 transition-colors duration-300',
        scrolled ? 'bg-white' : 'bg-transparent',
      ]"
    >
      <mainNav :userData="user" v-if="wrapperWidth >= 805"></mainNav>
      <mobileNav :userData="user" v-if="wrapperWidth < 805"></mobileNav>
    </header>
    <main
      class="flex-1 px-2 max-w-[1800px] w-full mx-auto scroll-smooth overflow-x-clip"
    >
      <router-view />
    </main>
    <motion.footer
      v-if="!hideLayout"
      class="relative bg-white text-slate-900 text-center py-6 text-base border-t border-slate-200 mt-auto"
      :variants="parent"
      initial="hidden"
      whileInView="visible"
    >
      <div ref="columnWrapper" class="w-full h-full">
        <motion.div
          :variants="child"
          v-for="i in 8"
          :key="i"
          class="absolute top-0 h-full bg-blue-300 opacity-30 pointer-events-none"
          :style="getColumnStyle(i - 1)"
        ></motion.div>
        <div class="relative max-w-[1800px] mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-12">
            <div
              class="relative"
              @mouseenter="hoverdBox = 1"
              @mouseleave="hoverdBox = null"
            >
              <motion.div
                class="absolute left-0 w-full h-full bg-section-white"
                :animate="{
                  scaleX: hoverdBox === 1 ? 1 : 0,
                }"
                :transition="{
                  type: 'spring',
                  stiffness: 500,
                  damping: 50,
                  ease: 'easeInOut',
                  duration: 0.5,
                }"
                :style="{ transformOrigin: 'left' }"
              ></motion.div>
              <div class="relative p-8 flex flex-col items-center gap-4">
                <img src="/logo.svg" alt="Web Toul Logo" class="h-20" />
                <p class="text-inherit">
                  We enable businesses to create stunning, fully responsive
                  websites in minutes—no coding needed. It combines smart
                  design, content generation, and seamless editing for fast,
                  professional results every time.
                </p>
              </div>
            </div>
            <div
              class="relative flex flex-col items-center justify-center"
              @mouseenter="hoverdBox = 2"
              @mouseleave="hoverdBox = null"
            >
              <motion.div
                class="absolute left-0 w-full h-full bg-section-white"
                :animate="{
                  scaleX: hoverdBox === 2 ? 1 : 0,
                }"
                :transition="{
                  type: 'spring',
                  stiffness: 500,
                  damping: 50,
                  ease: 'easeInOut',
                  duration: 0.5,
                }"
                :style="{ transformOrigin: 'left' }"
              ></motion.div>
              <div class="relative">
                <h2 class="text-xl mb-4">Social Media</h2>
                <ul class="flex flex-col gap-2">
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a
                      href="https://www.facebook.com/profile.php?id=61577129553880"
                    >
                      Facebook</a
                    >
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a href="https://x.com/WebtoulL"> X</a>
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a href="https://www.youtube.com/@WebtoulInnovationsPvtLtd">
                      Youtube</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="relative flex flex-col items-center justify-center"
              @mouseenter="hoverdBox = 3"
              @mouseleave="hoverdBox = null"
            >
              <motion.div
                class="absolute left-0 w-full h-full bg-section-white"
                :animate="{
                  scaleX: hoverdBox === 3 ? 1 : 0,
                }"
                :transition="{
                  type: 'spring',
                  stiffness: 500,
                  damping: 50,
                  ease: 'easeInOut',
                  duration: 0.5,
                }"
                :style="{ transformOrigin: 'left' }"
              ></motion.div>
              <div class="relative">
                <h2 class="text-xl mb-4">Company</h2>
                <ul class="flex flex-col gap-2">
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <router-link to="/terms">Terms and Conditions</router-link>
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <router-link to="/privacy">Privacy Policy</router-link>
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a href="#">LinkedIn</a>
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a href="https://www.f6s.com/webtoul-innovations">F6S</a>
                  </li>
                  <li
                    class="hover:text-blue-highlight transition-colors duration-150 ease-in font-bold"
                  >
                    <a
                      href="https://www.crunchbase.com/organization/webtoul-innovations"
                      >CrunchBase</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </motion.footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { motion, stagger } from "motion-v";
import mainNav from "./components/mainNav.vue";
import mobileNav from "./components/mobileNav.vue";

const scrolled = ref(false);
const user = ref(null);
const route = useRoute();
const hoverdBox = ref(null);
const columnWrapper = ref(null);
const wrapperWidth = ref(0);

const updateWidth = () => {
  if (columnWrapper.value) {
    wrapperWidth.value = columnWrapper.value.getBoundingClientRect().width;
  }
};
const parent = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.1,
    },
  },
};
const child = {
  hidden: {
    opacity: 0,
    y: -400,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      stiffness: 500,
      damping: 50,
      ease: "easeInOut",
    },
  },
};

const hideLayout = computed(() => {
  // Hide layout for /dashboard and all its children
  return route.path.startsWith("/editor");
});

const onScroll = () => {
  scrolled.value = window.scrollY > 10;
};
onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
  window.addEventListener("scroll", onScroll);
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
const getColumnStyle = (index) => {
  const colWidth = wrapperWidth.value / 8;
  return {
    left: `${colWidth * index}px`,
    width: `${colWidth}px`,
  };
};
</script>
