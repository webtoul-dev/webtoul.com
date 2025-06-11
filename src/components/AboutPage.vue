<template>
  <section
    class="mx-auto p-12 py-0 pl-0 bg-gradient-to-r from-blue-50 to-blue-200 grid grid-cols-1 md:grid-cols-2 gap-10"
  >
    <div class="relative flex flex-col items-center justify-center">
      <motion.img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
        alt="AI Website Builder"
        class="h-[800px] w-full object-cover"
      />
      <div
        class="absolute bottom-0 max-h-2/3 bg-section-white m-4 flex flex-col items-center justify-center gap-8 p-4"
      >
        <motion.div
          :animate="{
            opacity: selectedBox === 'mission' ? 1 : 0,
            x: selectedBox === 'mission' ? 0 : -50,
          }"
          :transition="{
            duration: 0.3,
          }"
          v-show="selectedBox === 'mission'"
        >
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Our Mission
          </h2>
          <p class="text-elegant text-base mb-4">
            At Webtoul.com, our mission is simple: to empower anyone—regardless
            of technical skill—to build beautiful, professional, and effective
            websites using the power of artificial intelligence. We believe
            everyone deserves a powerful online presence.
          </p>
        </motion.div>
        <motion.div
          :animate="{
            opacity: selectedBox === 'vision' ? 1 : 0,
            x: selectedBox === 'vision' ? 0 : 50,
          }"
          :transition="{
            duration: 0.3,
          }"
          v-show="selectedBox === 'vision'"
        >
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Our Vision
          </h2>
          <p class="text-elegant text-base mb-4">
            We envision a future where creating a website is as easy as
            describing your idea. With AI as your personal web design team, your
            digital dreams come to life instantly and intuitively.
          </p>
        </motion.div>
        <div class="flex flex-row gap-2 items-center justify-center">
          <motion.div
            class="h-2 rounded-full bg-blue-highlight"
            @click="selectedBox = 'mission'"
            :animate="{
              width: selectedBox === 'mission' ? 50 : 10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
            :class="selectedBox === 'mission' ? '' : 'cursor-pointer'"
          ></motion.div>
          <motion.div
            class="h-2 w-20 rounded-full bg-blue-highlight"
            @click="selectedBox = 'vision'"
            :animate="{
              width: selectedBox === 'vision' ? 50 : 10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
            :class="selectedBox === 'vision' ? '' : 'cursor-pointer'"
          ></motion.div>
        </div>
      </div>
    </div>
    <motion.div
      :initial="{ opacity: 0, y: 50 }"
      :whileInView="{ opacity: 1, y: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }"
      class="flex flex-col items-start justify-center text-left gap-8"
    >
      <h1 class="text-3xl md:text-4xl font-extrabold text-blue-highlight mb-2">
        About Webtoul.com: Revolutionizing Web Creation with AI
      </h1>
      <p class="text-lg text-elegant mb-6">
        Empowering everyone to build a beautiful web presence with AI.
      </p>
    </motion.div>
  </section>
  <section>
    <div
      class="w-full h-96 bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80')] bg-fixed bg-cover bg-center bg-no-repeat"
    ></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
      <div
        class="relative overflow-hidden"
        @mouseenter="selectedBox = 'Philosophy'"
        @mouseleave="selectedBox = 'mission'"
      >
        <motion.div
          :animate="{
            x: selectedBox === 'Philosophy' ? 400 : 0,
            y: selectedBox === 'Philosophy' ? 75 : 0,
            rotate: selectedBox === 'Philosophy' ? -15 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute bg-blue-highlight h-full w-full"
          style="clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%)"
        ></motion.div>
        <motion.div
          :animate="{
            x: selectedBox === 'Philosophy' ? -400 : 0,
            y: selectedBox === 'Philosophy' ? -75 : 0,
            rotate: selectedBox === 'Philosophy' ? -15 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute bg-blue-highlight h-full w-full"
          style="clip-path: polygon(0 0, 100% 0, 10% 100%, 0 100%)"
        ></motion.div>
        <motion.div
          :animate="{
            scale: selectedBox === 'Philosophy' ? 1 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute border-2 border-section-white top-2 bottom-2 left-2 right-2"
        ></motion.div>
        <motion.div
          class="relative py-12 px-10 flex flex-col items-center justify-center gap-4"
        >
          <h2
            class="text-2xl font-bold mb-2"
            :class="
              selectedBox === 'Philosophy'
                ? 'text-blue-highlight'
                : 'text-section-white'
            "
          >
            Our Philosophy
          </h2>

          <p
            class="text-base mb-4 text-justify max-w-xl"
            :class="selectedBox === 'Philosophy' ? '' : 'text-text-elegant'"
          >
            We believe web design should be accessible, intuitive, and
            intelligent. Our team is driven by innovation, user-centricity, and
            the transformative potential of AI to simplify complex tasks and
            unlock creativity for all.
          </p>
        </motion.div>
      </div>
      <div
        class="relative overflow-hidden"
        @mouseenter="selectedBox = 'Technology'"
        @mouseleave="selectedBox = 'mission'"
      >
        <motion.div
          :animate="{
            x: selectedBox === 'Technology' ? 400 : 0,
            y: selectedBox === 'Technology' ? 75 : 0,
            rotate: selectedBox === 'Technology' ? -15 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute bg-blue-highlight h-full w-full"
          style="clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%)"
        ></motion.div>
        <motion.div
          :animate="{
            x: selectedBox === 'Technology' ? -400 : 0,
            y: selectedBox === 'Technology' ? -75 : 0,
            rotate: selectedBox === 'Technology' ? -15 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute bg-blue-highlight h-full w-full"
          style="clip-path: polygon(0 0, 100% 0, 10% 100%, 0 100%)"
        ></motion.div>
        <motion.div
          :animate="{
            scale: selectedBox === 'Technology' ? 1 : 0,
          }"
          :transition="{
            duration: 0.3,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }"
          class="absolute border-2 border-section-white top-2 bottom-2 left-2 right-2"
        ></motion.div>
        <motion.div
          class="relative py-12 px-10 flex flex-col items-center justify-center gap-4"
        >
          <h2
            class="text-2xl font-bold mb-2"
            :class="
              selectedBox === 'Technology'
                ? 'text-blue-highlight'
                : 'text-section-white'
            "
          >
            The Technology
          </h2>
          <p
            class="text-base text-justify mb-4 max-w-xl"
            :class="selectedBox === 'Technology' ? '' : 'text-text-elegant'"
          >
            Webtoul.com combines advanced AI models with the speed and
            flexibility of Vue.js. This synergy delivers a website building
            experience that’s both powerful and delightful—fast, responsive, and
            easy to use.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  <section class="py-20">
    <motion.div
      :variants="parentElement"
      initial="hidden"
      whileInView="visible"
      :inViewOptions="{ once: true }"
      class="flex flex-col items-center justify-center text-center gap-4"
    >
      <motion.h2
        :variants="childElement"
        class="text-4xl font-bold text-blue-highlight mb-2"
      >
        Why Choose<br />
        Webtoul.com?
      </motion.h2>
      <motion.ul
        :variants="childElement"
        class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl text-elegant mb-4"
      >
        <motion.li
          :variants="childElement"
          class="flex items-center gap-2 p-8 bg-blue-highlight rounded-lg relative cursor-default"
          @mouseenter="hoveredBox = 0"
          @mouseleave="selectedBox = null"
        >
          <motion.div
            class="absolute top-0 bottom-0 bg-white/20 w-10 -skew-x-12"
            :animate="{
              x: hoveredBox === 0 ? 200 : 0,
              skewX: hoveredBox === 0 ? -15 : -10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
          ></motion.div>
          <span class="material-symbols"> auto_awesome </span>
          AI website builder for everyone
        </motion.li>
        <motion.li
          :variants="childElement"
          class="flex items-center gap-2 p-8 bg-blue-highlight rounded-lg relative cursor-default"
          @mouseenter="hoveredBox = 1"
          @mouseleave="hoveredBox = null"
        >
          <motion.div
            class="absolute top-0 bottom-0 bg-white/20 w-10 -skew-x-12"
            :animate="{
              x: hoveredBox === 1 ? 200 : 0,
              skewX: hoveredBox === 1 ? -15 : -10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
          ></motion.div>
          <span class="material-symbols"> code </span>
          No-code, no hassle
        </motion.li>
        <motion.li
          :variants="childElement"
          class="flex items-center gap-2 p-8 bg-blue-highlight rounded-lg relative cursor-default"
          @mouseenter="hoveredBox = 2"
          @mouseleave="hoveredBox = null"
        >
          <motion.div
            class="absolute top-0 bottom-0 bg-white/20 w-10 -skew-x-12"
            :animate="{
              x: hoveredBox === 2 ? 200 : 0,
              skewX: hoveredBox === 2 ? -15 : -10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
          ></motion.div>
          <span class="material-symbols"> done_all </span>
          Professional results in minutes
        </motion.li>
        <motion.li
          :variants="childElement"
          class="flex items-center gap-2 p-8 bg-blue-highlight rounded-lg relative cursor-default"
          @mouseenter="hoveredBox = 3"
          @mouseleave="hoveredBox = null"
        >
          <motion.div
            class="absolute top-0 bottom-0 bg-white/20 w-10 -skew-x-12"
            :animate="{
              x: hoveredBox === 3 ? 200 : 0,
              skewX: hoveredBox === 3 ? -15 : -10,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
          ></motion.div>
          <span class="material-symbols">rocket</span>
          Always evolving technology
        </motion.li>
      </motion.ul>
    </motion.div>
  </section>
  <section class="">
    <div
      class="mx-auto max-w-7xl text-center my-20 bg-slate-dark rounded-2xl py-20 flex flex-col items-center justify-center gap-4"
    >
      <h2 class="text-4xl font-bold text-blue-highlight mb-2">
        A Glimpse into the Future
      </h2>
      <p class="text-text-elegant mb-4 max-w-xl">
        We’re constantly innovating to make web creation even smarter and more
        accessible. Join us as we redefine what’s possible in web design.
      </p>
      <p class="text-blue-highlight text-lg mb-4 max-w-xl">
        Ready to build the future, together?
      </p>
      <router-link to="/editor">
        <motion.div
          @mouseleave="hoveredBox = null"
          :animate="{
            width: hoveredBox === 'CTA' ? '400px' : '100px',
            height: hoveredBox === 'CTA' ? '60px' : '60px',
          }"
          @mouseenter="hoveredBox = 'CTA'"
          class="flex items-center justify-center gap-2 bg-blue-highlight text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow"
        >
          <img src="/favicon.svg" class="w-8 h-8" />
          <motion.p v-show="hoveredBox === 'CTA'">
            <motion.span
              v-for="(letter, index) in letters"
              :key="index"
              :custom="index"
              :variants="letterVariants"
              :animate="hoveredBox === 'CTA' ? 'visible' : 'hidden'"
            >
              {{ letter }}
            </motion.span>
          </motion.p>
        </motion.div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { delay, motion } from "motion-v";
import { ref } from "vue";
const selectedBox = ref("mission");
const hoveredBox = ref(null);

const parentElement = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};
const childElement = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
      damping: 20,
      staggerChildren: 0.2,
    },
  },
};

const word = "Start creating with Webtoul.com";
const letters = word.split("");

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.05, duration: 1 },
  }),
};
// No script needed for static content
</script>
