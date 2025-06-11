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
      class="row-span-full col-span-2 p-12 text-left mb-4 border-r-2"
    >
      <div
        class="relative min-h-52 w-full py-8 bg-slate-dark flex flex-col items-end"
      >
        <img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
          alt=""
          class="absolute top-12 max-h-80 w-fit object-cover left-8"
        />
        <h2
          class="relative w-8/12 text-6xl font-bold text-section-white mb-1 flex items-center gap-2"
        >
          {{ mainBlog.title }}
        </h2>
      </div>
      <div
        class="w-4/5 m-auto mt-52 flex flex-col items-start justify-start gap-2"
      >
        <p class="text-zinc-muted text-xs mb-2">{{ mainBlog.date }}</p>
        <p class="rext-text-elegant mb-2">
          {{ mainBlog.content || mainBlog.content }}
        </p>
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
        @click="selectBlog(post)"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
          alt="AI Website Builder"
          class="max-h-40 w-fit min-w-36 object-cover"
          :animate="{
            scale: hoveredBox === post.id ? 1 : 0.95,
          }"
        />
        <div class="flex flex-col items-start justify-start text-left">
          <h3 class="text-blue-highlight font-semibold text-lg">
            {{ post.title }}
          </h3>
          <p class="text-zinc-muted text-xs mb-1">{{ post.date }}</p>
          <p class="text-elegant">{{ post.content.slice(0, 100) + "..." }}</p>
          <button
            class="text-blue-highlight font-semibold text-left w-fit mt-2"
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
const mainBlog = ref(blogs[0]);
const otherBlogs = computed(() =>
  blogs.filter((b) => b.id !== mainBlog.value.id)
);

function selectBlog(blog) {
  mainBlog.value = blog;
}
</script>
