import { defineConfig } from 'vite'
import UniApp from '@dcloudio/vite-plugin-uni'
import Components from '@uni-helper/vite-plugin-uni-components'
import { NutResolver } from 'nutui-uniapp'
import AutoImport from 'unplugin-auto-import/vite'
// https://vitejs.dev/config

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "nutui-uniapp/styles/variables.scss";`
      }
    }
  },
  // ...
  plugins: [
    AutoImport({
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          'nutui-uniapp/composables': [
            // 在这里添加需要自动导入的API
            'useToast'
          ]
        }
      ]
    }),
    // ...
    Components({
      resolvers: [NutResolver()],
    }),
    // 注意，UniApp插件一定要放到后面！
    UniApp()
  ]
})