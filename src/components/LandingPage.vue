<template>
  <section
    ref="heroImage"
    class="relative flex flex-col items-center justify-center h-screen py-12 space-y-8 bg-section-white"
  >
    <div class="absolute w-full h-screen">
      <span
        v-for="(icon, index) in icons"
        :key="index"
        class="material-symbols absolute text-blue-highlight"
        :style="iconStyles[index]"
      >
        {{ icon }}
      </span>
    </div>
    <div
      class="relative flex flex-col items-center justify-center w-full h-full"
    >
      <!-- Hero Section -->

      <h1
        class="text-5xl md:text-7xl font-extrabold text-blue-highlight mb-4 flex items-baseline gap-2"
      >
        <span class="material-symbols align-middle">auto_awesome</span>
        AI- Website Creator<br />
        for All
      </h1>
      <p class="text-lg md:text-xl max-w-2xl text-elegant mb-6">
        Rapid Build The Customised and Present Website With AI Without
        Coding.For Your Vision, To Your Own World.
      </p>
      <router-link to="/editor">
        <motion.div
          class="bg-gradient-to-r from-blue-highlight to-blue-600 text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:from-blue-500 hover:to-blue-700 flex items-center gap-2 relative group"
          :initial="{ scale: 1 }"
          :animate="
            rocketHover
              ? { scale: 1.04, boxShadow: '0 8px 32px 0 #60a5fa55' }
              : { scale: 1, boxShadow: '0 0 0 0 #60a5fa00' }
          "
          :transition="{
            type: 'spring',
            stiffness: 300,
            damping: 22,
            mass: 1.2,
          }"
          @mouseenter="rocketHover = true"
          @mouseleave="rocketHover = false"
          style="isolation: isolate"
        >
          <span class="relative flex items-center justify-center w-8 h-8 mr-1">
            <motion.span
              class="material-symbols align-middle text-xl"
              :initial="{ y: 0, rotate: 0, color: '#fff', scale: 1 }"
              :animate="
                rocketHover
                  ? { y: -35, rotate: -45, color: '#2164ee', scale: 1.18 }
                  : { y: 0, rotate: 0, color: '#fff', scale: 1 }
              "
              :transition="{ type: 'spring', stiffness: 100, damping: 50 }"
              style="display: inline-block; will-change: transform; z-index: 2"
              >rocket_launch</motion.span
            >
            <motion.span
              v-if="rocketHover"
              class="absolute left-1/2 top-1/2 pointer-events-none select-none"
              :initial="{ opacity: 0, scaleY: 0.5, y: 8 }"
              :animate="{ opacity: 0.5, scaleY: 1, y: 12 }"
              :exit="{ opacity: 0, scaleY: 0.5, y: 8 }"
              :transition="{ duration: 0.4 }"
              style="
                width: 18px;
                height: 12px;
                border-radius: 50%;
                background: radial-gradient(
                  ellipse at center,
                  #bae6fd 60%,
                  transparent 100%
                );
                filter: blur(2px);
                z-index: 1;
                left: 50%;
                top: 80%;
                transform: translate(-50%, 0);
              "
            ></motion.span>
          </span>
          <span class="relative z-10">Attempt The Development</span>
        </motion.div>
      </router-link>
      <motion.img
        src="/home/hero.webp"
        alt="AI Website Builder"
        class="w-auto max-h-96 rounded-lg shadow-lg mt-6"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
        :style="{ y: imageY }"
      />
    </div>
  </section>

  <!-- Partners Section -->
  <section class="bg-section-white md:my-40 p-8 flex flex-col items-center">
    <h2
      class="text-3xl md:text-5xl font-semibold text-blue-highlight mb-6 flex items-center gap-2 pb-10"
    >
      <span class="material-symbols text-2xl md:text-4xl align-middle"
        >handshake</span
      >
      Our Partners
    </h2>
    <div
      class="flex flex-wrap justify-around gap-8 overflow-X-hidden items-center w-full"
    >
      <a
        v-for="p in partners"
        :key="p.name"
        :href="p.url"
        target="_blank"
        class="relative group flex flex-col items-center justify-center cursor-pointer"
        @mouseenter="hoveredIndex = partners.indexOf(p)"
        @mouseleave="hoveredIndex = null"
      >
        <img :src="p.logo" :alt="p.name" class="h-12 mb-2" />
        <!-- add a popover when hovering metnioning the company name -->
        <motion.div
          class="absolute -top-14 left-0 right-0 mx-auto bg-white text-blue-highlight text-sm font-thin px-4 py-2 shadow w-fit"
          :initial="{ opacity: 0, y: 10 }"
          :animate="
            hoveredIndex === partners.indexOf(p)
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          "
          :transition="{ duration: 0.4 }"
          style="z-index: 10; pointer-events: none"
        >
          {{ p.name }}
        </motion.div>
      </a>
    </div>
  </section>
  <!-- Pricing Section -->
  <section class="bg-section-white my-10 md:my-20 p-8 flex flex-col items-left">
    <h2
      class="text-4xl font-bold text-blue-highlight mb-6 flex flex-col items-center gap-2"
    >
      Select the Right Business Plan
    </h2>
    <p class="text-elegant mb-6">
      Start creating your expert website for free, or subscribe to the Pro plan
      for more features, personalized branding, and efficient, completely
      persistent websites. solutions that are scalable and made to expand with
      your company.
    </p>
    <div class="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-0">
      <div
        v-for="plan in pricing"
        :key="plan.name"
        class="border-1 border-blue-highlight text-zinc-muted shadow max-w-96 shadow-blue-highlight p-12 flex flex-col justify-around items-center"
        :class="
          pricing.indexOf(plan) === 1
            ? 'bg-blue-highlight py-20 w-[400px] text-white'
            : 'py-16'
        "
      >
        <h3
          class="font-bold text-blue-highlight text-2xl"
          :class="pricing.indexOf(plan) === 1 ? 'text-white' : ''"
        >
          {{ plan.name }}
        </h3>
        <div
          class="text-xl font-extrabold my-2"
          :class="pricing.indexOf(plan) === 1 ? 'text-white line-through' : ''"
        >
          {{ plan.price }}
        </div>
        <div
          v-if="pricing.indexOf(plan) === 1"
          class="text-4xl font-extrabold text-white flex flex-col items-center justify-center"
        >
          $15.99
          <span class="text-sm"> For the first month </span>
        </div>
        <ul
          class="text-left mb-4 flex flex-col gap-2 py-4"
          :class="
            pricing.indexOf(plan) === 1 ? 'text-white' : 'text-zinc-muted'
          "
        >
          <li v-for="f in plan.features" :key="f">
            <span
              class="material-symbols text-base align-middle text-blue-highlight"
              :class="pricing.indexOf(plan) === 1 ? 'text-white' : ''"
            >
              check_circle_outline
            </span>
            {{ f }}
          </li>
        </ul>
        <router-link to="/editor/billing">
          <motion.button
            class="w-full text-center px-6 py-3 font-semibold hover:bg-blue-600"
            :class="
              pricing.indexOf(plan) === 1
                ? 'bg-section-white text-blue-highlight hover:text-section-white'
                : 'bg-blue-highlight text-section-white'
            "
            :animate="{
              scale: hoveredIndex === pricing.indexOf(plan) ? 1 : 1.05,
              y: hoveredIndex === pricing.indexOf(plan) ? -5 : 0,
            }"
            :transition="{ type: 'spring', stiffness: 400, damping: 20 }"
            @mouseenter="hoveredIndex = pricing.indexOf(plan)"
            @mouseleave="hoveredIndex = null"
          >
            Choose
          </motion.button>
        </router-link>
      </div>
    </div>
  </section>
  <!-- Testimonial Section -->
  <section
    class="bg-zinc-800 my-20 p-8 gap-8 flex flex-col items-center"
    @mouseenter="hoveredSection = 'testimonials'"
    @mouseleave="hoveredSection = null"
  >
    <h2
      class="relative text-4xl font-bold text-blue-highlight mb-6 flex items-center gap-2"
    >
      What Our Users Say
      <motion.div
        class="absolute -bottom-2 left-0 right-0 h-[2px] bg-blue-highlight width-full"
        :initial="{ scaleX: 0 }"
        :animate="{ scaleX: hoveredSection === 'testimonials' ? 1 : 0 }"
        :exit="{ scaleX: 0 }"
        :transition="{ duration: 1, ease: 'linear' }"
        style="transform-origin: center center"
      >
      </motion.div>
    </h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="relative"
        @click="selectedIndex = testimonials.indexOf(t)"
      >
        <motion.div
          class="absolute top-0 right-0 left-0 bottom-0 m-auto rounded-lg w-[85%] h-[85%] bg-blue-900 flex items-center justify-center"
          :initial="{ scale: 0 }"
          :animate="{
            scale: selectedIndex === testimonials.indexOf(t) ? 1 : 0,
          }"
          :exit="{ scale: 0 }"
          :transition="{ duration: 0.3 }"
          style="transform-origin: center center"
        ></motion.div>
        <div
          class="relative bg-white/10 backdrop-blur-sm rounded-lg shadow cursor-pointer hover:shadow-blue-highlight transition-shadow duration-300 hover:shadow-md p-6 py-8 text-section-white max-w-xs flex flex-col items-center h-full"
        >
          <img
            :src="t.avatar"
            :alt="t.name"
            class="w-16 h-16 rounded-full mb-2"
          />
          <p class="italic mb-2">"{{ t.feedback }}"</p>
          <span class="font-bold text-blue-highlight">{{ t.name }}</span>
          <span class="text-xs">{{ t.company }}</span>
        </div>
      </div>
    </div>
  </section>

  <section
    class="mx-auto py-10 md:my-20 p-8 grid grid-cols-1 md:grid-cols-2 gap-12 bg-section-white"
  >
    <!-- About Section -->
    <div
      class="flex flex-col space-y-4 justify-center p-12 cursor-default shadow-md text-left bg-gradient-to-bl shadow-blue-highlight from-blue-50 to-blue-200"
    >
      <h2 class="text-3xl font-bold text-blue-highlight mb-2">About Webtoul</h2>
      <p class="text-elegant mb-2 font-extralight max-w-lg">
        Webtoul is your AI-powered partner for building beautiful, responsive
        websites in minutes. Whether you’re a business owner, freelancer, or
        creative, our platform empowers you to bring your ideas to life—no
        coding required.
      </p>
    </div>
    <div class="flex flex-col justify-around items-start gap-12">
      <div
        class="flex flex-col items-start shadow-md shadow-blue-highlight p-8 bg-gradient-to-tr from-blue-50 to-blue-200 w-full"
      >
        <h3
          class="font-semibold select-none cursor-default text-2xl py-4 text-blue-highlight mb-1 flex items-center gap-1"
        >
          Contact
        </h3>
        <div class="flex flex-col gap-4 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.617464037902!2d-73.99947019999999!3d40.726436899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598e658931ef%3A0x975dc134a032a037!2s173%20Wooster%20St%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2slk!4v1750315472471!5m2!1sen!2slk"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full"
          ></iframe>
          <motion.div
            v-for="(item, idx) in contactItems"
            :key="item.label"
            class="relative group cursor-pointer"
            :initial="{ scale: 1, boxShadow: '0 0 0 0 #60a5fa00' }"
            :animate="
              hoveredIndex === idx
                ? { scale: 1.04, boxShadow: '0 4px 24px 0 #60a5fa33' }
                : { scale: 1, boxShadow: '0 0 0 0 #60a5fa00' }
            "
            :transition="{ type: 'spring', stiffness: 300, damping: 25 }"
            @mouseenter="hoveredIndex = idx"
            @mouseleave="hoveredIndex = null"
            style="overflow: hidden"
          >
            <!-- Border Animation -->
            <motion.span
              class="absolute inset-0 pointer-events-none border-2 border-blue-highlight rounded-lg"
              :initial="{ scaleX: 0, scaleY: 0, opacity: 0 }"
              :animate="
                hoveredIndex === idx
                  ? { scaleX: 1, scaleY: 1, opacity: 1 }
                  : { scaleX: 0, scaleY: 0, opacity: 0 }
              "
              :transition="{ duration: 0.4 }"
              style="
                transform-origin: center center;
                z-index: 1;
                display: block;
              "
            ></motion.span>
            <!-- Gradient BG Animation -->
            <motion.span
              class="absolute inset-0 z-0 rounded-lg"
              :initial="{ x: '-20%', opacity: 0.7 }"
              :animate="
                hoveredIndex === idx
                  ? { x: '0%', opacity: 1 }
                  : { x: '-20%', opacity: 0.7 }
              "
              :transition="{ duration: 0.6 }"
              :style="{
                background:
                  hoveredIndex === idx
                    ? 'linear-gradient(90deg, #e0e7ff 0%, #bae6fd 100%)'
                    : 'linear-gradient(90deg, #fff 0%, #cfefef 100%)',
                zIndex: 0,
                display: 'block',
              }"
            ></motion.span>
            <a :href="item.link">
              <p
                class="relative z-10 text-zinc-muted text-sm flex items-center gap-2 px-6 py-4 font-medium"
                :class="
                  hoveredIndex === idx
                    ? 'font-semibold text-blue-highlight'
                    : ''
                "
              >
                <span class="material-symbols text-base align-middle">{{
                  item.icon
                }}</span>
                <span>{{ item.label }}: {{ item.value }}</span>
              </p>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-10 md:pt-20">
    <div class="flex flex-col items-center gap-8 p-8">
      <h3
        class="font-semibold select-none cursor-default text-blue-highlight mb-1 flex items-center gap-1 text-2xl py-4"
      >
        Latest Blogs
      </h3>
      <div class="grid mt-64 grid-cols-1 md:grid-cols-3 gap-64 md:gap-12">
        <div
          v-for="blog in blogs.slice(0, 3)"
          :key="blog.id"
          class="relative text-left flex flex-col space-y-2 rounded-lg bg-blue-900 text-white"
          @mouseenter="hoveredBlog = blog.id"
          @mouseleave="hoveredBlog = null"
        >
          <div
            class="absolute -top-60 left-0 right-0 mx-auto rounded-lg w-60 h-72 bg-white"
          >
            <img :src="blog.image" :alt="blog.title" class="object-cover" />
          </div>
          <div class="p-12 pt-20">
            <p class="font-bold">{{ blog.title }}</p>
            <p class="text-zinc-muted text-xs">{{ blog.date }}</p>
            <p class="text-elegant text-sm">
              {{ blog.content.slice(0, 100) }}...
            </p>
            <motion.div
              :animate="{
                opacity: hoveredBlog === blog.id ? 1 : 0,
                y: hoveredBlog === blog.id ? 0 : 50,
                scale: hoveredBlog === blog.id ? 1 : 0.9,
              }"
              :transition="{
                duration: 0.3,
                ease: 'easeInOut',
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }"
              class="absolute bottom-1 left-1 right-1 mx-auto rounded-b-md h-20 bg-white flex flex-fol items-center justify-center"
            >
              <router-link
                to="/blog"
                class="relative text-blue-800"
                @mouseenter="blogLink = blog.id"
                @mouseleave="blogLink = null"
              >
                Read More
                <motion.div
                  :animate="{
                    scale: blogLink === hoveredBlog ? 1 : 0,
                  }"
                  :transition="{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 500,
                    damping: 50,
                  }"
                  class="absolute w-full h-[1px] bg-blue-800 bottom-0"
                  :style="{ transformOrigin: 'left' }"
                ></motion.div>
              </router-link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- FAQ Section (optional, can be moved elsewhere) -->
  <section
    class="bg-section-white grid grid-cols-1 md:grid-cols-2 gap-8 p-8 my-20 w-full"
  >
    <div class="w-full h-auto mb-8 md:mb-0">
      <img
        src="/home/faq.webp"
        alt=" FAQ"
        class="object-cover h-[500px] w-full rounded-lg mb-4"
      />
    </div>
    <motion.div
      class="bg-white rounded-lg shadow p-6 text-left h-full flex flex-col justify-between"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4 }"
    >
      <h3
        class="text-3xl font-semibold text-blue-highlight mb-4 flex items-baseline gap-2"
      >
        <span class="material-symbols text-xl align-middle">help_outline</span>
        Frequently Asked Questions
      </h3>
      <div class="flex flex-col gap-4">
        <div
          v-for="(item, idx) in faq.slice(0, 3)"
          :key="item.question"
          class="rounded-3xl border text-left"
          :class="selectedFAQ === idx ? 'bg-blue-100' : ''"
        >
          <motion.p
            class="font-bold text-blue-highlight p-3 flex flex-row items-center w-full justify-between cursor-pointer"
            :initial="{ opacity: 0, y: 20 }"
            :whileInView="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.4, delay: idx * 0.1 }"
            :inViewOptions="{ once: true }"
            @click="
              if (selectedFAQ === idx) selectedFAQ = null;
              else selectedFAQ = idx;
            "
            :class="
              selectedFAQ === idx
                ? 'bg-blue-800 text-white rounded-3xl md:rounded-full'
                : ''
            "
          >
            Q: {{ item.question }}
            <span class="material-symbols text-xl">
              {{
                selectedFAQ === idx
                  ? "keyboard_arrow_up"
                  : "keyboard_arrow_down"
              }}
            </span>
          </motion.p>
          <motion.div
            :animate="{
              height: selectedFAQ === idx ? 'auto' : 0,
            }"
            :initial="{ height: 0 }"
            :transition="{ duration: 0.35 }"
            style="overflow: hidden"
            class="faq-answer-wrapper"
          >
            <motion.p
              v-if="selectedFAQ === idx"
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ delay: 0.35, duration: 0.25 }"
              class="text-zinc-muted p-4 px-8"
            >
              A: {{ item.answer }}
            </motion.p>
          </motion.div>
        </div>
        <div class="relative">
          <motion.div
            class="w-full h-12 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full opacity-50"
            :initial="{ scale: 0 }"
            :animate="{
              scale: hoveredSection === 'faq_button' ? 1.1 : 0,
              width: '92%',
            }"
            :exit="{ scale: 0 }"
            :transition="{ duration: 0.4 }"
            style="transform-origin: left center"
          />
          <motion.button
            class="absolute top-0 bottom-0 left-2 my-auto self-start px-4 py-2 bg-blue-highlight text-white hover:bg-blue-700 rounded-full"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{
              scale: hoveredSection === 'faq_button' ? 1.05 : 1,
              opacity: 1,
              y: 0,
            }"
            :exit="{ opacity: 0, y: 20 }"
            :transition="{ duration: 0.4 }"
            @click="showAllFaq = !showAllFaq"
            @mouseenter="hoveredSection = 'faq_button'"
            @mouseleave="hoveredSection = null"
          >
            {{ showAllFaq ? "Show Less" : "Show More" }}
          </motion.button>
        </div>
      </div>
    </motion.div>
    <div
      v-if="showAllFaq && faq.length > 3"
      class="flex flex-col gap-4 mt-6 border-t pt-4 md:col-span-2"
    >
      <div
        v-for="item in faq.slice(3)"
        :key="item.question"
        class="rounded-3xl border text-left"
        :class="selectedFAQ === item.question ? 'bg-blue-100' : ''"
      >
        <motion.p
          class="font-bold text-blue-highlight p-3 flex flex-row items-center w-full justify-between cursor-pointer"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.4 }"
          @click="
            if (selectedFAQ === item.question) selectedFAQ = null;
            else selectedFAQ = item.question;
          "
          :class="
            selectedFAQ === item.question
              ? 'bg-blue-800 text-white rounded-3xl md:rounded-full'
              : ''
          "
        >
          Q: {{ item.question }}
          <span class="material-symbols text-xl">
            {{
              selectedFAQ === item.question
                ? "keyboard_arrow_up"
                : "keyboard_arrow_down"
            }}
          </span>
        </motion.p>
        <motion.div
          :animate="{
            height: selectedFAQ === item.question ? 'auto' : 0,
          }"
          :initial="{ height: 0 }"
          :transition="{ duration: 0.35 }"
          style="overflow: hidden"
          class="faq-answer-wrapper"
        >
          <motion.p
            v-if="selectedFAQ === item.question"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ delay: 0.35, duration: 0.25 }"
            class="text-zinc-muted p-4 px-8"
          >
            A: {{ item.answer }}
          </motion.p>
        </motion.div>
      </div>
    </div>
  </section>
  <!-- CTA Section -->
  <section
    class="bg-slate-dark p-12 py-28 rounded-3xl my-20 md:mx-16 flex flex-col items-center text-center"
  >
    <h2
      class="text-5xl font-bold text-section-white mb-2 flex items-baseline gap-2"
    >
      <span class="material-symbols text-4xl align-middle">rocket_launch</span>
      Ready to build your AI-powered website?
    </h2>
    <p class="text-blue-highlight mb-4">
      Start for free or explore our Pro features for even more power.
    </p>
    <router-link
      to="/editor"
      class="inline-block bg-section-white text-blue-highlight px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-50 transition"
      >Get Started</router-link
    >
  </section>
</template>

<script setup>
import testimonials from "../data/testimonials";
import blogs from "../data/blogs";
import faq from "../data/faq";
import contact from "../data/contact";
import { ref, onMounted } from "vue";
import router from "../router";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion-v";

const heroImage = ref(null);

const { scrollY } = useScroll({
  offset: ["start end", "end start"],
  target: heroImage,
});
const imageY = useTransform(scrollY, [0, 400], ["0px", "-100px"]);

const partners = [
  {
    name: "Web10",
    logo: "/partners/web10.svg",
    url: "https://web10.io",
  },
  {
    name: "Moveworks",
    logo: "/partners/Moveworks.svg",
    url: "https://www.moveworks.com/",
  },
  {
    name: "DeepL",
    logo: "/partners/DeepL.svg",
    url: "https://www.deepl.com/",
  },
  {
    name: "Synthesia",
    logo: "/partners/Synthesia.svg",
    url: "https://www.synthesia.io/",
  },
  {
    name: "Frame AI",
    logo: "/partners/FrameAI.png",
    url: "https://frame.ai/",
  },
];

const pricing = [
  {
    name: "Starter Plan",
    price: "$0",
    features: [
      "5 websites per month",
      "10 UI components per month",
      "20 AI images per month",
      "Basic templates",
      "Email support",
      "Community access",
    ],
  },
  {
    name: "Pro Plan",
    price: "$29/mo",
    features: [
      "Unlimited websites",
      "Unlimited UI components",
      "500 AI images per month",
      "Premium templates",
      "Priority support",
      "Custom domains",
      "Advanced customization",
      "Export source code",
      "HD image generation",
      "Custom component styles",
    ],
  },
  {
    name: "Agency Plan",
    price: "$79/mo",
    features: [
      "Everything in Pro",
      "Unlimited AI images",
      "Team collaboration",
      "White-label solution",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Bulk image generation",
      "Advanced UI component library",
      "Custom brand templates",
    ],
  },
];

const contactItems = [
  {
    icon: "mail",
    label: "Email",
    value: contact.email,
    link: `mailto:${contact.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: contact.phone,
    link: `tel:${contact.phone}`,
  },
  {
    icon: "location_on",
    label: "Address",
    value: contact.address,
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contact.address
    )}`,
  },
];
const hoveredIndex = ref(null);
const rocketHover = ref(false);
const hoveredSection = ref(null);
const selectedIndex = ref(0);
const showAllFaq = ref(false);
const selectedFAQ = ref(0);
const hoveredBlog = ref(null);
const blogLink = ref(null);

const icons = ref([
  "pan_tool_alt",
  "touch_app",
  "arrow_selector_tool",
  "left_click",
  "code",
  "scan",
  "terminal",
]);

const iconStyles = ref([]);

const generateRandomStyles = () => {
  iconStyles.value = icons.value.map(() => ({
    left: `${Math.random() * 80 + 10}%`, // Random X position
    top: `${Math.random() * 80 + 10}%`, // Random Y position
    fontSize: `${Math.random() * 2 + 1}rem`, // Random size
  }));
};

onMounted(() => {
  generateRandomStyles();
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
