<template>
  <section
    class="relative mx-auto p-8 py-20 min-h-[calc(100vh-80px)] h-[calc(100vh-80px)] flex flex-col items-center gap-12 overflow-clip"
  >
    <img
      src="/showcase/hero.webp"
      class="absolute top-0 left-0 w-full h-full object-cover"
    />
    <div class="relative">
      <h1 class="text-3xl md:text-5xl font-extrabold text-blue-highlight mb-4">
        Discover What You Can Build with<br />
        <motion.span
          v-for="(letter, index) in letters"
          :key="index"
          :custom="index"
          :variants="letterVariants"
          initial="hidden"
          whileInView="visible"
          class="text-section-white text-5xl md:text-7xl"
        >
          {{ letter }}
        </motion.span>
      </h1>
      <p class="text-lg text-section-white max-w-4xl mb-6">
        Our easy to use AI-powered platform was used to create each of the
        websites you see here in a matter of minutes. Our builder adjusts to
        your vision—no coding, no delays—from elegant portfolios to robust
        commercial websites.
      </p>
      <!-- scroll to next section down arrow -->
      <div class="flex justify-center">
        <a
          href="#examples"
          class="text-blue-highlight mt-20 text-3xl hover:text-blue-400 scroll-smooth"
        >
          <motion.span
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: [0.2, 1, 0.2], y: [0, 20, 0] }"
            :transition="{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }"
            :whileHover="{ scale: 1.2 }"
            class="material-symbols text-4xl"
            >arrow_downward</motion.span
          >
        </a>
      </div>
    </div>
    <!-- <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <img
        src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
        alt="Portfolio Example"
        class="rounded-lg shadow-lg h-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
        alt="Business Example"
        class="rounded-lg shadow-lg pt-32 h-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        alt="Blog Example"
        class="rounded-lg shadow-lg pt-32 h-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=400&q=80"
        alt="Storefront Example"
        class="rounded-lg shadow-lg h-full object-cover"
      />
    </div> -->
  </section>
  <section id="examples" class="my-20 md:my-40 p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-24">
      <!-- Portfolio Example -->
      <div
        class="relative h-96 bg-blue-900 rounded-xl shadow p-6 flex flex-col items-center text-center"
        @mouseenter="hoveredBox = '1'"
        @mouseleave="hoveredBox = null"
      >
        <animate-presence>
          <motion.img
            src="/showcase/portfolio.webp"
            alt="Portfolio Example"
            class="absolute -top-20 rounded-lg"
            :animate="{
              height: hoveredBox === '1' ? '75%' : '0%',
              width: hoveredBox === '1' ? '80%' : '0%',
            }"
            style="transform-origin: center center"
          />
          <motion.img
            class="material-symbols text-3xl text-blue-highlight mb-2"
            src="/icons/briefcase.svg"
          />
          <motion.h2
            :animate="{
              x: hoveredBox === '1' ? 15 : 0,
              y: hoveredBox === '1' ? 180 : 0,
            }"
            :transition="{ duration: 0.3 }"
            class="text-lg font-bold text-blue-highlight mb-1"
          >
            Sleek Portfolios for Creatives
          </motion.h2>
          <motion.p
            :exit="{
              opacity: 0,
              x: -50,
            }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '1'"
            class="text-section-white mb-2"
          >
            Showcase your work with style. Perfect for designers, photographers,
            and artists.
          </motion.p>
          <motion.p
            :exit="{
              opacity: 0,
              x: 50,
            }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '1'"
            class="text-section-white text-sm"
          >
            AI Design Assistant for stunning galleries, AI Content Crafter for
            compelling bios and project descriptions.
          </motion.p>
          <motion.span
            :animate="{
              x: hoveredBox === '1' ? 0 : 0,
              y: hoveredBox === '1' ? 200 : 0,
              opacity: hoveredBox === '1' ? 1 : 0,
            }"
            :transition="{ duration: 0.3, delay: 0.3 }"
            class="text-blue-highlight font-semibold"
          >
            Imagine your work showcased like this.
          </motion.span>
        </animate-presence>
      </div>
      <!-- Business Example -->
      <div
        class="relative h-96 bg-blue-900 rounded-xl shadow p-6 flex flex-col items-center text-center"
        @mouseenter="hoveredBox = '2'"
        @mouseleave="hoveredBox = null"
      >
        <animate-presence>
          <motion.img
            src="/showcase/business.webp"
            alt="Business Example"
            class="absolute -top-20 rounded-lg"
            :animate="{
              height: hoveredBox === '2' ? '75%' : '0%',
              width: hoveredBox === '2' ? '80%' : '0%',
            }"
            style="transform-origin: center center"
          />
          <motion.img
            src="/icons/shop.svg"
            class="material-symbols text-3xl text-blue-highlight mb-2"
          />
          <motion.h2
            :animate="{
              x: hoveredBox === '2' ? 15 : 0,
              y: hoveredBox === '2' ? 180 : 0,
            }"
            :transition="{ duration: 0.3 }"
            class="text-lg font-bold text-blue-highlight mb-1"
          >
            Local Business Hub
          </motion.h2>
          <motion.p
            :exit="{ opacity: 0, x: -50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '2'"
            class="text-section-white mb-2"
          >
            Connect with your community and grow your business online.
          </motion.p>
          <motion.p
            :exit="{ opacity: 0, x: 50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '2'"
            class="text-section-white text-sm"
          >
            AI Website Architect for tailored layouts, AI Content Crafter for
            service descriptions and CTAs.
          </motion.p>
          <motion.span
            :animate="{
              x: hoveredBox === '2' ? 0 : 0,
              y: hoveredBox === '2' ? 200 : 0,
              opacity: hoveredBox === '2' ? 1 : 0,
            }"
            :transition="{ duration: 0.3, delay: 0.3 }"
            class="text-blue-highlight font-semibold"
          >
            Ready to build your business presence?
          </motion.span>
        </animate-presence>
      </div>

      <!-- Blog Example -->
      <div
        class="relative h-96 bg-blue-900 rounded-xl shadow p-6 flex flex-col items-center text-center"
        @mouseenter="hoveredBox = '3'"
        @mouseleave="hoveredBox = null"
      >
        <animate-presence>
          <motion.img
            src="/showcase/blog.webp"
            alt="Blog Example"
            class="absolute -top-20 rounded-lg"
            :animate="{
              height: hoveredBox === '3' ? '75%' : '0%',
              width: hoveredBox === '3' ? '80%' : '0%',
            }"
            style="transform-origin: center center"
          />
          <motion.img
            src="/icons/blog.svg"
            class="material-symbols text-3xl text-blue-highlight mb-2"
          />
          <motion.h2
            :animate="{
              x: hoveredBox === '3' ? 15 : 0,
              y: hoveredBox === '3' ? 180 : 0,
            }"
            :transition="{ duration: 0.3 }"
            class="text-lg font-bold text-blue-highlight mb-1"
          >
            Dynamic Blog
          </motion.h2>
          <motion.p
            :exit="{ opacity: 0, x: -50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '3'"
            class="text-section-white mb-2"
          >
            Share your voice and ideas with the world. Launch a beautiful,
            SEO-friendly blog in minutes.
          </motion.p>
          <motion.p
            :exit="{ opacity: 0, x: 50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '3'"
            class="text-section-white text-sm"
          >
            AI Content Crafter for blog post ideas and headlines, AI Design
            Assistant for readability and style.
          </motion.p>
          <motion.span
            :animate="{
              x: hoveredBox === '3' ? 0 : 0,
              y: hoveredBox === '3' ? 200 : 0,
              opacity: hoveredBox === '3' ? 1 : 0,
            }"
            :transition="{ duration: 0.3, delay: 0.3 }"
            class="text-blue-highlight font-semibold"
          >
            Start your blogging journey today.
          </motion.span>
        </animate-presence>
      </div>

      <!-- Storefront Example -->
      <div
        class="relative h-96 bg-blue-900 rounded-xl shadow p-6 flex flex-col items-center text-center"
        @mouseenter="hoveredBox = '4'"
        @mouseleave="hoveredBox = null"
      >
        <animate-presence>
          <motion.img
            src="/showcase/store.webp"
            alt="Storefront Example"
            class="absolute -top-20 rounded-lg"
            :animate="{
              height: hoveredBox === '4' ? '75%' : '0%',
              width: hoveredBox === '4' ? '80%' : '0%',
            }"
            style="transform-origin: center center"
          />
          <motion.img
            src="/icons/cart.svg"
            class="material-symbols text-3xl text-blue-highlight mb-2"
          />
          <motion.h2
            :animate="{
              x: hoveredBox === '4' ? 15 : 0,
              y: hoveredBox === '4' ? 180 : 0,
            }"
            :transition="{ duration: 0.3 }"
            class="text-lg font-bold text-blue-highlight mb-1"
          >
            Online Storefront Teaser
          </motion.h2>
          <motion.p
            :exit="{ opacity: 0, x: -50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '4'"
            class="text-section-white mb-2"
          >
            Showcase your products and drive sales with a visually appealing,
            conversion-optimized storefront.
          </motion.p>
          <motion.p
            :exit="{ opacity: 0, x: 50 }"
            :transition="{ duration: 0.3 }"
            v-if="hoveredBox != '4'"
            class="text-section-white text-sm"
          >
            AI Website Architect for product grids, AI Content Crafter for
            product descriptions and calls to action.
          </motion.p>
          <motion.span
            :animate="{
              x: hoveredBox === '4' ? 0 : 0,
              y: hoveredBox === '4' ? 200 : 0,
              opacity: hoveredBox === '4' ? 1 : 0,
            }"
            :transition="{ duration: 0.3, delay: 0.3 }"
            class="text-blue-highlight font-semibold"
          >
            Picture your shop online—effortlessly.
          </motion.span>
        </animate-presence>
      </div>
    </div>
  </section>
  <section
    class="bg-slate-dark p-12 py-28 rounded-3xl my-20 md:mx-16 flex flex-col items-center text-center"
    @mouseenter="hoveredBox = 'CTA'"
    @mouseleave="hoveredBox = null"
  >
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
    >
      <img src="/favicon.svg" class="w-12 h-12" />
      <h2 class="text-3xl font-bold text-blue-highlight mb-2">
        Your View, powered by AI
      </h2>
    </div>
    <p class="text-section-white max-w-4xl mb-4">
      We at
      <motion.span
        :initail="{ scale: 1 }"
        :animate="{
          color: ['#2164ee', '#fff'],
          opacity: [0.8, 1],
        }"
        :transition="{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }"
        :whileHover="{ scale: 1.2 }"
        class="cursor-pointer"
      >
        <router-link to="/"> Webtoul.com</router-link></motion.span
      >
      quickly transform your ideas into stunningly designed, fully functional
      websites. Our AI adjusts to meet your specific needs, whether you're
      starting a business, displaying a portfolio, creating a blog, or creating
      something completely unique.
    </p>
    <router-link to="/editor" class="">
      <motion.p
        :initial="{ opacity: 0, y: 20 }"
        :animate="{
          y: hoveredBox === 'CTA' ? 0 : 20,
          opacity: hoveredBox === 'CTA' ? 1 : 0,
        }"
        :whileHover="{ scale: 1.05 }"
        class="inline-block bg-blue-highlight text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700"
      >
        Motivated? It's Your Turn Now
      </motion.p>
    </router-link>
  </section>
</template>
, hover

<script setup>
import { motion, AnimatePresence, animate } from "motion-v";
import { ref } from "vue";

const word = "webtoul.com"; // The word to animate
const letters = word.split(""); // Convert word into an array of letters
const hoveredBox = ref(null);

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.5 },
  }),
};

// No script needed for static content
</script>
