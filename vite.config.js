import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // allow external access
    port: 5173,        // your app port
    strictPort: true,  // stick to 5173
    allowedHosts: [
      '.ngrok-free.app'   // ✅ allow any ngrok subdomain
    ]
  },
})
