<script setup lang="ts">
import { useBuilderStore } from '../stores/builder'
import PromptInput from '../components/builder/PromptInput.vue'
import ThemeSelector from '../components/builder/ThemeSelector.vue'
import FrameworkSelector from '../components/builder/FrameworkSelector.vue'
import PreviewPane from '../components/builder/PreviewPane.vue'
import CustomizationPanel from '../components/builder/CustomizationPanel.vue'
import HistoryPanel from '../components/builder/HistoryPanel.vue'

const builderStore = useBuilderStore()
</script>

<template>
  <div class="space-y-6">
    <!-- Builder Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-4">AI Website Builder</h2>
      
      <!-- Prompt Input -->
      <PromptInput />
      
      <!-- Options Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <ThemeSelector />
        <FrameworkSelector />
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Preview Area -->
      <div class="lg:col-span-2">
        <PreviewPane />
      </div>
      
      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Customization Panel -->
        <div v-if="builderStore.showCustomization">
          <CustomizationPanel />
        </div>
        
        <!-- History Panel -->
        <HistoryPanel />
      </div>
    </div>
  </div>
</template>