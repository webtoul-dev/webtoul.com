<script setup lang="ts">
import { useBuilderStore } from '../../stores/builder'

const builderStore = useBuilderStore()

const frameworks = [
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg'
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    description: 'Popular CSS framework',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg'
  },
  {
    id: 'vuetify',
    name: 'Vuetify',
    description: 'Material Design for Vue',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuetify.svg'
  }
]
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-3">
      Framework
    </label>
    <div class="space-y-2">
      <label
        v-for="framework in frameworks"
        :key="framework.id"
        class="flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:bg-gray-50"
        :class="builderStore.selectedFramework === framework.id
          ? 'border-primary-500 bg-primary-50'
          : 'border-gray-200'"
      >
        <input
          v-model="builderStore.selectedFramework"
          :value="framework.id"
          type="radio"
          class="sr-only"
        />
        <div class="flex items-center flex-1">
          <div class="w-6 h-6 mr-3 flex items-center justify-center">
            <img 
              :src="framework.logo" 
              :alt="framework.name"
              class="w-5 h-5"
            />
          </div>
          <div>
            <div class="font-medium text-sm text-gray-900">{{ framework.name }}</div>
            <div class="text-xs text-gray-500">{{ framework.description }}</div>
          </div>
        </div>
        <div
          class="w-4 h-4 border-2 rounded-full flex items-center justify-center"
          :class="builderStore.selectedFramework === framework.id
            ? 'border-primary-500'
            : 'border-gray-300'"
        >
          <div
            v-if="builderStore.selectedFramework === framework.id"
            class="w-2 h-2 bg-primary-500 rounded-full"
          ></div>
        </div>
      </label>
    </div>
  </div>
</template>