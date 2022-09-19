import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import vue from "@astrojs/vue";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: "https://dbw.d01.wxifu.eu",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap({}), vue(), compress(), react(), svelte()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});