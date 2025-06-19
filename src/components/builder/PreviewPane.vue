<script setup lang="ts">
import { ref, computed } from 'vue'
import { useBuilderStore } from '../../stores/builder'
import { 
  ComputerDesktopIcon, 
  DeviceTabletIcon, 
  DevicePhoneMobileIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()
const previewMode = ref('desktop')
const iframeKey = ref(0)

const previewModes = [
  { id: 'desktop', name: 'Desktop', icon: ComputerDesktopIcon, width: '100%' },
  { id: 'tablet', name: 'Tablet', icon: DeviceTabletIcon, width: '768px' },
  { id: 'mobile', name: 'Mobile', icon: DevicePhoneMobileIcon, width: '375px' }
]

const previewContent = computed(() => {
  if (!builderStore.generatedWebsite) {
    return `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        padding: 2rem;
      ">
        <div style="
          background: rgba(255,255,255,0.1);
          padding: 3rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        ">
          <h2 style="font-size: 2rem; margin-bottom: 1rem; font-weight: bold;">Ready to Build?</h2>
          <p style="font-size: 1.1rem; opacity: 0.9; margin-bottom: 1.5rem;">
            Enter a prompt above to generate your website with AI
          </p>
          <div style="
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: rgba(255,255,255,0.2);
            border-radius: 0.5rem;
            font-size: 0.9rem;
          ">
            ✨ Powered by AI
          </div>
        </div>
      </div>
    `
  }
  
  return builderStore.generatedWebsite.html
})

const refreshPreview = () => {
  iframeKey.value++
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900">Preview</h3>
      
      <div class="flex items-center space-x-4">
        <!-- Device Toggle -->
        <div class="flex items-center bg-gray-100 rounded-lg p-1">
          <button
            v-for="mode in previewModes"
            :key="mode.id"
            type="button"
            class="p-2 rounded-md transition-colors"
            :class="previewMode === mode.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-500 hover:text-gray-700'"
            @click="previewMode = mode.id"
            :title="mode.name"
          >
            <component :is="mode.icon" class="h-4 w-4" />
          </button>
        </div>
        
        <!-- Refresh Button -->
        <button
          type="button"
          class="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
          @click="refreshPreview"
          title="Refresh Preview"
        >
          <ArrowPathIcon class="h-4 w-4" />
        </button>
      </div>
    </div>

    <div class="p-4">
      <div class="bg-gray-100 rounded-lg p-4 min-h-[500px] flex items-center justify-center">
        <div 
          class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300"
          :style="{ width: previewModes.find(m => m.id === previewMode)?.width, maxWidth: '100%' }"
        >
          <iframe
            :key="iframeKey"
            :srcdoc="previewContent"
            class="w-full h-[500px] border-0"
            title="Website Preview"
          />
        </div>
      </div>
    </div>
  </div>
</template>