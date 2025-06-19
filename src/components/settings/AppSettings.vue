<script setup lang="ts">
import { useUserStore } from '../../stores/builder'
import { useBuilderStore } from '../../stores/builder'

const userStore = useUserStore()
const builderStore = useBuilderStore()

const resetSettings = () => {
  userStore.updateSettings({
    betaFeatures: false,
    notifications: true,
    autoSave: true
  })
  builderStore.showToast('Settings reset to defaults', 'success')
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900">Application Settings</h3>
      <p class="mt-1 text-sm text-gray-600">
        Configure your app preferences and feature settings.
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="space-y-6">
        <!-- Feature Toggles -->
        <div>
          <h4 class="text-base font-medium text-gray-900 mb-4">Features</h4>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <label class="text-sm font-medium text-gray-700">Beta Features</label>
                <p class="text-sm text-gray-500">Enable access to experimental features</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="userStore.settings.betaFeatures"
                  type="checkbox"
                  class="sr-only peer"
                  @change="builderStore.showToast('Beta features ' + (userStore.settings.betaFeatures ? 'enabled' : 'disabled'), 'info')"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <label class="text-sm font-medium text-gray-700">Notifications</label>
                <p class="text-sm text-gray-500">Receive build status and system notifications</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="userStore.settings.notifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <label class="text-sm font-medium text-gray-700">Auto Save</label>
                <p class="text-sm text-gray-500">Automatically save your work in progress</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="userStore.settings.autoSave"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Reset Settings -->
        <div class="pt-6 border-t border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="text-base font-medium text-gray-900">Reset Settings</h4>
              <p class="text-sm text-gray-500">Reset all settings to their default values</p>
            </div>
            <button
              type="button"
              class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              @click="resetSettings"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>