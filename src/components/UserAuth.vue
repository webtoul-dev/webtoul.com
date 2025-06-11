<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300"
  >
    <div
      class="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col gap-6"
    >
      <div class="flex flex-col items-center gap-2">
        <img src="/logo.svg" alt="Logo" class="h-12 mb-2" />
        <h1 class="text-2xl font-bold text-blue-700">Sign in to Webtoul</h1>
        <p class="text-gray-500 text-center text-sm">
          Access your AI website builder account
        </p>
      </div>
      <form @submit.prevent="handleEmailLogin" class="flex flex-col gap-4">
        <label class="flex flex-col gap-1">
          <span class="text-gray-700 font-medium">Email</span>
          <input
            v-model="email"
            type="email"
            required
            placeholder="you@email.com"
            class="rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            autocomplete="email"
          />
        </label>
        <button
          type="submit"
          class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          :disabled="loading"
        >
          <span v-if="!loading">Send Login Link</span>
          <span v-else>Sending...</span>
        </button>
      </form>
      <div class="flex items-center gap-2 my-2">
        <div class="flex-1 h-px bg-gray-200"></div>
        <span class="text-gray-400 text-xs">OR</span>
        <div class="flex-1 h-px bg-gray-200"></div>
      </div>
      <button
        @click="handleGoogleLogin"
        class="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition font-medium"
        :disabled="loading"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          class="h-5 w-5"
        />
        Continue with Google
      </button>
      <p v-if="message" class="text-center text-green-600 text-sm mt-2">
        {{ message }}
      </p>
      <p v-if="error" class="text-center text-red-500 text-sm mt-2">
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  signInWithEmailLink,
  signInWithPopup,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const loading = ref(false);
const message = ref("");
const error = ref("");

const actionCodeSettings = {
  url: window.location.origin + "/authEmail",
  handleCodeInApp: true,
};

const handleEmailLogin = async () => {
  loading.value = true;
  error.value = "";
  message.value = "";
  try {
    // TODO: Replace with your backend/email magic link logic
    await sendSignInLinkToEmail(auth, email.value, actionCodeSettings).then(
      (message.value = "A magic login link has been sent to your email.")
    );
    email.value = "";
  } catch (e) {
    error.value = "Failed to send magic link. Please try again.";
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  loading.value = true;
  error.value = "";
  message.value = "";

  try {
    // TODO: Replace with your Google OAuth logic
    await signInWithPopup(auth, new GoogleAuthProvider()).then((result) => {
      router.push("/editor");
    });
    message.value = "Google login successful (demo).";
  } catch (e) {
    error.value = "Google login failed. Please try again.";
    console.error(e);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
