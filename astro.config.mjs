// @ts-check
import { defineConfig } from "astro/config";

// The writing lives in its own building: blog.missingsemester.in
export default defineConfig({
  site: "https://blog.missingsemester.in",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
