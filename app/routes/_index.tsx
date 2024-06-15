import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [{ title: 'Remix and Hono on Vite' }]
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
  const { env } = context.cloudflare
  return json({ myVar: env.MY_VAR })
}

export default function Index() {
  const { myVar } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1>WIP, comeback later!</h1>
      <p>
        Stack:
        <ul>
          <li>Cloudflare Workers + Pages</li>
          <li>
            API backend: Hono + openAPIRouter (mounted) + D1 SQlite + Drizzle +
            Zod
          </li>
          <li>Front SSR: Hono + Remix + twind</li>
        </ul>
      </p>
      <img src='/assets/hono-logo.png' />
    </div>
  )
}
