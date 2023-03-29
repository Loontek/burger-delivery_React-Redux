import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/burger-delivery_React-Redux/",
  plugins: [react()],
})
