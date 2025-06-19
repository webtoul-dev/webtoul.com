<template>
  <section
    class="relative mx-auto min-h-[calc(100vh-80px)] p-8 bg-section-white flex flex-col items-start justify-center text-left gap-8"
  >
    <motion.img
      :initial="{ opacity: 0, x: -50 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }"
      src="/features/hero.webp"
      alt="AI Website Builder"
      class="md:hidden absolute left-0 w-full h-full rounded-l-lg object-cover"
    />
    <motion.img
      :initial="{ opacity: 0, x: -50 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }"
      src="/features/hero_left.webp"
      alt="AI Website Builder"
      class="hidden md:block absolute left-0 w-1/2 h-full rounded-l-lg object-cover object-right"
    />
    <motion.img
      :initial="{ opacity: 0, x: 50 }"
      :whileInView="{ opacity: 1, x: 0 }"
      :inViewOptions="{ once: true }"
      :transition="{
        duration: 0.2,
        ease: 'easeInOut',
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }"
      src="/features/hero_right.webp"
      alt="AI Website Builder"
      class="hidden md:block absolute right-0 w-1/2 h-full rounded-r-lg object-cover object-left"
    />
    <div class="relative z-1 max-w-4xl">
      <h1 class="text-4xl font-extrabold text-blue-highlight mb-4">
        Unlock a Smarter Way to Build with Webtoul.com
      </h1>
      <p class="text-lg text-section-white max-w-3xl text-justify mb-6">
        Web design doesn’t have to be complex or time-consuming. Say goodbye to
        rigid templates, coding headaches, and long development cycles.
      </p>
      <p class="text-lg text-section-white max-w-3xl text-justify mb-6">
        With Webtoul.com, you’re empowered by cutting-edge AI tools that
        simplify every step—from layout to content creation. Whether you're a
        small business owner, freelancer, or entrepreneur, our platform helps
        you build beautiful, responsive websites in just minutes—no technical
        expertise required.
      </p>
      <h3 class="text-xl font-semibold max-w-3xl text-blue-highlight mb-4">
        Experience the future of web creation—faster, smarter, and easier.
      </h3>
    </div>
  </section>
  <section class="flex flex-col gap-10 md:p-8 py-20">
    <!-- Feature 1 -->
    <motion.div
      :variants="parentVarientUp"
      initial="hidden"
      whileInView="show"
      :inViewOptions="{ once: true }"
      class="grid grid-cols-1 md:grid-cols-2 items-center border rounded-2xl md:p-20 gap-8"
      @mouseenter="hoveredSection = 'Feature_1'"
      @mouseleave="hoveredSection = null"
    >
      <motion.div
        :variants="childVarient"
        class="relative flex flex-col items-start"
      >
        <motion.div
          :initial="{ width: '1%', borderRadius: '10px 0 0 10px' }"
          :animate="{
            width: hoveredSection === 'Feature_1' ? '100%' : '1%',
            borderRadius:
              hoveredSection === 'Feature_1' ? '10px' : '10px 0 0 10px',
          }"
          :transition="{ duration: 0.4 }"
          class="bg-blue-highlight w-1 h-full absolute top-0 left-0"
        ></motion.div>
        <div class="p-6 relative flex flex-col items-start">
          <h2
            class="text-3xl font-bold mb-2"
            :class="
              hoveredSection === 'Feature_1'
                ? 'text-blue-50'
                : 'text-blue-highlight'
            "
          >
            Intelligent Foundations
          </h2>
          <h3 class="text-xl font-light mb-4">
            Let AI Draft Your Perfect Layout
          </h3>
          <p class="text-elegant mb-2 text-justify">
            Simply share a few details—your industry, website goals, and style
            preferences—and watch our AI generate a fully responsive,
            ready-to-launch website structure instantly. Forget the hassle of
            searching templates or manual adjustments.
          </p>
          <ul
            class="text-left grid grid-cols-2 gap-x-2 gap-y-8 text-zinc-muted mb-2 py-8"
          >
            <li class="flex items-start gap-2">
              <span
                class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center"
                :class="
                  hoveredSection === 'Feature_1'
                    ? 'bg-blue-50 text-blue-highlight'
                    : 'bg-blue-highlight text-section-white'
                "
              >
                check_circle_outline </span
              >Launch in minutes, not days
            </li>
            <li class="flex items-start gap-2">
              <span
                class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center"
                :class="
                  hoveredSection === 'Feature_1'
                    ? 'bg-blue-50 text-blue-highlight'
                    : 'bg-blue-highlight text-section-white'
                "
              >
                check_circle_outline </span
              >Professionally designed layouts
            </li>
            <li class="flex items-start gap-2">
              <span
                class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center"
                :class="
                  hoveredSection === 'Feature_1'
                    ? 'bg-blue-50 text-blue-highlight'
                    : 'bg-blue-highlight text-section-white'
                "
              >
                check_circle_outline </span
              >Mobile-ready by default
            </li>
            <li class="flex items-start gap-2">
              <span
                class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center"
                :class="
                  hoveredSection === 'Feature_1'
                    ? 'bg-blue-50 text-blue-highlight'
                    : 'bg-blue-highlight text-section-white'
                "
              >
                check_circle_outline </span
              >Focus on your vision, not the technicalities
            </li>
          </ul>
          <span
            class="font-semibold"
            :class="
              hoveredSection === 'Feature_1'
                ? 'text-blue-50'
                : 'text-blue-highlight'
            "
          >
            Ready to see your ideas take shape?
          </span>
        </div>
      </motion.div>
      <motion.div :variants="childVarient" class="w-full h-full relative">
        <motion.img
          src="/features/feature_1.webp"
          alt="AI Layout Wireframe"
          class="w-full h-full object-cover rounded-xl shadow"
          :animate="{
            transition: { duration: 0.3 },
          }"
        />
        <motion.div
          class="absolute top-0 left-0 w-full h-full border-blue-highlight rounded-xl"
          :animate="{
            width: hoveredSection === 'Feature_1' ? '0%' : '100%',
            backdropFilter:
              hoveredSection === 'Feature_1'
                ? 'grayscale(0%)'
                : 'grayscale(80%)',
            transition: { duration: 1 },
          }"
        ></motion.div>
      </motion.div>
    </motion.div>
  </section>
  <!-- Feature 2 -->
  <section class="flex flex-col gap-10 md:p-8 py-0">
    <motion.div
      :variants="parentVarientLeft"
      initial="hidden"
      whileInView="show"
      :inViewOptions="{ once: true }"
      class="grid grid-cols-1 md:grid-cols-2 bg-zinc-muted p-8 gap-8"
      @mouseenter="hoveredSection = 'Feature_2'"
      @mouseleave="hoveredSection = null"
    >
      <motion.div
        :variants="childVarient"
        class="py-12 flex flex-col items-start text-left"
      >
        <div classs="relative">
          <h2 class="text-3xl font-bold text-blue-highlight mb-2">
            Words That Work
          </h2>
          <h3 class="text-2xl font-light text-section-white mb-2">
            AI-Powered Content That Converts
          </h3>
          <motion.div
            class="w-full h-1 bg-blue-highlight mb-4 rounded-full"
            :animate="{
              scaleX: hoveredSection === 'Feature_2' ? 1 : 0,
              transition: { duration: 0.3 },
            }"
          ></motion.div>
        </div>
        <p class="text-section-white mb-2">
          Struggling to find the right words? Our AI crafts compelling
          headlines, persuasive product descriptions, engaging calls to action,
          and blog ideas tailored specifically to your business and audience.
        </p>
        <ul class="text-section-white mb-2">
          <li class="flex items-start gap-4">
            <span class="material-symbols">start</span> writer’s block
          </li>
          <li class="flex items-start gap-4">
            <span class="material-symbols">start</span> Save hours on
            copywriting
          </li>
          <li class="flex items-start gap-4">
            <span class="material-symbols">start</span> Generate SEO-friendly,
            conversion-driven content
          </li>
          <li class="flex items-start gap-4">
            <span class="material-symbols">start</span> Maintain a consistent,
            professional brand voice
          </li>
        </ul>
        <span class="text-blue-highlight font-semibold">
          Let AI handle your messaging—so you can focus on growing your
          business.
        </span>
      </motion.div>
      <motion.div :variants="childVarient" class="flex-1 flex justify-center">
        <img
          src="/features/feature_2.webp"
          alt="AI Content Generation"
          class="w-full h-full object-cover rounded"
        />
      </motion.div>
    </motion.div>
  </section>
  <!-- Feature 3 -->
  <section class="flex flex-col gap-10 md:p-8 py-0">
    <motion.div
      :variants="parentVarientRight"
      initial="hidden"
      whileInView="show"
      :inViewOptions="{ once: true }"
      class="grid grid-cols-1 md:grid-cols-2 items-center bg-zinc-900 p-8 gap-8"
      @mouseenter="hoveredSection = 'Feature_3'"
      @mouseleave="hoveredSection = null"
    >
      <motion.div
        :variants="childVarient"
        class="py-20 flex flex-col items-start text-left"
      >
        <div>
          <h3 class="text-2xl font-light text-section-white mb-2">
            Aesthetic Brilliance, AI-Optimized
          </h3>
          <h2 class="text-4xl font-bold text-blue-highlight">
            Your Personal Design Guru
          </h2>
          <motion.div
            class="w-full h-1 bg-blue-highlight mb-4 rounded-full"
            :animate="{
              scaleX: hoveredSection === 'Feature_3' ? 1 : 0,
              transition: { duration: 0.3 },
            }"
          ></motion.div>
        </div>
        <p class="text-elegant text-justify text-section-white mb-2">
          No design experience? No problem. Our AI recommends harmonious color
          palettes, font pairings, and image styles while optimizing layout
          spacing for a sleek, cohesive appearance. Plus, easily access
          royalty-free image libraries for stunning visuals at your fingertips.
        </p>
        <ul class="text-section-white grid grid-cols-2 gap-x-2 gap-y-4 my-2">
          <li class="flex items-start gap-4">
            <span
              class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center bg-blue-highlight text-section-white"
            >
              check_circle_outline </span
            >Achieve professional, polished designs effortlessly
          </li>
          <li class="flex items-start gap-4">
            <span
              class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center bg-blue-highlight text-section-white"
            >
              check_circle_outline </span
            >Ensure brand consistency across every page
          </li>
          <li class="flex items-start gap-4">
            <span
              class="material-symbols min-w-8 min-h-8 rounded flex items-center justify-center bg-blue-highlight text-section-white"
            >
              check_circle_outline </span
            >Create visually engaging, user-friendly interfaces
          </li>
        </ul>
        <span class="text-blue-highlight font-semibold">
          Experience design confidence—no expertise required.
        </span>
      </motion.div>
      <motion.div :variants="childVarient" class="flex-1 flex justify-center">
        <motion.img
          src="/features/feature_3.webp"
          alt="AI Design Assistant"
          class="w-full h-full rounded shadow"
          :animate="{
            rotateZ: hoveredSection === 'Feature_3' ? 0 : 1,
          }"
          :transition="{
            duration: 0.5,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }"
          style="transform-origin: bottom center"
        />
      </motion.div>
    </motion.div>
  </section>
  <!-- Feature 4 -->
  <section class="flex flex-col gap-10 md:p-8 py-0">
    <motion.div
      :variants="parentVarientUp"
      initial="hidden"
      whileInView="show"
      :inViewOptions="{ once: true }"
      class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-blue-highlight to-15% md:to-50% to-zinc-900 p-8"
      @mouseenter="hoveredSection = 'Feature_4'"
      @mouseleave="hoveredSection = null"
    >
      <motion.div :variants="childVarient" class="flex-1 flex justify-center">
        <img
          src="/features/feature_4.webp"
          alt="Vue.js Performance"
          class="w-full h-full object-cover rounded shadow relative"
        />
        <motion.div
          class="absolute top-0 left-0 w-full h-full rounded-lg border-blue-highlight"
          :animate="{
            width: hoveredSection === 'Feature_4' ? '0%' : '100%',
            backdropFilter:
              hoveredSection === 'Feature_4' ? 'sepia(0%)' : 'sepia(90%)',
            transition: {
              duration: 1,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 400,
              damping: 50,
            },
          }"
        ></motion.div>
      </motion.div>
      <motion.div
        :variants="childVarient"
        class="flex flex-col items-start text-left"
      >
        <div>
          <h3 class="text-4xl font-light text-section-white mb-2">
            Seamless Creation
          </h3>
          <h2 class="text-3xl font-bold text-blue-highlight">
            Experience the Fluidity of AI
          </h2>
          <motion.div
            class="w-full h-1 bg-blue-highlight mb-4 rounded-full"
            :animate="{
              scaleX: hoveredSection === 'Feature_4' ? 1 : 0,
              transition: { duration: 0.3 },
            }"
            style="transform-origin: left"
          ></motion.div>
        </div>
        <p class="text-section-white mb-2">
          Webtoul.com delivers a fast, responsive, and intuitive
          website-building experience. Enjoy real-time editing, instant
          previews, and a modern interface that makes site creation smooth and
          enjoyable.
        </p>
        <ul class="text-section-white mb-2 flex flex-col gap-2">
          <li class="flex items-start gap-4">
            <span class="material-symbols text-blue-highlight">
              check_circle_outline </span
            >Smooth, lag-free editing
          </li>
          <li class="flex items-start gap-4">
            <span class="material-symbols text-blue-highlight">
              check_circle_outline </span
            >Instant feedback and previews
          </li>
          <li class="flex items-start gap-4">
            <span class="material-symbols text-blue-highlight">
              check_circle_outline </span
            >Enjoyable, modern building process
          </li>
        </ul>
        <span class="text-blue-highlight font-semibold">
          Feel the difference of next-generation web technology.
        </span>
      </motion.div>
    </motion.div>
  </section>
  <section
    class="bg-slate-dark p-12 py-28 rounded-3xl my-20 md:mx-16 flex flex-col items-center text-center"
  >
    <div class="text-center relative">
      <h2 class="text-3xl font-extrabold text-blue-highlight my-4">
        The Combined Power of AI and development
      </h2>
      <p class="text-lg text-elegant mb-8 text-section-white">
        At Webtoul.com, advanced AI and cutting-edge web technologies unite to
        transform website creation into an effortless, effective, and enjoyable
        process tailored for businesses of all sizes.
      </p>
      <router-link
        to="/editor"
        class="relative inline-block bg-blue-highlight text-section-white rounded-full text-lg font-semibold shadow"
        @mouseenter="hoveredItem = 'CTA_Button'"
        @mouseleave="hoveredItem = null"
      >
        <motion.div
          :initial="{ opacity: 0, width: '100%', border: 'none' }"
          :animate="{
            opacity: 1,
            width: hoveredItem === 'CTA_Button' ? '37%' : '100%',
            boxShadow:
              hoveredItem === 'CTA_Button'
                ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                : 'none',
            border: hoveredItem === 'CTA_Button' ? '2px solid #fff' : 'none',
          }"
          :transition="{
            duration: 0.2,
            stiffness: 400,
            damping: 50,
            type: 'spring',
          }"
          class="absolute bottom-0 right-0 w-full h-full rounded-xl md:rounded-full bg-blue-950 origin-right"
        ></motion.div>
        <p class="relative px-8 py-3 flex flex-col md:flex-row gap-8">
          Ready to Experience AI-Powered Web Design?
          <span> Start Building for Free!</span>
        </p>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { animate, hover, stagger } from "motion-v";
import { ref } from "vue";
import { motion } from "motion-v";

const hoveredItem = ref(null);
const hoveredSection = ref(null);

const parentVarientUp = {
  hidden: { opacity: 0, y: 250 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 200,
      damping: 30,
      staggerChildren: 0.3,
      // when: "beforeChildren",
    },
  },
};
const parentVarientLeft = {
  hidden: { opacity: 0, x: -250 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 200,
      damping: 30,
      staggerChildren: 0.3,
      // when: "beforeChildren",
    },
  },
};
const parentVarientRight = {
  hidden: { opacity: 0, x: 250 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 200,
      damping: 30,
      staggerChildren: 0.3,
      // when: "beforeChildren",
    },
  },
};
const childVarient = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: [0, 0.5, 1],
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};
// No script needed for static content
</script>
