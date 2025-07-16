import { fileURLToPath, URL } from 'node:url'

import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    preview: {
      port: 5006,
    },
    build: {
      target: 'esnext',
      assetsDir:'footer-assets',
      rollupOptions: {
        output: {
          globals: { vue: 'Vue' },
        },
        external: ['vue'],
      },
    },
    server: {
      port: 5006,
    },
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools(),
      federation({
        name: 'meduza-pet-footer',
        filename: 'meduzaFooter.js',
        exposes: {
          './App': './src/App.vue',
        },
        shared: ['vue', 'vue-router', 'pinia'],
        remotes:
          env.NODE_ENV === 'test'
            ? {}
            : {
                host: `${env.VITE_HOST_REMOTE}/host-assets/host.js`,
              },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        ...(process.env.NODE_ENV === 'test' && {
          host: fileURLToPath(new URL('./src/__mocks__/host', import.meta.url)),
        }),
      },
    },
  }
})
