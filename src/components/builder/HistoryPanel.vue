<script setup lang="ts">
import { useBuilderStore } from '../../stores/builder'
import { 
  ClockIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

const loadBuild = (build: any) => {
  builderStore.prompt = build.prompt
  builderStore.selectedTheme = build.theme
  builderStore.selectedFramework = build.framework
  builderStore.showToast(`Loaded build: ${build.prompt.substring(0, 50)}...`, 'info')
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-200">
    <div class="p-4 border-b border-gray-200">
      <h3 class="text-lg font-medium text-gray-900 flex items-center">
        <ClockIcon class="h-5 w-5 mr-2" />
        Build History
      </h3>
    </div>

    <div class="max-h-80 overflow-y-auto">
      <div v-if="builderStore.buildHistory.length === 0" class="p-4 text-center text-gray-500">
        <ClockIcon class="h-8 w-8 mx-auto mb-2 text-gray-300" />
        <p class="text-sm">No builds yet</p>
      </div>

      <div v-else class="divide-y divide-gray-200">
        <div
          v-for="build in builderStore.buildHistory"
          :key="build.id"
          class="p-4 hover:bg-gray-50 transition-colors"
        >
          <div class="flex items-start justify-between">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{ build.prompt }}
              </p>
              <div class="mt-1 flex items-center space-x-2 text-xs text-gray-500">
                <span class="capitalize">{{ build.theme }}</span>
                <span>•</span>
                <span class="capitalize">{{ build.framework }}</span>
                <span>•</span>
                <span>{{ formatDate(build.createdAt) }}</span>
              </div>
            </div>
            
            <div class="flex items-center space-x-1 ml-2">
              <button
                type="button"
                class="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Load Build"
                @click="loadBuild(build)"
              >
                <ArrowPathIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Preview"
              >
                <EyeIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="p-1 text-gray-400 hover:text-gray-600 rounded"
                title="Download"
              >
                <ArrowDownTrayIcon class="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>