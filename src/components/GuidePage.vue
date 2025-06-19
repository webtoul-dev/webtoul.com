<template>
  <div class="flex flex-col-reverse md:flex-row min-h-screen bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-full md:w-64 bg-white border-r shadow-sm flex flex-col">
      <div class="p-6 border-b">
        <h2 class="text-xl font-bold text-blue-600 mb-2">Guides</h2>
      </div>
      <nav class="flex-1 overflow-y-auto">
        <ul>
          <li
            v-for="guide in guides"
            :key="guide.id"
            @mouseenter="hoveredItem = guide.id"
            @mouseleave="hoveredItem = null"
          >
            <button
              class="relative w-full text-left px-6 py-3 focus:bg-blue-100 transition font-medium"
              :class="
                String(guide.id) === selectedId
                  ? 'bg-blue-100 text-blue-highlight'
                  : 'text-slate-700'
              "
              @click="$router.push({ name: 'Guide', params: { id: guide.id } })"
            >
              {{ guide.title }}
              <motion.div
                :animate="{
                  scale: hoveredItem === guide.id ? 1 : 0,
                }"
                :transition="{ duration: 0.3 }"
                style="transform-origin: center center"
                class="relative bottom-0 w-full h-1 bg-blue-highlight"
              ></motion.div>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
    <!-- Main Content -->
    <main class="flex-1 p-10 overflow-y-auto">
      <div v-if="currentGuide">
        <h1 class="text-3xl font-extrabold text-blue-600 mb-4">
          {{ currentGuide.headline }}
        </h1>
        <div
          class="prose max-w-none text-slate-800 text-left"
          v-html="formattedContent"
        ></div>
      </div>
      <div v-else class="text-slate-500">Guide not found.</div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import guides from "../data/guides";
import { motion } from "motion-v";

const route = useRoute();
const hoveredItem = ref(null);
const selectedId = computed(() =>
  route.params.id ? String(route.params.id) : String(guides[0].id)
);
const currentGuide = computed(() =>
  guides.find((g) => String(g.id) === selectedId.value)
);

const isSubtopic = (line) =>
  /^Step\s*\d+:/.test(line) ||
  /^Q\d+:/.test(line) ||
  /^A:/.test(line) ||
  /^[A-Z][A-Za-z\s\-]+:/.test(line);

const isOrderedListItem = (line) => /^\d+\.\s/.test(line);
const isUnorderedListItem = (line) => /^- /.test(line);

const formattedContent = computed(() => {
  if (!currentGuide.value) return "";

  const lines = currentGuide.value.content.split("\n");
  let html = "";
  let inUl = false;
  let inOl = false;
  let inCode = false;

  for (let idx = 0; idx < lines.length; idx++) {
    const line = lines[idx].trim();

    // Code block
    if (line.startsWith("```")) {
      if (!inCode) {
        inCode = true;
        html += "<pre class='bg-slate-100 rounded p-3 mb-4'><code>";
      } else {
        inCode = false;
        html += "</code></pre>";
      }
      continue;
    }
    if (inCode) {
      html += line.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n";
      continue;
    }

    // Markdown headings
    if (/^#{1,6}\s/.test(line)) {
      const level = line.match(/^#+/)[0].length;
      html += `<h${level} class="mt-6 mb-2 font-bold text-blue-700">${line.replace(
        /^#+\s/,
        ""
      )}</h${level}>`;
      continue;
    }

    // Subtopic detection (Step, Q, A, Capitalized with colon)
    if (isSubtopic(line)) {
      html += `<h3 class="mt-6 mb-2 font-light text-blue-highlight ">${line}</h3>`;
      continue;
    }

    // Ordered list or numbered subheading
    if (isOrderedListItem(line)) {
      // Check if this is a single numbered line (subheading) or part of a list
      const nextLine = lines[idx + 1] ? lines[idx + 1].trim() : "";
      const prevLine = lines[idx - 1] ? lines[idx - 1].trim() : "";
      const nextIsOrdered = isOrderedListItem(nextLine);
      const prevIsOrdered = isOrderedListItem(prevLine);

      if (!inOl && nextIsOrdered) {
        // Start of an ordered list
        inOl = true;
        html += `<ol class="list-decimal pl-6 mb-4">`;
      }

      if (inOl) {
        html += `<li>${line.replace(/^\d+\.\s/, "")}</li>`;
        // End of ordered list
        if (!nextIsOrdered) {
          html += "</ol>";
          inOl = false;
        }
      } else {
        // Single numbered line, treat as subheading
        html += `<h2 class="mt-6 mb-2 font-semibold text-xl text-blue-highlight">${line}</h3>`;
      }
      continue;
    }

    // Unordered list
    if (isUnorderedListItem(line)) {
      const nextLine = lines[idx + 1] ? lines[idx + 1].trim() : "";
      if (!inUl) {
        inUl = true;
        html += `<ul class="list-disc pl-6 mb-4">`;
      }
      html += `<li>${line.replace(/^- /, "")}</li>`;
      if (!isUnorderedListItem(nextLine)) {
        html += "</ul>";
        inUl = false;
      }
      continue;
    }

    // Paragraphs
    if (line === "") {
      html += "";
    } else {
      html += `<p class="text-justify">${line}</p>`;
    }
  }

  return html;
});
</script>

<style scoped>
.prose p {
  margin-bottom: 1em;
}
</style>
