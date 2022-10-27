import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = (mode: string) => {
  const output = loadEnv(mode, process.cwd());
  return output;
};

export default defineConfig(({ mode }) => ({
  define: {
    "import.meta.vitest": "undefined",
  },
  test: {
    includeSource: ["src/**/*.ts"],
  },
  server: {
    host: "0.0.0.0",
    port: Number(env(mode).VITE_PORT),
  },
  plugins: [react()],
}));
