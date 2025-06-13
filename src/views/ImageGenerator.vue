<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useBuilderStore } from '../stores/builder'
import { 
  SparklesIcon,
  ArrowDownTrayIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/vue/24/outline'

const builderStore = useBuilderStore()

const isGenerating = ref(false)
const prompt = ref('')
const selectedStyle = ref('realistic')
const selectedSize = ref('1024x1024')
const selectedQuality = ref('standard')

const generatedImages = ref<any[]>([])
const favorites = ref<string[]>([])

const styles = [
  { id: 'realistic', name: 'Realistic', description: 'Photorealistic images' },
  { id: 'artistic', name: 'Artistic', description: 'Artistic and creative style' },
  { id: 'cartoon', name: 'Cartoon', description: 'Cartoon and illustration style' },
  { id: 'abstract', name: 'Abstract', description: 'Abstract and conceptual' },
  { id: 'minimalist', name: 'Minimalist', description: 'Clean and simple design' }
]

const sizes = [
  { id: '512x512', name: '512×512', description: 'Square - Small' },
  { id: '1024x1024', name: '1024×1024', description: 'Square - Large' },
  { id: '1024x768', name: '1024×768', description: 'Landscape' },
  { id: '768x1024', name: '768×1024', description: 'Portrait' }
]

const qualities = [
  { id: 'standard', name: 'Standard', description: 'Good quality, faster generation' },
  { id: 'hd', name: 'HD', description: 'High quality, slower generation' }
]

const suggestions = [
  'A modern office workspace with natural lighting',
  'Abstract geometric patterns in blue and purple',
  'Minimalist product photography setup',
  'Futuristic city skyline at sunset',
  'Cozy coffee shop interior design',
  'Professional headshot background'
]

const mockImages = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Modern office workspace',
    style: 'realistic',
    size: '1024x1024',
    createdAt: new Date()
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
    prompt: 'Abstract geometric design',
    style: 'abstract',
    size: '1024x768',
    createdAt: new Date()
  }
]

const generateImage = async () => {
  if (!prompt.value.trim()) {
    builderStore.showToast('Please enter an image description', 'error')
    return
  }

  isGenerating.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const newImage = {
      id: Date.now().toString(),
      url: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400',
      prompt: prompt.value,
      style: selectedStyle.value,
      size: selectedSize.value,
      createdAt: new Date()
    }
    
    generatedImages.value.unshift(newImage)
    builderStore.showToast('Image generated successfully!', 'success')
    
  } catch (error) {
    builderStore.showToast('Failed to generate image', 'error')
  } finally {
    isGenerating.value = false
  }
}

const downloadImage = (imageUrl: string, filename: string) => {
  builderStore.showToast('Download started', 'info')
}

const toggleFavorite = (imageId: string) => {
  const index = favorites.value.indexOf(imageId)
  if (index > -1) {
    favorites.value.splice(index, 1)
    builderStore.showToast('Removed from favorites', 'info')
  } else {
    favorites.value.push(imageId)
    builderStore.showToast('Added to favorites', 'success')
  }
}

const applySuggestion = (suggestion: string) => {
  prompt.value = suggestion
}

const allImages = ref([...generatedImages.value, ...mockImages])
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-4">AI Image Generator</h2>
      
      <!-- Image Generation -->
      <div class="space-y-4">
        <div class="relative">
          <textarea
            v-model="prompt"
            placeholder="Describe the image you want to create... e.g., 'A modern office workspace with natural lighting and plants'"
            rows="3"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            :disabled="isGenerating"
          />
          <div class="absolute bottom-3 right-3">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              :disabled="isGenerating || !prompt.trim()"
              @click="generateImage"
            >
              <SparklesIcon 
                class="h-4 w-4 mr-2"
                :class="isGenerating ? 'animate-spin' : ''"
              />
              {{ isGenerating ? 'Generating...' : 'Generate Image' }}
            </button>
          </div>
        </div>

        <!-- Generation Options -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Style -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select
              v-model="selectedStyle"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option v-for="style in styles" :key="style.id" :value="style.id">
                {{ style.name }}
              </option>
            </select>
          </div>

          <!-- Size -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Size</label>
            <select
              v-model="selectedSize"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option v-for="size in sizes" :key="size.id" :value="size.id">
                {{ size.name }}
              </option>
            </select>
          </div>

          <!-- Quality -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Quality</label>
            <select
              v-model="selectedQuality"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option v-for="quality in qualities" :key="quality.id" :value="quality.id">
                {{ quality.name }}
              </option>
            </select>
          </div>
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

    <!-- Generation Progress -->
    <div v-if="isGenerating" class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex items-center space-x-3">
        <SparklesIcon class="h-5 w-5 text-primary-500 animate-spin" />
        <div>
          <p class="font-medium text-gray-900">Generating your image...</p>
          <p class="text-sm text-gray-500">This may take a few moments</p>
        </div>
      </div>
      <div class="mt-4 bg-gray-200 rounded-full h-2">
        <div class="bg-primary-500 h-2 rounded-full animate-pulse" style="width: 60%"></div>
      </div>
    </div>

    <!-- Images Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div
        v-for="image in [...generatedImages, ...mockImages]"
        :key="image.id"
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group"
      >
        <!-- Image -->
        <div class="relative aspect-square">
          <img
            :src="image.url"
            :alt="image.prompt"
            class="w-full h-full object-cover"
          />
          
          <!-- Overlay Actions -->
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="p-2 bg-white text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                title="Download"
                @click="downloadImage(image.url, `generated-${image.id}.jpg`)"
              >
                <ArrowDownTrayIcon class="h-4 w-4" />
              </button>
              <button
                type="button"
                class="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                :class="favorites.includes(image.id) ? 'text-red-500' : 'text-gray-700'"
                title="Add to Favorites"
                @click="toggleFavorite(image.id)"
              >
                <HeartIcon 
                  class="h-4 w-4"
                  :class="favorites.includes(image.id) ? 'fill-current' : ''"
                />
              </button>
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="p-4">
          <p class="text-sm text-gray-900 font-medium truncate mb-1">{{ image.prompt }}</p>
          <div class="flex items-center justify-between text-xs text-gray-500">
            <span class="capitalize">{{ image.style }}</span>
            <span>{{ image.size }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="generatedImages.length === 0 && mockImages.length === 0" class="text-center py-12">
      <SparklesIcon class="h-12 w-12 mx-auto text-gray-300 mb-4" />
      <p class="text-gray-500 mb-4">No images generated yet</p>
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        @click="prompt = suggestions[0]"
      >
        <SparklesIcon class="h-4 w-4 mr-2" />
        Generate Your First Image
      </button>
    </div>
  </div>
</template>