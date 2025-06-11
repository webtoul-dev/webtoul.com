import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import FeaturesPage from "./components/FeaturesPage.vue";
import ShowcasePage from "./components/ShowcasePage.vue";
import LearnPage from "./components/LearnPage.vue";
import AboutPage from "./components/AboutPage.vue";
import WebsiteEditor from "./components/WebsiteEditor.vue";
import TemplatesGallery from "./components/TemplatesGallery.vue";
import Pricing from "./components/Pricing.vue";
import UserAuth from "./components/UserAuth.vue";
import AccountSettings from "./components/AccountSettings.vue";
import GuidePage from "./components/GuidePage.vue";
import BlogPage from "./components/BlogPage.vue";

const routes = [
  { path: "/", name: "Home", component: LandingPage },
  { path: "/features", name: "Features", component: FeaturesPage },
  { path: "/showcase", name: "Showcase", component: ShowcasePage },
  { path: "/learn", name: "Learn", component: LearnPage },
  { path: "/about", name: "About", component: AboutPage },
  { path: "/editor", name: "Editor", component: WebsiteEditor },
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
