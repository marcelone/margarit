// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  i18n: {
    locales: ["ca", "es", "en", "fr", "el"],
    defaultLocale: "ca",
    routing: {
      prefixDefaultLocale: false
    }
  }
});