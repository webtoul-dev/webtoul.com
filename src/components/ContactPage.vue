<template>
  <div
    class="min-h-screen text-left bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Contact Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions about our AI website builder? We'd love to hear from
          you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700"
                >Name</label
              >
              <input
                id="name"
                v-model="formData.name"
                type="text"
                required
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700"
                >Email</label
              >
              <input
                id="email"
                v-model="formData.email"
                type="email"
                required
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700"
                >Subject</label
              >
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >Message</label
              >
              <textarea
                id="message"
                v-model="formData.message"
                rows="4"
                required
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="bg-white rounded-2xl shadow-xl p-8 lg:mt-0">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <a
                :href="'mailto:' + contactInfo.email"
                class="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {{ contactInfo.email }}
              </a>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                :href="'tel:' + contactInfo.phone"
                class="text-blue-600 hover:text-blue-700 transition-colors"
              >
                {{ contactInfo.phone }}
              </a>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p class="text-gray-600">{{ contactInfo.address }}</p>
            </div>

            <div class="pt-6 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">
                Office Hours
              </h3>
              <ul class="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div
      v-if="showToast"
      class="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex items-center space-x-3"
      :class="{
        'bg-green-50 border border-green-200': toastType === 'success',
        'bg-red-50 border border-red-200': toastType === 'error',
      }"
    >
      <span
        class="text-sm"
        :class="{
          'text-green-800': toastType === 'success',
          'text-red-800': toastType === 'error',
        }"
        >{{ toastMessage }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import contactInfo from "../data/contact";

// Replace this with your actual access key from web3forms.com
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const formData = reactive({
  access_key: WEB3FORMS_ACCESS_KEY,
  name: "",
  email: "",
  subject: "",
  message: "",
  from_name: "Webtoul Contact Form",
});

const isSubmitting = ref(false);
const showToast = ref(false);
const toastMessage = ref("");
const toastType = ref("success");

const showNotification = (message, type = "success") => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 5000);
};

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      // Success notification
      showNotification("Thank you! Your message has been sent successfully.");

      // Reset form (except access_key)
      formData.name = "";
      formData.email = "";
      formData.subject = "";
      formData.message = "";
    } else {
      throw new Error(data.message || "Failed to send message");
    }
  } catch (error) {
    showNotification(
      error.message ||
        "Sorry, there was an error sending your message. Please try again.",
      "error"
    );
  } finally {
    isSubmitting.value = false;
  }
};
</script>
