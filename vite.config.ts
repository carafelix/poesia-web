import devServer, { defaultOptions } from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    ssr: {
        resolve: {
            externalConditions: ['workerd', 'worker'],
        },
    },
    plugins: [
        remix(),
        devServer({
            adapter,
            entry: 'server.ts',
            exclude: [...defaultOptions.exclude, '/assets/**', '/app/**'],
            injectClientScript: false,
        }),
    ],
    resolve: {
        alias: {
            '@db': path.resolve(__dirname, '../api/src/db'),
        },
    },
})
