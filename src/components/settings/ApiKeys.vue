<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "../../stores/builder";
import { useBuilderStore } from "../../stores/builder";
import {
  EyeIcon,
  EyeSlashIcon,
  ClipboardIcon,
} from "@heroicons/vue/24/outline";

const userStore = useUserStore();
const builderStore = useBuilderStore();

const showApiKey = ref(false);
const newWebhookUrl = ref("");

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  builderStore.showToast("Copied to clipboard", "success");
};

const regenerateApiKey = () => {
  // Mock API key regeneration
  const newKey = "wt_" + Math.random().toString(36).substring(2, 18);
  userStore.updateUserProfile({ apiKey: newKey });
  builderStore.showToast("API key regenerated successfully", "success");
};

const addWebhook = () => {
  if (!newWebhookUrl.value.trim()) {
    builderStore.showToast("Please enter a webhook URL", "error");
    return;
  }

  builderStore.showToast("Webhook endpoint added", "success");
  newWebhookUrl.value = "";
};
</script>

<template>
  <div class="space-y-6">
    <div>
      <h3 class="text-lg font-medium text-gray-900">API Keys & Integrations</h3>
      <p class="mt-1 text-sm text-gray-600">
        Manage your API keys and webhook endpoints for external integrations.
      </p>
    </div>

    <!-- API Key Section -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="space-y-4">
        <div>
          <h4 class="text-base font-medium text-gray-900">API Key</h4>
          <p class="text-sm text-gray-500">
            Use this key to authenticate with the Webtoul API
          </p>
        </div>

        <div class="flex items-center space-x-3">
          <div class="flex-1">
            <div class="relative">
              <input
                :value="
                  showApiKey
                    ? userStore.user.apiKey
                    : '•'.repeat(userStore.user.apiKey.length)
                "
                type="text"
                readonly
                class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg font-mono text-sm"
              />
              <button
                type="button"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                @click="showApiKey = !showApiKey"
              >
                <EyeIcon v-if="!showApiKey" class="h-4 w-4" />
                <EyeSlashIcon v-else class="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            class="px-3 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            @click="copyToClipboard(userStore.user.apiKey)"
          >
            <ClipboardIcon class="h-4 w-4" />
          </button>

          <button
            type="button"
            class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            @click="regenerateApiKey"
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>

    <!-- Webhooks Section -->
    <div class="bg-white border border-gray-200 rounded-lg p-6">
      <div class="space-y-4">
        <div>
          <h4 class="text-base font-medium text-gray-900">Webhook Endpoints</h4>
          <p class="text-sm text-gray-500">
            Configure webhook URLs to receive build notifications
          </p>
        </div>

        <div class="space-y-3">
          <div class="flex space-x-3">
            <input
              v-model="newWebhookUrl"
              type="url"
              placeholder="https://your-site.com/webhooks/webtoul"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="button"
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              @click="addWebhook"
            >
              Add Webhook
            </button>
          </div>

          <div class="text-center text-gray-500 py-8">
            <p class="text-sm">No webhook endpoints configured</p>
          </div>
        </div>
      </div>
    </div>

    <!-- API Documentation -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div class="flex items-start space-x-3">
        <div class="flex-shrink-0">
          <div
            class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"
          >
            <span class="text-blue-600 text-sm font-medium">?</span>
          </div>
        </div>
        <div>
          <h4 class="text-base font-medium text-blue-900">API Documentation</h4>
          <p class="text-sm text-blue-700 mt-1">
            Learn how to integrate Webtoul into your applications with our
            comprehensive API docs.
          </p>
          <a
            href="#"
            class="inline-flex items-center mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View Documentation →
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
