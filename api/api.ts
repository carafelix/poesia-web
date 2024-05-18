import { OpenAPIRouter } from '@cloudflare/itty-router-openapi'
import { ExampleFetch } from './routes/example'

const router = OpenAPIRouter({
    docs_url: '/docs',
    redoc_url: '/redocs',
    base: '/api'
})
router.get('/:autor', ExampleFetch)

// 404 for everything else
router.all('*', () => new Response('Not Found.', { status: 404 }))

export default router