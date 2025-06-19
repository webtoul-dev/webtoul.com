<template>
  <motion.section
    ref="elem"
    class="relative mx-auto min-h-[calc(100vh-80px)] bg-section-white flex flex-col items-center justify-center gap-10"
    :style="{ y: textY }"
  >
    <motion.div
      class="absolute top-0 left-0 w-7/12 h-full bg-slate-dark"
      :style="{ y: backgtoundY }"
    ></motion.div>
    <motion.div
      class="relative flex flex-col items-center justify-center gap-4 mix-blend-difference"
    >
      <h1
        class="text-3xl md:text-8xl font-extrabold text-blue-highlight mb-2 flex flex-col items-center gap-2"
      >
        <span class="material-symbols text-4xl">insights</span>
        Insights & Updates
      </h1>
      <h2 class="text-4xl font-bold text-blue-highlight mb-2">Our Blog</h2>
      <p class="text-lg text-text-elegant">
        Stay up to date with the latest in AI, web design, and product news.
      </p>
    </motion.div>
  </motion.section>
  <section class="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
    <div
      v-if="mainBlog"
      class="row-span-full col-span-2 md:p-12 text-left mb-4 border-r-2"
    >
      <div
        class="relative min-h-52 w-full py-8 bg-slate-dark flex flex-col items-end"
      >
        <img
          :src="mainBlog.image"
          :alt="mainBlog.title"
          class="absolute top-40 md:top-12 max-h-60 md:max-h-80 w-fit object-cover md:left-8 left-0 right-0 m-auto md:m-0"
        />
        <h2
          class="relative md:w-8/12 md:text-6xl font-bold text-section-white mb-1 p-4 md:p-0 flex text-center md:text-left items-center gap-2"
        >
          {{ mainBlog.title }}
        </h2>
      </div>
      <div class="w-4/5 m-auto mt-60 md:mt-52">
        <div class="flex items-center flex-wrap gap-4 mb-6">
          <p class="text-zinc-500 text-sm">{{ mainBlog.date }}</p>
          <p class="text-zinc-500 text-sm">By {{ mainBlog.author }}</p>
          <div class="flex gap-2">
            <span
              v-for="tag in mainBlog.tags"
              :key="tag"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 text-nowrap rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div
          class="blog-content prose prose-lg prose-blue max-w-none"
          v-html="renderContent(mainBlog.content)"
        ></div>
      </div>
    </div>
    <div
      v-if="otherBlogs.length"
      class="flex flex-col items-center justify-start gap-4 place-self-start"
    >
      <motion.h1 class="text-4xl font-bold"> More blogs </motion.h1>
      <div
        v-for="post in otherBlogs"
        :key="post.id"
        class="p-4 flex-1 flex gap-2 cursor-pointer first-of-type:border-none border-t-2 border-zinc-muted"
        @mouseenter="hoveredBox = post.id"
        @mouseleave="hoveredBox = null"
      >
        <img
          :src="post.image"
          :alt="post.title"
          class="max-h-40 w-fit min-w-36 object-contain"
          :animate="{
            scale: hoveredBox === post.id ? 1 : 0.95,
          }"
        />
        <div class="flex flex-col items-start justify-start text-left">
          <h3 class="text-blue-highlight font-semibold text-lg">
            {{ post.title }}
          </h3>
          <p class="text-zinc-500 text-xs mb-1">{{ post.date }}</p>
          <p class="text-elegant">{{ post.content.slice(0, 100) + "..." }}</p>
          <button
            type="button"
            class="text-blue-highlight font-semibold text-left w-fit mt-2 hover:text-blue-800 transition-colors"
            @click="selectBlog(post)"
          >
            Read More
          </button>
          <motion.div
            :animate="{
              scaleX: hoveredBox === post.id ? 1 : 0,
            }"
            :transition="{
              duration: 0.3,
              ease: 'easeInOut',
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }"
            class="w-full h-1 bg-blue-highlight"
            style="transform-origin: left"
          ></motion.div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  animate,
} from "motion-v";
import { marked } from "marked";
import blogs from "../data/blogs";

const elem = ref(null);
const hoveredBox = ref(null);

const { scrollY } = useScroll({
  target: elem,
  offset: ["start end", "end end"],
});
const textY = useTransform(scrollY, [0, 500], ["0px", "0px"]);
const backgtoundY = useTransform(scrollY, [0, 600], ["0px", "-100%"]);

useMotionValueEvent(scrollY, "change", (latest) => {
  // console.log("Scroll Progress:", latest);
});
const selectedBlogId = ref(blogs[0].id);

const mainBlog = computed(() =>
  blogs.find((blog) => blog.id === selectedBlogId.value)
);
const otherBlogs = computed(() =>
  blogs.filter((blog) => blog.id !== selectedBlogId.value)
);

function selectBlog(blog) {
  selectedBlogId.value = blog.id;
}

const renderContent = (content) => {
  return marked(content, {
    headerIds: false,
    mangle: false,
  });
};
</script>

<style scoped>
.blog-content {
  width: 100%;
  color: #374151;
}

.blog-content :deep(h2) {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1e40af;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.blog-content :deep(h3) {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1d4ed8;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.blog-content :deep(p) {
  color: #374151;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.blog-content :deep(ul) {
  list-style-type: disc;
  list-style-position: inside;
  margin: 1.5rem 0;
  margin-left: 1rem;
}

.blog-content :deep(li) {
  color: #374151;
  margin: 0.5rem 0;
}

.blog-content :deep(strong) {
  font-weight: 600;
  color: #111827;
}

.blog-content :deep(a) {
  color: #2563eb;
  text-decoration: underline;
}

.blog-content :deep(a:hover) {
  color: #1d4ed8;
}

.blog-content :deep(blockquote) {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  font-style: italic;
  margin: 1rem 0;
  color: #4b5563;
}

.blog-content :deep(code) {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
}

.blog-content :deep(pre) {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

.blog-content :deep(img) {
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 1.5rem 0;
  max-width: 100%;
}
</style>
