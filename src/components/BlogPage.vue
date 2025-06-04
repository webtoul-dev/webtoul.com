<template>
  <section
    class="max-w-4xl mx-auto my-12 p-8 bg-section-white rounded-2xl shadow flex flex-col gap-10"
  >
    <div class="text-center">
      <h1 class="text-3xl md:text-4xl font-extrabold text-blue-highlight mb-2">
        Insights & Updates
      </h1>
      <p class="text-lg text-elegant">
        Stay up to date with the latest in AI, web design, and product news.
      </p>
    </div>
    <div
      v-if="mainBlog"
      class="bg-gradient-to-r from-blue-highlight to-zinc-muted rounded-xl p-6 shadow text-center mb-4"
    >
      <h2 class="text-2xl font-bold text-blue-highlight mb-1">
        {{ mainBlog.title }}
      </h2>
      <p class="text-zinc-muted text-xs mb-2">{{ mainBlog.date }}</p>
      <p class="text-elegant mb-2">
        {{ mainBlog.content || mainBlog.summary }}
      </p>
    </div>
    <div v-if="otherBlogs.length" class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="post in otherBlogs"
        :key="post.id"
        class="bg-zinc-muted rounded-xl shadow p-6 flex flex-col gap-2"
      >
        <h3 class="text-blue-highlight font-semibold text-lg">
          {{ post.title }}
        </h3>
        <p class="text-zinc-muted text-xs mb-1">{{ post.date }}</p>
        <p class="text-elegant">{{ post.summary }}</p>
        <button
          @click="selectBlog(post)"
          class="text-blue-highlight font-semibold hover:underline text-left w-fit mt-2"
        >
          Read More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import blogs from "../data/blogs";

const mainBlog = ref(blogs[0]);
const otherBlogs = computed(() =>
  blogs.filter((b) => b.id !== mainBlog.value.id)
);

function selectBlog(blog) {
  mainBlog.value = blog;
}
</script>
