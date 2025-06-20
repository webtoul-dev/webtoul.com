<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 right-0 z-50">
    <div
      class="bg-gradient-to-br from-blue-50 to-indigo-100 backdrop-blur-sm border border-blue-100 shadow-2xl mx-4 mb-4 rounded-2xl"
    >
      <div class="max-w-7xl mx-auto px-6 py-6">
        <div class="md:flex items-center justify-between gap-8">
          <div class="md:flex-1 mb-4 md:mb-0">
            <p class="text-gray-700 text-base leading-relaxed">
              We use cookies to enhance your browsing experience, serve
              personalized content, and analyze our traffic. By clicking "Accept
              All", you consent to our use of cookies.
            </p>
          </div>
          <div
            class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4"
          >
            <button
              @click="openPreferences"
              class="inline-flex justify-center px-6 py-2.5 border-2 border-blue-600 shadow-sm text-sm font-medium rounded-xl text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cookie Settings
            </button>
            <button
              @click="acceptAll"
              class="inline-flex justify-center px-6 py-2.5 border-2 border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Cookie Preferences Modal -->
  <div
    v-if="showPreferences"
    class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-gradient-to-br from-blue-50/95 to-indigo-100/95 backdrop-blur-sm rounded-2xl max-w-2xl w-full mx-4 overflow-hidden shadow-2xl border border-blue-100"
    >
      <div class="px-8 py-6 bg-white/50 border-b border-blue-100">
        <h3 class="text-xl font-semibold text-gray-900">Cookie Preferences</h3>
      </div>
      <div class="px-8 py-6 max-h-[60vh] overflow-y-auto">
        <div class="space-y-8">
          <!-- Essential Cookies -->
          <div
            class="flex items-start bg-white/80 p-4 rounded-xl border border-blue-100"
          >
            <div class="flex items-center h-5">
              <input
                id="essential"
                type="checkbox"
                checked
                disabled
                class="h-4 w-4 text-blue-600 border-gray-300 rounded-lg"
              />
            </div>
            <div class="ml-3">
              <label for="essential" class="font-semibold text-gray-900"
                >Essential Cookies</label
              >
              <p class="text-gray-600 text-sm mt-1">
                These cookies are necessary for the website to function and
                cannot be switched off.
              </p>
            </div>
          </div>

          <!-- Analytics Cookies -->
          <div
            class="flex items-start bg-white/80 p-4 rounded-xl border border-blue-100"
          >
            <div class="flex items-center h-5">
              <input
                id="analytics"
                v-model="preferences.analytics"
                type="checkbox"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded-lg cursor-pointer"
              />
            </div>
            <div class="ml-3">
              <label for="analytics" class="font-semibold text-gray-900"
                >Analytics Cookies</label
              >
              <p class="text-gray-600 text-sm mt-1">
                These cookies help us understand how visitors interact with our
                website.
              </p>
            </div>
          </div>

          <!-- Marketing Cookies -->
          <div
            class="flex items-start bg-white/80 p-4 rounded-xl border border-blue-100"
          >
            <div class="flex items-center h-5">
              <input
                id="marketing"
                v-model="preferences.marketing"
                type="checkbox"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded-lg cursor-pointer"
              />
            </div>
            <div class="ml-3">
              <label for="marketing" class="font-semibold text-gray-900"
                >Marketing Cookies</label
              >
              <p class="text-gray-600 text-sm mt-1">
                These cookies are used to track visitors across websites to
                display relevant advertisements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-8 py-6 bg-white/50 border-t border-blue-100 flex justify-end"
      >
        <button
          @click="savePreferences"
          class="inline-flex justify-center px-6 py-2.5 border-2 border-transparent shadow-sm text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Save Preferences
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showBanner = ref(true);
const showPreferences = ref(false);
const preferences = ref({
  essential: true, // Always true and cannot be changed
  analytics: false,
  marketing: false,
});

// Check if user has already made their choice
onMounted(() => {
  const savedPreferences = localStorage.getItem("cookie-preferences");
  if (savedPreferences) {
    showBanner.value = false;
    preferences.value = {
      ...preferences.value,
      ...JSON.parse(savedPreferences),
    };
  }
});

const savePreferences = () => {
  localStorage.setItem("cookie-preferences", JSON.stringify(preferences.value));
  showBanner.value = false;
  showPreferences.value = false;
  applyPreferences();
};

const acceptAll = () => {
  preferences.value = {
    essential: true,
    analytics: true,
    marketing: true,
  };
  savePreferences();
};

const openPreferences = () => {
  showPreferences.value = true;
};

const applyPreferences = () => {
  // Implement cookie management based on preferences
  if (preferences.value.analytics) {
    // Enable analytics cookies (e.g., Google Analytics)
  }

  if (preferences.value.marketing) {
    // Enable marketing cookies
  }
};
</script>
