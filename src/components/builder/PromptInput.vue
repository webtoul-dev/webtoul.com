<script setup lang="ts">
import { useBuilderStore } from '../../stores/builder'
import { SparklesIcon } from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()

const suggestions = [
  'Create a modern SaaS landing page with pricing tiers',
  'Build a restaurant website with menu and reservations',
  'Design a portfolio site for a photographer',
  'Make an e-commerce store for handmade crafts'
]

const applySuggestion = (suggestion: string) => {
  builderStore.prompt = suggestion
}
</script>

<template>
  <div class="space-y-4">
    <div class="relative">
      <textarea
        v-model="builderStore.prompt"
        placeholder="Describe the website you want to create... e.g., 'Create a modern marketing site for a tech startup with hero section, features, pricing, and contact form'"
        rows="3"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        :disabled="builderStore.isLoading"
      />
      <div class="absolute bottom-3 right-3">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          :disabled="builderStore.isLoading || !builderStore.prompt.trim()"
          @click="builderStore.generateWebsite"
        >
          <SparklesIcon 
            class="h-4 w-4 mr-2"
            :class="builderStore.isLoading ? 'animate-spin' : ''"
          />
          {{ builderStore.isLoading ? 'Generating...' : 'Generate' }}
        </button>
      </div>
    </div>

    <!-- Suggestions -->
    <div>
      <p class="text-sm text-gray-600 mb-2">Try these suggestions:</p>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="suggestion in suggestions"
          :key="suggestion"
          type="button"
          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
          @click="applySuggestion(suggestion)"
        >
          {{ suggestion }}
        </button>
      </div>
    </div>
  </div>
</template>