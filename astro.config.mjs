// @ts-check
import { defineConfig } from "astro/config";

// The writing lives in its own building: letters.missingsemester.in
export default defineConfig({
  site: "https://letters.missingsemester.in",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
