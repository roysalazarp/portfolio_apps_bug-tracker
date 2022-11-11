import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = (mode: string): Record<string, string> => {
  return loadEnv(mode, process.cwd());
};

export default defineConfig(({ mode }) => {
  const port = env(mode).VITE_PORT ? Number(env(mode).VITE_PORT) : 3000;
  return {
    define: {
      "import.meta.vitest": "undefined",
    },
    test: {
      includeSource: ["src/**/*.ts"],
    },
    server: {
      host: "0.0.0.0",
      port,
    },
    plugins: [react()],
  };
});
