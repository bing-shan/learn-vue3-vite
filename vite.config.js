import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
const IS_PROD = ["production","test"].includes((process.env.NODE_ENV))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"], //自动导入vue和vue-router相关函数
    }),
    Components({
      //1，配置ElementPlus采用sass样式配色系统
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          home: ["./src/views"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // views: path.resolve(__dirname, "src/views"),
      // assets: path.resolve(__dirname, "src/assets"),
    },
  },
  css: {
    extract:IS_PROD,
    preprocessorOptions: {
      scss: {
        //2，自动导入定制化样式文件进行样式覆盖。
        additionalData: `
          @use "@/assets/styles/element/index.scss" as *;
          @use "@/assets/styles/var.scss" as *;
        `
      },
    },
  },
  server: {
    hmr:true,
    proxy: {
      "/api": "",
    },
  },
});
