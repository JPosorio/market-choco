import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api-game\.bloque\.app\/game\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache-endpoints",
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 10,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: "Leaderboard - Market",
        short_name: "Market",
        id: "/",
        description: ":)",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/fish-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/fish-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/fish-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/mobile.png",
            sizes: "718x1546",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "/desktop.png",
            sizes: "3022x1730",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],
});
