import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    //TODO: https://vitejs.dev/guide/env-and-mode.html
    port: 3000,
  },
  plugins: [react()],
});
