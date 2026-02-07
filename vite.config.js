import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // listen on all network interfaces
    port: 5173,         // or whatever port you prefer
    strictPort: true,   // fail if port is busy
    hmr: {
      protocol: 'ws',    // force WebSocket
      host: 'localhost', // sometimes VPN rewrites host
      port: 5173
    }
  }
})
