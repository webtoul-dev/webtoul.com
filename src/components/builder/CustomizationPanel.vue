<script setup lang="ts">
import { ref } from 'vue'
import { useBuilderStore } from '../../stores/builder'
import { 
  SwatchIcon,
  Squares2X2Icon,
  PencilIcon,
  ArrowDownTrayIcon
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()
const activeTab = ref('colors')

const tabs = [
  { id: 'colors', name: 'Colors', icon: SwatchIcon },
  { id: 'layout', name: 'Layout', icon: Squares2X2Icon },
  { id: 'content', name: 'Content', icon: PencilIcon }
]

const colorPresets = [
  { name: 'Blue', primary: '#3b82f6', secondary: '#64748b' },
  { name: 'Purple', primary: '#8b5cf6', secondary: '#64748b' },
  { name: 'Green', primary: '#10b981', secondary: '#64748b' },
  { name: 'Red', primary: '#ef4444', secondary: '#64748b' }
]

const applyColorPreset = (preset: typeof colorPresets[0]) => {
  builderStore.customization.colors.primary = preset.primary
  builderStore.customization.colors.secondary = preset.secondary
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900">Customize</h3>
      <button
        type="button"
        class="inline-flex items-center px-3 py-1.5 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition-colors"
        @click="builderStore.exportWebsite"
      >
        <ArrowDownTrayIcon class="h-4 w-4 mr-1" />
        Export
      </button>
    </div>

    <!-- Tabs -->
    <div class="border-b border-gray-200">
      <nav class="flex space-x-4 px-4" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          type="button"
          class="flex items-center py-2 px-1 border-b-2 font-medium text-sm transition-colors"
          :class="activeTab === tab.id
            ? 'border-primary-500 text-primary-600'
            : 'border-transparent text-gray-500 hover:text-gray-700'"
          @click="activeTab = tab.id"
        >
          <component :is="tab.icon" class="h-4 w-4 mr-1" />
          {{ tab.name }}
        </button>
      </nav>
    </div>

    <div class="p-4 space-y-4">
      <!-- Colors Tab -->
      <div v-if="activeTab === 'colors'" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Color Presets</label>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="preset in colorPresets"
              :key="preset.name"
              type="button"
              class="flex items-center p-2 border rounded-lg hover:bg-gray-50 transition-colors"
              @click="applyColorPreset(preset)"
            >
              <div 
                class="w-4 h-4 rounded mr-2"
                :style="{ backgroundColor: preset.primary }"
              ></div>
              <span class="text-sm">{{ preset.name }}</span>
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
          <input
            v-model="builderStore.customization.colors.primary"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Background</label>
          <input
            v-model="builderStore.customization.colors.background"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>
      </div>

      <!-- Layout Tab -->
      <div v-if="activeTab === 'layout'" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-3">Page Sections</label>
          <div class="space-y-3">
            <label class="flex items-center">
              <input
                v-model="builderStore.customization.layout.showHero"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-sm text-gray-700">Hero Section</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="builderStore.customization.layout.showFeatures"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-sm text-gray-700">Features</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="builderStore.customization.layout.showPricing"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-sm text-gray-700">Pricing</span>
            </label>
            <label class="flex items-center">
              <input
                v-model="builderStore.customization.layout.showContact"
                type="checkbox"
                class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span class="ml-2 text-sm text-gray-700">Contact Form</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Content Tab -->
      <div v-if="activeTab === 'content'" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
          <input
            v-model="builderStore.customization.content.title"
            type="text"
            placeholder="Enter site title"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
          <input
            v-model="builderStore.customization.content.subtitle"
            type="text"
            placeholder="Enter subtitle"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
          <textarea
            v-model="builderStore.customization.content.description"
            rows="3"
            placeholder="Enter description"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>