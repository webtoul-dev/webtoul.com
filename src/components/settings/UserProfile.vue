<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../../stores/builder'
import { useBuilderStore } from '../../stores/builder'

const userStore = useUserStore()
const builderStore = useBuilderStore()

const isEditing = ref(false)
const form = ref({
  name: userStore.user.name,
  email: userStore.user.email,
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

const saveProfile = () => {
  userStore.updateProfile({
    name: form.value.name,
    email: form.value.email
  })
  isEditing.value = false
  builderStore.showToast('Profile updated successfully', 'success')
}

const cancelEdit = () => {
  form.value.name = userStore.user.name
  form.value.email = userStore.user.email
  isEditing.value = false
}

const changePassword = () => {
  if (form.value.newPassword !== form.value.confirmPassword) {
    builderStore.showToast('Passwords do not match', 'error')
    return
  }
  
  // Mock password change
  builderStore.showToast('Password changed successfully', 'success')
  form.value.currentPassword = ''
  form.value.newPassword = ''
  form.value.confirmPassword = ''
}
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900">Profile Information</h3>
      <p class="mt-1 text-sm text-gray-600">
        Update your account profile information and email address.
      </p>
    </div>

    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <span class="text-primary-600 text-xl font-bold">
              {{ userStore.user.name.split(' ').map(n => n[0]).join('') }}
            </span>
          </div>
          <div>
            <h4 class="text-lg font-medium text-gray-900">{{ userStore.user.name }}</h4>
            <p class="text-sm text-gray-500">{{ userStore.user.plan }} Plan</p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              v-model="form.name"
              type="text"
              :disabled="!isEditing"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              v-model="form.email"
              type="email"
              :disabled="!isEditing"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-50"
            />
          </div>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            v-if="isEditing"
            type="button"
            class="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            @click="cancelEdit"
          >
            Cancel
          </button>
          <button
            type="button"
            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            @click="isEditing ? saveProfile() : isEditing = true"
          >
            {{ isEditing ? 'Save Changes' : 'Edit Profile' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Password Change -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="space-y-4">
        <div>
          <h4 class="text-lg font-medium text-gray-900">Change Password</h4>
          <p class="mt-1 text-sm text-gray-600">
            Update your password to keep your account secure.
          </p>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input
              v-model="form.currentPassword"
              type="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
              <input
                v-model="form.newPassword"
                type="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                v-model="form.confirmPassword"
                type="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="button"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              @click="changePassword"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>