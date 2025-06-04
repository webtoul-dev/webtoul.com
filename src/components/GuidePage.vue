<template>
  <div class="flex min-h-screen bg-slate-50">
    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r shadow-sm flex flex-col">
      <div class="p-6 border-b">
        <h2 class="text-xl font-bold text-blue-600 mb-2">Guides</h2>
      </div>
      <nav class="flex-1 overflow-y-auto">
        <ul>
          <li v-for="guide in guides" :key="guide.id">
            <button
              class="w-full text-left px-6 py-3 hover:bg-blue-50 focus:bg-blue-100 transition font-medium text-slate-700"
              :class="{ 'bg-blue-100 text-blue-700': guide.id === selectedId }"
              @click="$router.push({ name: 'Guide', params: { id: guide.id } })"
            >
              {{ guide.title }}
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
          class="prose max-w-none text-slate-800"
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

const route = useRoute();
const selectedId = computed(() => route.params.id || guides[0].id);
const currentGuide = computed(() =>
  guides.find((g) => g.id === selectedId.value)
);

// Simple formatting: convert line breaks to <br> and double line breaks to <p>
const formattedContent = computed(() => {
  if (!currentGuide.value) return "";
  return currentGuide.value.content
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^/, "<p>")
    .replace(/$/, "</p>");
});
</script>

<style scoped>
.prose p {
  margin-bottom: 1em;
}
</style>
