<script setup lang="ts">
import { useBuilderStore } from '../../stores/builder'

const builderStore = useBuilderStore()

const themes = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean lines, minimal design',
    preview: 'bg-gradient-to-br from-gray-900 to-gray-700'
  },
  {
    id: 'vibrant',
    name: 'Vibrant', 
    description: 'Bold colors, energetic feel',
    preview: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated, professional',
    preview: 'bg-gradient-to-br from-blue-600 to-indigo-600'
  }
]
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-3">
      AI Theme Presets
    </label>
    <div class="grid grid-cols-3 gap-3">
      <button
        v-for="theme in themes"
        :key="theme.id"
        type="button"
        class="relative p-3 border-2 rounded-lg text-left transition-all hover:shadow-md"
        :class="builderStore.selectedTheme === theme.id
          ? 'border-primary-500 ring-2 ring-primary-200'
          : 'border-gray-200 hover:border-gray-300'"
        @click="builderStore.selectedTheme = theme.id"
      >
        <div 
          class="w-full h-12 rounded mb-2"
          :class="theme.preview"
        ></div>
        <h4 class="font-medium text-sm text-gray-900">{{ theme.name }}</h4>
        <p class="text-xs text-gray-500">{{ theme.description }}</p>
        
        <!-- Selected indicator -->
        <div
          v-if="builderStore.selectedTheme === theme.id"
          class="absolute top-2 right-2 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center"
        >
          <div class="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </button>
    </div>
  </div>
</template>