import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import FeaturesPage from "./components/FeaturesPage.vue";
import ShowcasePage from "./components/ShowcasePage.vue";
import LearnPage from "./components/LearnPage.vue";
import AboutPage from "./components/AboutPage.vue";
import TemplatesGallery from "./components/TemplatesGallery.vue";
import Pricing from "./components/Pricing.vue";
import UserAuth from "./components/UserAuth.vue";
import AccountSettings from "./components/AccountSettings.vue";
import GuidePage from "./components/GuidePage.vue";
import BlogPage from "./components/BlogPage.vue";
import AuthCallback from "./components/AuthCallback.vue";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import Dashboard from "./views/Dashboard.vue";
import Builder from "./views/Builder.vue";
import Settings from "./views/Settings.vue";
import UIComponents from "./views/UIComponents.vue";
import ImageGenerator from "./views/ImageGenerator.vue";
import Terms from "./components/Terms.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";

const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/features", name: "Features", component: FeaturesPage },
  { path: "/showcase", name: "Showcase", component: ShowcasePage },
  { path: "/learn", name: "Learn", component: LearnPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/templates", name: "Templates", component: TemplatesGallery },
  { path: "/pricing", name: "Pricing", component: Pricing },
  { path: "/auth", name: "Sign In", component: UserAuth },
  { path: "/settings", name: "Account", component: AccountSettings },
  {
    path: "/learn/guide/:id",
    name: "Guide",
    component: GuidePage,
    props: true,
  },
  { path: "/blog", name: "Blog", component: BlogPage },
  { path: "/authEmail", component: AuthCallback },
  {
    path: "/editor",
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "builder",
        name: "builder",
        component: Builder,
      },
      {
        path: "ui-components",
        name: "ui-components",
        component: UIComponents,
      },
      {
        path: "image-generator",
        name: "image-generator",
        component: ImageGenerator,
      },
      {
        path: "settings",
        name: "settings",
        component: Settings,
      },
    ],
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms,
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
// router guard
router.beforeEach(async (to, _, next) => {
  if (to.path.startsWith("/editor")) {
    if (auth.currentUser) {
      next();
    } else {
      onAuthStateChanged(auth, (u) => {
        if (u) next();
        else next("/auth");
      });
    }
  } else {
    next();
  }
});

export default router;
