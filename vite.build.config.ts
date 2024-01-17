import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { tsxResolveTypes } from "vite-plugin-tsx-resolve-types"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    vueJsx(),
    tsxResolveTypes()
  ],
    build:{
      rollupOptions:{
          external:["vue"],
      },
      lib:{
          entry:"src/index.ts",
          formats:["es"]
      }
    }
})
