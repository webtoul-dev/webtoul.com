<template>
  <section
    class="flex flex-col items-center justify-center h-screen py-12 space-y-8 bg-section-white"
  >
    <!-- Hero Section -->
    <h1 class="text-4xl md:text-5xl font-extrabold text-blue-highlight mb-4">
      AI Website Builder<br />
      for Everyone
    </h1>
    <p class="text-lg md:text-xl max-w-2xl text-elegant mb-6">
      Instantly create, customize, and launch beautiful websites with AI. No
      coding, no hassle—just your vision, brought to life.
    </p>
    <router-link
      to="/editor"
      class="inline-block bg-gradient-to-r from-blue-highlight to-blue-600 text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition"
      >Try the Builder</router-link
    >
    <img
      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
      alt="AI Website Builder"
      class="w-auto max-h-96 rounded-lg shadow-lg mt-6"
    />
  </section>
  <section
    class="max-w-5xl mx-auto my-20 p-8 flex flex-row gap-12 bg-section-white"
  >
    <!-- About Section -->
    <div
      class="flex-1 space-y-4 border p-8 border-blue-highlight rounded-lg cursor-default hover:shadow-lg transition-shadow"
    >
      <h2 class="text-2xl font-bold text-blue-highlight mb-2">About Webtoul</h2>
      <p class="text-elegant mb-2 max-w-lg">
        Webtoul is your AI-powered partner for building beautiful, responsive
        websites in minutes. Whether you’re a business owner, freelancer, or
        creative, our platform empowers you to bring your ideas to life—no
        coding required.
      </p>
    </div>
    <div class="flex flex-col justify-around items-start mt-4">
      <div class="flex flex-col">
        <h3 class="font-semibold text-blue-highlight mb-1">Contact</h3>
        <p class="text-zinc-muted text-sm">Email: {{ contact.email }}</p>
        <p class="text-zinc-muted text-sm">Phone: {{ contact.phone }}</p>
        <p class="text-zinc-muted text-sm">Address: {{ contact.address }}</p>
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold text-blue-highlight mb-1">Latest Blog</h3>
        <div v-for="blog in blogs.slice(0, 1)" :key="blog.id" class="text-left">
          <p class="font-bold">{{ blog.title }}</p>
          <p class="text-zinc-muted text-xs">{{ blog.date }}</p>
          <p class="text-elegant text-sm">{{ blog.summary }}</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Partners Section -->
  <section class="bg-section-white">
    <h2 class="text-xl font-bold text-blue-highlight mb-6">Our Partners</h2>
    <div class="flex flex-wrap justify-center items-center gap-8">
      <a
        v-for="p in partners"
        :key="p.name"
        :href="p.url"
        target="_blank"
        class="flex flex-col items-center"
      >
        <img :src="p.logo" :alt="p.name" class="h-12 mb-2" />
        <span class="text-zinc-muted text-sm">{{ p.name }}</span>
      </a>
    </div>
  </section>
  <!-- Pricing Section -->
  <section class="bg-section-white">
    <h2 class="text-xl font-bold text-blue-highlight mb-6">Pricing</h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="plan in pricing"
        :key="plan.name"
        class="bg-zinc-muted rounded-lg shadow p-6 w-64 flex flex-col items-center"
      >
        <h3 class="font-bold text-blue-highlight text-lg mb-2">
          {{ plan.name }}
        </h3>
        <div class="text-2xl font-extrabold mb-2 text-elegant">
          {{ plan.price }}
        </div>
        <ul class="text-white text-left mb-4">
          <li v-for="f in plan.features" :key="f">• {{ f }}</li>
        </ul>
        <button
          class="bg-blue-highlight text-section-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Choose
        </button>
      </div>
    </div>
  </section>
  <!-- Testimonial Section -->
  <section class="bg-section-white">
    <h2 class="text-xl font-bold text-blue-highlight mb-6">
      What Our Users Say
    </h2>
    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="bg-white rounded-lg shadow p-6 max-w-xs flex flex-col items-center"
      >
        <img
          :src="t.avatar"
          :alt="t.name"
          class="w-16 h-16 rounded-full mb-2"
        />
        <p class="italic text-zinc-muted mb-2">"{{ t.feedback }}"</p>
        <span class="font-bold text-blue-highlight">{{ t.name }}</span>
        <span class="text-zinc-muted text-xs">{{ t.company }}</span>
      </div>
    </div>
  </section>
  <!-- CTA Section -->
  <section class="bg-slate-dark">
    <h2 class="text-2xl font-bold text-section-white mb-2">
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
  <!-- FAQ Section (optional, can be moved elsewhere) -->
  <section class="bg-section-white">
    <h3 class="text-lg font-semibold text-blue-highlight mb-4">
      Frequently Asked Questions
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="item in faq"
        :key="item.question"
        class="bg-white rounded shadow p-4 text-left"
      >
        <p class="font-bold text-blue-highlight">Q: {{ item.question }}</p>
        <p class="text-zinc-muted">A: {{ item.answer }}</p>
      </div>
    </div>
  </section>
  <!-- Note Section -->
  <section class="bg-section-white">
    <p class="text-zinc-muted text-base">
      Note: Customizations are session-based and not saved after you leave. For
      persistent sites, stay tuned for future updates!
    </p>
  </section>
</template>

<script setup>
import testimonials from "../data/testimonials";
import blogs from "../data/blogs";
import faq from "../data/faq";
import contact from "../data/contact";

const partners = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    url: "https://openai.com",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    url: "https://vercel.com",
  },
  {
    name: "Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
    url: "https://azure.microsoft.com",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    features: [
      "Basic AI builder",
      "Community templates",
      "Session-based sites",
    ],
  },
  {
    name: "Pro",
    price: "$19/mo",
    features: [
      "Custom domains",
      "Persistent sites",
      "Premium templates",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    features: [
      "White-label",
      "Team collaboration",
      "Custom AI models",
      "Dedicated support",
    ],
  },
];
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
