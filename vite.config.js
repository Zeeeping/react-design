import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// path, __dirname 需要安装 @types/node -D 开发依赖提供 node 环境
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 别名路径智能提示需要在 tsconfig.json 添加 baseUrl, paths 声明
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [react()]
})
