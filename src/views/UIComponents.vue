<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useBuilderStore } from '../stores/builder'
import { 
  SparklesIcon,
  ClipboardDocumentIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()

const isGenerating = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('all')
const selectedFramework = ref('tailwind')

const prompt = ref('')
const generatedComponents = ref<any[]>([])

const categories = [
  { id: 'all', name: 'All Components' },
  { id: 'buttons', name: 'Buttons' },
  { id: 'forms', name: 'Forms' },
  { id: 'cards', name: 'Cards' },
  { id: 'navigation', name: 'Navigation' },
  { id: 'modals', name: 'Modals' },
  { id: 'tables', name: 'Tables' }
]

const frameworks = [
  { id: 'tailwind', name: 'Tailwind CSS' },
  { id: 'bootstrap', name: 'Bootstrap' },
  { id: 'vuetify', name: 'Vuetify' }
]

const suggestions = [
  'Create a modern pricing card with gradient background',
  'Design a contact form with validation states',
  'Build a responsive navigation menu with dropdown',
  'Make a testimonial card with avatar and rating'
]

const mockComponents = [
  {
    id: '1',
    name: 'Gradient Button',
    category: 'buttons',
    framework: 'tailwind',
    code: `<button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
  Click Me
</button>`,
    preview: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  },
  {
    id: '2',
    name: 'Contact Form',
    category: 'forms',
    framework: 'tailwind',
    code: `<form class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">Name</label>
    <input type="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
  </div>
  <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
</form>`,
    preview: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
  }
]

const generateComponent = async () => {
  if (!prompt.value.trim()) {
    builderStore.showToast('Please enter a component description', 'error')
    return
  }

  isGenerating.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newComponent = {
      id: Date.now().toString(),
      name: prompt.value.substring(0, 30) + '...',
      category: 'buttons',
      framework: selectedFramework.value,
      code: `<div class="p-4 bg-white rounded-lg shadow-md">
  <h3 class="text-lg font-semibold mb-2">Generated Component</h3>
  <p class="text-gray-600">${prompt.value}</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Action</button>
</div>`,
      preview: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200'
    }
    
    generatedComponents.value.unshift(newComponent)
    builderStore.showToast('Component generated successfully!', 'success')
    prompt.value = ''
    
  } catch (error) {
    builderStore.showToast('Failed to generate component', 'error')
  } finally {
    isGenerating.value = false
  }
}

const copyCode = (code: string) => {
  navigator.clipboard.writeText(code)
  builderStore.showToast('Code copied to clipboard!', 'success')
}

const applySuggestion = (suggestion: string) => {
  prompt.value = suggestion
}

const filteredComponents = ref([...mockComponents, ...generatedComponents.value])
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-4">AI UI Component Generator</h2>
      
      <!-- Component Generation -->
      <div class="space-y-4">
        <div class="relative">
          <textarea
            v-model="prompt"
            placeholder="Describe the UI component you want to create... e.g., 'Create a modern pricing card with gradient background and hover effects'"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            :disabled="isGenerating"
          />
          <div class="absolute bottom-3 right-3">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              :disabled="isGenerating || !prompt.trim()"
              @click="generateComponent"
            >
              <SparklesIcon 
                class="h-4 w-4 mr-2"
                :class="isGenerating ? 'animate-spin' : ''"
              />
              {{ isGenerating ? 'Generating...' : 'Generate Component' }}
            </button>
          </div>
        </div>

        <!-- Framework Selector -->
        <div class="flex items-center space-x-4">
          <label class="text-sm font-medium text-gray-700">Framework:</label>
          <select
            v-model="selectedFramework"
            class="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option v-for="framework in frameworks" :key="framework.id" :value="framework.id">
              {{ framework.name }}
            </option>
          </select>
        </div>

        <!-- Suggestions -->
        <div>
          <p class="text-sm text-gray-600 mb-2">Try these suggestions:</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="suggestion in suggestions"
              :key="suggestion"
              type="button"
              class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              @click="applySuggestion(suggestion)"
            >
              {{ suggestion }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <!-- Search -->
        <div class="relative">
          <MagnifyingGlassIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search components..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <!-- Category Filter -->
        <div class="flex items-center space-x-2">
          <label class="text-sm font-medium text-gray-700">Category:</label>
          <select
            v-model="selectedCategory"
            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Components Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="component in [...generatedComponents, ...mockComponents]"
        :key="component.id"
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
      >
        <!-- Preview -->
        <div class="h-32 bg-gray-100 flex items-center justify-center">
          <div class="text-gray-500 text-sm">Component Preview</div>
        </div>

        <!-- Content -->
        <div class="p-4">
          <div class="flex items-center justify-between mb-2">
            <h3 class="font-medium text-gray-900">{{ component.name }}</h3>
            <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full capitalize">
              {{ component.category }}
            </span>
          </div>

          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-500 capitalize">{{ component.framework }}</span>
            <div class="flex items-center space-x-2">
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
                title="Copy Code"
                @click="copyCode(component.code)"
              >
                <ClipboardDocumentIcon class="h-4 w-4" />
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

    <!-- Empty State -->
    <div v-if="filteredComponents.length === 0" class="text-center py-12">
      <Squares2X2Icon class="h-12 w-12 mx-auto text-gray-300 mb-4" />
      <p class="text-gray-500 mb-4">No components found</p>
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        @click="prompt = suggestions[0]"
      >
        <SparklesIcon class="h-4 w-4 mr-2" />
        Generate Your First Component
      </button>
    </div>
  </div>
</template>