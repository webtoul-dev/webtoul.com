<template>
  <section
    class="max-w-5xl mx-auto my-12 p-8 bg-section-white rounded-2xl shadow flex flex-col gap-12"
  >
    <div class="text-center">
      <h1
        class="text-4xl font-extrabold text-blue-highlight mb-4 flex items-center gap-2"
      >
        <span class="material-icons text-3xl align-middle">school</span>
        Master Webtoul.com: Your Guide to AI-Powered Web Creation
      </h1>
      <p class="text-lg text-elegant mb-6">
        Welcome to your learning hub! Whether you’re just starting out or
        looking to unlock advanced techniques, our guides are here to help you
        get the most from Webtoul.com’s powerful AI website builder. Even though
        our platform is intuitive, these resources will help you build smarter
        and faster.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2">
        <h2
          class="text-xl font-bold text-blue-highlight mb-1 flex items-center gap-1"
        >
          <span class="material-icons text-base align-middle"
            >rocket_launch</span
          >
          Getting Started with Webtoul.com
        </h2>
        <p class="text-elegant mb-2">
          Learn the basics: from signing up to launching your first AI-generated
          website.
        </p>
        <button
          class="text-blue-highlight text-sm underline text-left w-fit"
          @click="goToGuide('quickstart')"
        >
          Guide: “Your First AI-Generated Website: A 5-Minute Quickstart”
        </button>
      </div>
      <div class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2">
        <h2
          class="text-xl font-bold text-blue-highlight mb-1 flex items-center gap-1"
        >
          <span class="material-icons text-base align-middle"
            >dashboard_customize</span
          >
          Leveraging the AI Website Architect
        </h2>
        <p class="text-elegant mb-2">
          Discover how to give effective prompts and choose the perfect style
          for your site.
        </p>
        <button
          class="text-blue-highlight text-sm underline text-left w-fit"
          @click="goToGuide('prompt-perfect')"
        >
          Guide: “Prompt Perfect: Crafting Inputs for a Stunning AI Layout”
        </button>
      </div>
      <div class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2">
        <h2
          class="text-xl font-bold text-blue-highlight mb-1 flex items-center gap-1"
        >
          <span class="material-icons text-base align-middle">text_fields</span>
          Dominating Content with the AI Content Crafter
        </h2>
        <p class="text-elegant mb-2">
          Tips for generating headlines, product descriptions, and refining AI
          suggestions.
        </p>
        <button
          class="text-blue-highlight text-sm underline text-left w-fit"
          @click="goToGuide('ai-writer')"
        >
          Guide: “From Blank Page to Brilliant Copy: Tips for the AI Writer”
        </button>
      </div>
      <div class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2">
        <h2
          class="text-xl font-bold text-blue-highlight mb-1 flex items-center gap-1"
        >
          <span class="material-icons text-base align-middle">palette</span>
          Designing Like a Pro with the AI Design Assistant
        </h2>
        <p class="text-elegant mb-2">
          Master color theory, font pairing, and visual hierarchy with AI
          support.
        </p>
        <button
          class="text-blue-highlight text-sm underline text-left w-fit"
          @click="goToGuide('ai-design')"
        >
          Guide: “AI-Enhanced Aesthetics: Making Your Site Visually
          Irresistible”
        </button>
      </div>
      <div class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2">
        <h2
          class="text-xl font-bold text-blue-highlight mb-1 flex items-center gap-1"
        >
          <span class="material-icons text-base align-middle"
            >help_outline</span
          >
          FAQs & Troubleshooting
        </h2>
        <p class="text-elegant mb-2">
          Find answers to common questions and quick fixes for any issues.
        </p>
        <button
          class="text-blue-highlight text-sm underline text-left w-fit"
          @click="goToGuide('faq')"
        >
          Guide: “FAQs & Troubleshooting”
        </button>
      </div>
    </div>
    <div class="text-center mt-10">
      <h2 class="text-2xl font-bold text-blue-highlight mb-2">
        Continual Learning
      </h2>
      <p class="text-elegant mb-4">
        We’re always adding new guides and tips—check back often to keep your
        skills sharp.
      </p>
      <router-link
        to="/learn"
        class="inline-block bg-blue-highlight text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Ready to Dive Deeper? Explore Our Guides and Build Smarter!
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToGuide(guideId) {
  router.push({ name: "Guide", params: { id: guideId } });
}
</script>

<style>
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
