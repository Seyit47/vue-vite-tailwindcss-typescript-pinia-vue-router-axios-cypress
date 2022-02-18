import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dotenv from 'dotenv'

export default () => {
  dotenv.config({ path: './.env' })
  return defineConfig({
    plugins: [vue()],
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    server: {
      port: Number(process.env.PORT) || 3000,
      host: process.env.HOST || '127.0.0.1',

      proxy: {
        '/api': {
          target: process.env.PROXY_URL || 'http://127.0.0.1:8080',
          changeOrigin: true
        }
      }
    },

    preview: {
      port: Number(process.env.PORT) || 3000,
      host: process.env.HOST || '0.0.0.0'
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/scss/base/variables";`
        }
      }
    }
  })
}
