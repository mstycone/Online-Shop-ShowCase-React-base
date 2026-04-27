import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@utilities": path.resolve(__dirname,"./src/utilities"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@screens": path.resolve(__dirname, "./src/screens"),
      "@services": path.resolve(__dirname, "./src/services")
    },
  },
})
