import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import {
  getAuth,
  onAuthStateChanged,
  updateEmail,
  updateProfile,
  updatePassword,
  signOut,
} from "firebase/auth";

export interface BuildHistory {
  id: string;
  prompt: string;
  theme: string;
  framework: string;
  createdAt: Date;
  preview?: string;
}

export interface GeneratedWebsite {
  html: string;
  css: string;
  components: string[];
  images: string[];
}

export const useBuilderStore = defineStore("builder", () => {
  // State
  const isLoading = ref(false);
  const prompt = ref("");
  const selectedTheme = ref("modern");
  const selectedFramework = ref("tailwind");
  const generatedWebsite = ref<GeneratedWebsite | null>(null);
  const buildHistory = ref<BuildHistory[]>([]);
  const showCustomization = ref(false);

  // Toast notifications
  const toast = reactive({
    show: false,
    message: "",
    type: "success" as "success" | "error" | "info",
  });

  // Customization settings
  const customization = reactive({
    colors: {
      primary: "#3b82f6",
      secondary: "#64748b",
      accent: "#f59e0b",
      background: "#ffffff",
      text: "#1f2937",
    },
    layout: {
      showHero: true,
      showFeatures: true,
      showPricing: true,
      showContact: true,
    },
    content: {
      title: "",
      subtitle: "",
      description: "",
    },
  });

  // Actions
  const generateWebsite = async () => {
    if (!prompt.value.trim()) {
      showToast("Please enter a prompt", "error");
      return;
    }

    isLoading.value = true;

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock generated website data
      const mockWebsite: GeneratedWebsite = {
        html: `
          <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <header class="bg-white shadow-sm">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <h1 class="text-2xl font-bold text-gray-900">Generated Website</h1>
              </div>
            </header>
            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Welcome to Your New Site</h2>
                <p class="text-xl text-gray-600 mb-8">${prompt.value}</p>
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </main>
          </div>
        `,
        css: "",
        components: ["Header", "Hero", "Features"],
        images: [
          "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        ],
      };

      generatedWebsite.value = mockWebsite;

      // Add to history
      const historyItem: BuildHistory = {
        id: Date.now().toString(),
        prompt: prompt.value,
        theme: selectedTheme.value,
        framework: selectedFramework.value,
        createdAt: new Date(),
        preview: mockWebsite.html,
      };

      buildHistory.value.unshift(historyItem);
      showToast("Website generated successfully!", "success");
      showCustomization.value = true;
    } catch (error) {
      showToast("Failed to generate website", "error");
    } finally {
      isLoading.value = false;
    }
  };

  const exportWebsite = () => {
    if (!generatedWebsite.value) {
      showToast("No website to export", "error");
      return;
    }

    // Mock export functionality
    showToast("Export started - download will begin shortly", "info");
  };

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ) => {
    toast.message = message;
    toast.type = type;
    toast.show = true;

    setTimeout(() => {
      toast.show = false;
    }, 3000);
  };

  const resetBuilder = () => {
    prompt.value = "";
    generatedWebsite.value = null;
    showCustomization.value = false;
  };

  return {
    // State
    isLoading,
    prompt,
    selectedTheme,
    selectedFramework,
    generatedWebsite,
    buildHistory,
    showCustomization,
    toast,
    customization,

    // Actions
    generateWebsite,
    exportWebsite,
    showToast,
    resetBuilder,
  };
});

export const useUserStore = defineStore("user", () => {
  const user = reactive({
    name: "John Doe",
    email: "john@example.com",
    plan: "Free",
    apiKey: "wt_1234567890abcdef",
    photoURL: "/user.webp",
    uid: "",
  });

  const settings = reactive({
    betaFeatures: false,
    notifications: true,
    autoSave: true,
  });

  const syncWithFirebaseAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        user.name = firebaseUser.displayName || "";
        user.email = firebaseUser.email || "";
        user.photoURL = firebaseUser.photoURL || "";
        user.uid = firebaseUser.uid;
      } else {
        user.name = "";
        user.email = "";
        user.photoURL = "";
        user.uid = "wt_1234567890abcdef";
        user.plan = "Free";
        user.apiKey = "";
      }
    });
  };

  // Update both Firebase and store
  const updateUserProfile = async (data: {
    name?: string;
    email?: string;
    photoURL?: string;
    apiKey?: string;
    plan?: string;
  }) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    data.apiKey ? (user.apiKey = data.apiKey) : "";
    data.plan ? (user.plan = data.plan) : "";
    if (!currentUser) throw new Error("No authenticated user");

    // Update displayName and photoURL in Firebase
    if (data.name || data.photoURL) {
      await updateProfile(currentUser, {
        displayName: data.name ?? currentUser.displayName ?? "",
        photoURL: data.photoURL ?? currentUser.photoURL ?? "",
      });
      user.name = data.name ?? user.name;
      user.photoURL = data.photoURL ?? user.photoURL;
    }
    // Update email in Firebase
    if (data.email && data.email !== currentUser.email) {
      await updateEmail(currentUser, data.email);
      user.email = data.email;
    }
  };

  const updateUserPassword = async (data: { newPassword: string }) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error("No authenticated user");
    // Password validation: min 8 chars, at least one lowercase, one uppercase, one number
    const password = data.newPassword;
    const isValid =
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password);

    if (!isValid) {
      throw new Error(
        "Password must be at least 8 characters and include lowercase, uppercase, and a number."
      );
    }

    // Update password in Firebase
    await updatePassword(currentUser, password);
  };

  const updateSettings = (data: Partial<typeof settings>) => {
    Object.assign(settings, data);
  };
  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return {
    user,
    settings,
    updateSettings,
    updateUserProfile,
    syncWithFirebaseAuth,
    updateUserPassword,
    logout,
  };
});
