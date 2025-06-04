<template>
  <section
    class="max-w-5xl mx-auto my-12 p-8 bg-section-white rounded-2xl shadow flex flex-col gap-12"
  >
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-blue-highlight mb-4">
        Unlock a Smarter Way to Build: Explore Webtoul.com’s AI Features
      </h1>
      <p class="text-lg text-elegant mb-6">
        Building a website shouldn’t be complicated or time-consuming.
        Traditional web design often means wrestling with code, templates, and
        endless revisions. Webtoul.com changes the game—our AI-powered features
        are designed to empower anyone to create a stunning, professional
        website in minutes, no matter your experience level.
      </p>
    </div>
    <div class="flex flex-col gap-10">
      <!-- Feature 1 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Intelligent Foundations: Let AI Draft Your Perfect Layout
          </h2>
          <p class="text-elegant mb-2">
            Provide a few simple details—your industry, website purpose, and
            style preferences—and let our AI instantly generate a complete,
            mobile-responsive website structure. No more guesswork or endless
            template browsing.
          </p>
          <ul class="list-disc list-inside text-zinc-muted mb-2">
            <li>Launch in minutes, not days</li>
            <li>Professionally designed layouts</li>
            <li>Mobile-ready by default</li>
            <li>Focus on your vision, not the technicalities</li>
          </ul>
          <span class="text-blue-highlight font-semibold">
            Ready to see your ideas take shape?
          </span>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
            alt="AI Layout Wireframe"
            class="w-64 rounded shadow"
          />
        </div>
      </div>
      <!-- Feature 2 -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Words That Work: AI-Powered Content That Converts
          </h2>
          <p class="text-elegant mb-2">
            Struggling with what to say? Our AI generates headlines, product
            descriptions, calls to action, and even blog ideas tailored to your
            business and audience.
          </p>
          <ul class="list-disc list-inside text-zinc-muted mb-2">
            <li>Overcome writer’s block</li>
            <li>Save hours on copywriting</li>
            <li>SEO-friendly, conversion-focused content</li>
            <li>Consistent, professional tone</li>
          </ul>
          <span class="text-blue-highlight font-semibold">
            Let AI handle the words—so you can focus on your business.
          </span>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
            alt="AI Content Generation"
            class="w-64 rounded shadow"
          />
        </div>
      </div>
      <!-- Feature 3 -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Aesthetic Brilliance, AI-Optimized: Your Personal Design Guru
          </h2>
          <p class="text-elegant mb-2">
            Not a designer? No problem. Our AI suggests color palettes, font
            pairings, and image styles, and even optimizes spacing for a
            polished, cohesive look. Enjoy seamless integration with
            royalty-free image libraries for instant visual appeal.
          </p>
          <ul class="list-disc list-inside text-zinc-muted mb-2">
            <li>Achieve a professional look effortlessly</li>
            <li>Brand consistency, every time</li>
            <li>Visually engaging, user-friendly interfaces</li>
          </ul>
          <span class="text-blue-highlight font-semibold">
            Experience design confidence—no expertise required.
          </span>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
            alt="AI Design Assistant"
            class="w-64 rounded shadow"
          />
        </div>
      </div>
      <!-- Feature 4 -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-8">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-blue-highlight mb-2">
            Seamless Creation: Experience the Fluidity of Vue.js
          </h2>
          <p class="text-elegant mb-2">
            Webtoul.com is built on Vue.js, ensuring a fast, responsive, and
            intuitive website building experience. Enjoy real-time editing,
            instant previews, and a modern interface that makes building your
            site a pleasure.
          </p>
          <ul class="list-disc list-inside text-zinc-muted mb-2">
            <li>Smooth, lag-free editing</li>
            <li>Instant feedback and previews</li>
            <li>Enjoyable, modern building process</li>
          </ul>
          <span class="text-blue-highlight font-semibold">
            Feel the difference of next-generation web technology.
          </span>
        </div>
        <div class="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
            alt="Vue.js Performance"
            class="w-64 rounded shadow"
          />
        </div>
      </div>
    </div>
    <div class="text-center mt-10">
      <h2 class="text-3xl font-extrabold text-blue-highlight mb-2">
        The Combined Power of AI & Vue.js
      </h2>
      <p class="text-lg text-elegant mb-4">
        With Webtoul.com, advanced AI and cutting-edge technology work together
        to make website creation effortless, enjoyable, and effective.
      </p>
      <router-link
        to="/editor"
        class="inline-block bg-blue-highlight text-section-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-blue-700 transition"
      >
        Ready to Experience AI-Powered Web Design? Start Building for Free!
      </router-link>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>
