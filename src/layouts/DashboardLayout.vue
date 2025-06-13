<script setup lang="ts">
import { ref } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  Cog6ToothIcon,
  Bars3Icon
} from '@heroicons/vue/24/outline'
import Sidebar from '../components/Sidebar.vue'

const route = useRoute()
const sidebarOpen = ref(false)

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Builder', href: '/dashboard/builder', icon: WrenchScrewdriverIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
]

const closeSidebar = () => {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Mobile sidebar backdrop -->
    <div 
      v-if="sidebarOpen" 
      class="fixed inset-0 z-40 lg:hidden bg-gray-600 bg-opacity-75"
      @click="closeSidebar"
    ></div>

    <!-- Sidebar -->
    <Sidebar 
      :navigation="navigation" 
      :open="sidebarOpen" 
      @close="closeSidebar" 
    />

    <!-- Main content -->
    <div class="flex-1 flex flex-col lg:ml-64">
      <!-- Top navigation -->
      <div class="sticky top-0 z-10 bg-white shadow-sm border-b border-gray-200">
        <div class="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            class="lg:hidden -ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            @click="sidebarOpen = true"
          >
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" />
          </button>
          
          <div class="flex-1 min-w-0 lg:ml-0 ml-4">
            <h1 class="text-2xl font-bold text-gray-900 capitalize">
              {{ route.name === 'dashboard' ? 'Dashboard' : route.name }}
            </h1>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">JD</span>
              </div>
              <div class="hidden sm:block">
                <span class="text-sm font-medium text-gray-700">John Doe</span>
                <p class="text-xs text-gray-500">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Page content -->
      <main class="flex-1 p-4 sm:p-6 lg:p-8">
        <RouterView />
      </main>
    </div>
  </div>
</template>