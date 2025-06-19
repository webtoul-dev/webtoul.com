<template>
  <section
    ref="heroSection"
    class="relative mx-auto min-h-screen p-8 bg-gradient-to-r from-blue-50 to-blue-200 shadow flex flex-col items-center justify-center text-center gap-12"
  >
    <motion.img
      src="/learn/hero.webp"
      alt="AI Website Builder"
      class="absolute top-0 w-full h-full object-cover"
      :style="{
        x: xValue,
        opacity: opacityValue,
      }"
    />
    <div class="relative flex flex-col items-center justify-center">
      <motion.img
        src="/favicon.svg"
        alt="WebToul"
        class="w-20 h-20 border p-4 rounded-lg bg-white/25 backdrop-blur-sm"
        :animate="{
          scale: [1, 1.1, 1, 1.1, 1],
        }"
        :transition="{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }"
      />
      <h1
        class="text-4xl font-extrabold text-blue-highlight mt-4 flex items-center gap-2"
      >
        Master Webtoul.com
      </h1>
      <h2 class="text-2xl font-bold text-blue-highlight my-4">
        Your Complete Guide to AI-Powered Website Creation
      </h2>
      <p class="text-lg text-section-white mb-6 max-w-3xl">
        Welcome to your go-to resource center! Whether you're launching your
        first site or refining your web strategy, our learning hub is designed
        to help you harness the full power of Webtoul.com's AI website builder.
        From step-by-step tutorials to expert tips, you’ll discover how to build
        smarter, design faster, and grow stronger—with no technical skills
        required. Empower Your Creativity. Simplify Your Process. Maximize Your
        Impact. Explore the tools. Learn the techniques. Create with confidence.
      </p>
    </div>
  </section>
  <motion.section
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 md:py-40"
    :variants="parentVarient"
    initial="hidden"
    whileInView="visible"
    :inViewOptions="{ once: true }"
  >
    <motion.div
      :variants="childVarient"
      v-for="card in guideCards"
      :key="card.id"
      class="relative rounded-xl shadow flex flex-col gap-8 overflow-hidden items-center min-h-60"
      @mouseenter="hoveredCard = card.id"
      @mouseleave="hoveredCard = null"
    >
      <motion.div
        class="absolute left-0 w-full h-full bg-blue-highlight rounded-xl"
        :animate="{
          scale: hoveredCard === card.id ? 1 : 0,
        }"
        :transition="{ duration: 0.3 }"
        style="transform-origin: center center"
      ></motion.div>
      <div class="relative p-8 flex flex-col items-center">
        <h2
          class="text-xl font-bold mb-1 flex items-baseline gap-1"
          :class="
            hoveredCard === card.id ? 'text-white' : 'text-blue-highlight'
          "
        >
          <span class="material-symbols text-base">{{ card.icon }}</span>
          {{ card.title_card }}
        </h2>
        <p class="text-elegant mb-2 max-w-60">{{ card.desc }}</p>
        <div
          class="text-sm w-fit flex items-center gap-2 text-center p-2 rounded-xl bg-section-white shadow-sm"
          :class="
            hoveredCard === card.id
              ? 'shadow-zinc-900'
              : 'shadow-blue-highlight'
          "
        >
          {{ card.button }}
          <router-link
            :to="'/learn/guide/' + card.id"
            class="inline-block bg-blue-highlight text-section-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-700 text-nowrap"
          >
            View Guide
          </router-link>
        </div>
      </div>
    </motion.div>
  </motion.section>

  <section
    class="bg-slate-dark p-12 py-28 rounded-3xl my-20 md:mx-16 flex flex-col items-center text-center"
  >
    <h2 class="text-3xl font-bold text-blue-highlight mb-2">
      Ongoing Education with Webtoul.com
    </h2>
    <p class="text-white mb-4">
      You can change as AI does. To help you remain ahead, we're always adding
      new guidelines, advice, and best practices to our resource library.
      There's always more to learn, whether you're honing your creative
      abilities or investigating innovative AI capabilities.
    </p>
    <p
      class="text-white flex md:flex-row flex-col items-center gap-12"
      @mouseenter="hoveredBox = 'CTA'"
      @mouseleave="hoveredBox = null"
    >
      Are You All Set to Go Further?
      <span class="relative">
        <router-link to="/editor">
          <motion.div
            class="absolute w-full h-full bg-blue-800 rounded-full"
            :animate="{
              scale: hoveredBox === 'CTA' ? 1 : 0,
            }"
          ></motion.div>
          <p
            class="relative inline-block text-section-white px-8 py-3 rounded-full font-light shadow"
          >
            Unlock AI web creation's full potential.
          </p>
        </router-link>
      </span>
    </p>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useTransform,
  useSpring,
  animate,
  scale,
} from "motion-v";
import { ref } from "vue";
import guides from "../data/guides.js";

const guideCards = guides;
const router = useRouter();
const section = ref(null);
const hoveredCard = ref(null);
const hoveredBox = ref(null);

const { scrollYProgress } = useScroll({
  target: section,
  offset: ["start end", "end end"],
});
const xValue = useSpring(
  useTransform(scrollYProgress, [0.5, 0.9], [0, -1500]),
  {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  }
);
const opacityValue = useSpring(
  useTransform(scrollYProgress, [0.5, 0.8], [1, 0]),
  {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  }
);
const parentVarient = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};
const childVarient = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

useMotionValueEvent(scrollYProgress, "change", (value) => {});

function goToGuide(guideId) {
  router.push({ name: "Guide", params: { id: guideId } });
}
</script>
