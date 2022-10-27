import { defineConfig } from "vitest/config";

export default defineConfig({
  /*
    define: {...} -> import.meta.vitest should prevent tests
    to compile to build bundle. See https://vitest.dev/guide/in-source.html
    NOTE: Because we are using tsc for compiling (see package.json -> scripts -> build) and not Vite,
          tests are not being excluded from build.
  */ 
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.ts"],
  },
});
