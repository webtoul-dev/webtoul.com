<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase";
import { signInWithEmailLink } from "firebase/auth";

const router = useRouter();
const error = ref("");
const loading = ref(true);

onMounted(async () => {
  try {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // Optionally prompt user for email if not found
      email = window.prompt("Please provide your email for confirmation");
    }
    if (email && signInWithEmailLink) {
      await signInWithEmailLink(auth, email, window.location.href);
      window.localStorage.removeItem("emailForSignIn");
      router.replace("/editor");
    } else {
      error.value = "Invalid sign-in link or missing email.";
    }
  } catch (e) {
    error.value = "Sign-in failed. Please try again.";
    console.error(e);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div v-if="loading" class="text-blue-600">Signing you in...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
  </div>
</template>
