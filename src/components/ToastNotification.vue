<script setup lang="ts">
import { computed } from 'vue'
import { useBuilderStore } from '../stores/builder'
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon, 
  InformationCircleIcon,
  XMarkIcon 
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()

const iconComponent = computed(() => {
  switch (builderStore.toast.type) {
    case 'success':
      return CheckCircleIcon
    case 'error':
      return ExclamationCircleIcon
    case 'info':
      return InformationCircleIcon
    default:
      return InformationCircleIcon
  }
})

const bgColor = computed(() => {
  switch (builderStore.toast.type) {
    case 'success':
      return 'bg-green-50 border-green-200'
    case 'error':
      return 'bg-red-50 border-red-200'
    case 'info':
      return 'bg-blue-50 border-blue-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
})

const textColor = computed(() => {
  switch (builderStore.toast.type) {
    case 'success':
      return 'text-green-800'
    case 'error':
      return 'text-red-800'
    case 'info':
      return 'text-blue-800'
    default:
      return 'text-gray-800'
  }
})

const iconColor = computed(() => {
  switch (builderStore.toast.type) {
    case 'success':
      return 'text-green-400'
    case 'error':
      return 'text-red-400'
    case 'info':
      return 'text-blue-400'
    default:
      return 'text-gray-400'
  }
})

const closeToast = () => {
  builderStore.toast.show = false
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="builderStore.toast.show"
      class="fixed top-4 right-4 z-50 max-w-sm w-full"
    >
      <div 
        class="rounded-lg border p-4 shadow-lg"
        :class="bgColor"
      >
        <div class="flex items-start">
          <component 
            :is="iconComponent" 
            class="h-5 w-5 mt-0.5 flex-shrink-0"
            :class="iconColor"
          />
          <div class="ml-3 flex-1">
            <p 
              class="text-sm font-medium"
              :class="textColor"
            >
              {{ builderStore.toast.message }}
            </p>
          </div>
          <button
            type="button"
            class="ml-4 inline-flex rounded-md hover:bg-black hover:bg-opacity-10 p-1.5"
            @click="closeToast"
          >
            <XMarkIcon 
              class="h-4 w-4"
              :class="textColor"
            />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>