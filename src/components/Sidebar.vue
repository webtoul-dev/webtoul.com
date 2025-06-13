<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { XMarkIcon } from '@heroicons/vue/24/outline'

interface NavigationItem {
  name: string
  href: string
  icon: any
}

defineProps<{
  navigation: NavigationItem[]
  open: boolean
}>()

defineEmits<{
  close: []
}>()

const route = useRoute()

const isActive = (href: string) => {
  return route.path === href
}
</script>

<template>
  <!-- Sidebar -->
  <div 
    class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none lg:border-r lg:border-gray-200"
    :class="open ? 'translate-x-0' : '-translate-x-full'"
  >
    <!-- Sidebar header -->
    <div class="flex h-16 items-center justify-between px-6 border-b border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-sm">W</span>
        </div>
        <span class="text-xl font-bold text-gray-900">Webtoul</span>
      </div>
      
      <button
        type="button"
        class="lg:hidden -mr-2 h-10 w-10 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
        @click="$emit('close')"
      >
        <span class="sr-only">Close sidebar</span>
        <XMarkIcon class="h-6 w-6" />
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-4 py-6 space-y-1">
      <RouterLink
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        class="group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200"
        :class="isActive(item.href) 
          ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500' 
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'"
        @click="$emit('close')"
      >
        <component 
          :is="item.icon" 
          class="mr-3 h-5 w-5 flex-shrink-0 transition-colors duration-200"
          :class="isActive(item.href) ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500'"
        />
        {{ item.name }}
      </RouterLink>
    </nav>

    <!-- User info -->
    <div class="p-4 border-t border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-gray-600 text-sm font-medium">JD</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">John Doe</p>
          <p class="text-xs text-gray-500 truncate">Pro Plan</p>
        </div>
      </div>
    </div>
  </div>
</template>