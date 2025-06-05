<template>
  <section
    class="max-w-5xl mx-auto my-12 p-8 bg-section-white rounded-2xl shadow flex flex-col gap-12"
  >
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-blue-highlight mb-4">
        See What You Can Create with Webtoul.com
      </h1>
      <p class="text-lg text-elegant mb-6">
        Seeing is believing. Every example below was crafted—quickly and
        easily—using Webtoul.com’s AI website builder. Imagine your own project
        brought to life with the same power and simplicity.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Portfolio Example -->
      <div
        class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col items-center text-center"
      >
        <span class="material-icons text-3xl text-blue-highlight mb-2"
          >brush</span
        >
        <h2 class="text-lg font-bold text-blue-highlight mb-1">
          Sleek Portfolios for Creatives
        </h2>
        <p class="text-elegant mb-2">
          Showcase your work with style. Perfect for designers, photographers,
          and artists.
        </p>
        <p class="text-zinc-muted text-sm">
          AI Design Assistant for stunning galleries, AI Content Crafter for
          compelling bios and project descriptions.
        </p>
        <span class="text-blue-highlight font-semibold">
          Imagine your work showcased like this.
        </span>
      </div>
      <!-- Business Example -->
      <div
        class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col items-center text-center"
      >
        <span class="material-icons text-3xl text-blue-highlight mb-2"
          >storefront</span
        >
        <h2 class="text-lg font-bold text-blue-highlight mb-1">
          Local Business Hub
        </h2>
        <p class="text-elegant mb-2">
          Connect with your community and grow your business online.
        </p>
        <p class="text-zinc-muted text-sm">
          AI Website Architect for tailored layouts, AI Content Crafter for
          service descriptions and CTAs.
        </p>
        <span class="text-blue-highlight font-semibold">
          Ready to build your business presence?
        </span>
      </div>
      <!-- Blog Example -->
      <div
        class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col items-center text-center"
      >
        <span class="material-icons text-3xl text-blue-highlight mb-2"
          >rss_feed</span
        >
        <h2 class="text-lg font-bold text-blue-highlight mb-1">Dynamic Blog</h2>
        <p class="text-elegant mb-2">
          Share your voice and ideas with the world. Launch a beautiful,
          SEO-friendly blog in minutes.
        </p>
        <p class="text-zinc-muted text-sm">
          AI Content Crafter for blog post ideas and headlines, AI Design
          Assistant for readability and style.
        </p>
        <span class="text-blue-highlight font-semibold">
          Start your blogging journey today.
        </span>
      </div>
      <!-- Storefront Example -->
      <div
        class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col items-center text-center"
      >
        <span class="material-icons text-3xl text-blue-highlight mb-2"
          >shopping_bag</span
        >
        <h2 class="text-lg font-bold text-blue-highlight mb-1">
          Online Storefront Teaser
        </h2>
        <p class="text-elegant mb-2">
          Showcase your products and drive sales with a visually appealing,
          conversion-optimized storefront.
        </p>
        <p class="text-zinc-muted text-sm">
          AI Website Architect for product grids, AI Content Crafter for product
          descriptions and calls to action.
        </p>
        <span class="text-blue-highlight font-semibold">
          Picture your shop online—effortlessly.
        </span>
      </div>
    </div>
    <div class="text-center mt-12">
      <h2 class="text-2xl font-bold text-blue-highlight mb-2">
        Your Vision, Our AI
      </h2>
      <p class="text-elegant mb-4">
        These examples are just the beginning. Webtoul.com adapts to your unique
        needs, whether you’re building a portfolio, business site, blog, or
        something entirely new.
      </p>
      <router-link
        to="/editor"
        class="inline-block bg-blue-highlight text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Inspired? It’s Your Turn to Create Something Amazing.
      </router-link>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>
