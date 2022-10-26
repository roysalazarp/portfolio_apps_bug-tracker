import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = (mode: string) => loadEnv(mode, process.cwd());

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: Number(env(mode).VITE_PORT),
  },
  plugins: [react()],
}));
