import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/jsn-test-task-client',
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
