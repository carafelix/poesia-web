import { type PlatformProxy } from 'wrangler'
import { WorkerEntrypoint } from 'cloudflare:workers'

interface Env {
   API: Fetcher
}

type Cloudflare = Omit<PlatformProxy<Env>, 'dispose'>

declare module '@remix-run/cloudflare' {
   interface AppLoadContext {
      cloudflare: Cloudflare
   }
}
