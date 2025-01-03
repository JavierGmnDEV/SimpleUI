import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({rollupTypes: true})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Simple-ui',
      // the proper extensions will be added
      fileName: 'Simple-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
          'react/jsx-runtime': 'react/jsx-runtime',

        },
      },
    },
  },
  
})
