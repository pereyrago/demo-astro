import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["assets.soyhenry.com", "robohash.org"],
  },
  integrations: [preact()],
});
