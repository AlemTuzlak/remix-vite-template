import { unstable_vitePlugin as remix } from '@remix-run/dev'
import morgan from 'morgan'
import { defineConfig, type ViteDevServer } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import remixConfig from './remix.config'
import { remixDevTools } from 'remix-development-tools/vite'

export default defineConfig({
  plugins: [
    morganPlugin(),
    remix(remixConfig),
    remixDevTools(),
    tsconfigPaths(),
  ],
})

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'))
      }
    },
  }
}
