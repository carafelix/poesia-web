import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

export const meta: MetaFunction = () => {
   return [{ title: 'Inicio' }]
}

export const loader = async ({ context }: LoaderFunctionArgs) => {
   const { env } = context.cloudflare
   return json({ foo: 'bar' })
}

export default function Index() {
   return (
      <div>
         <h1 className='text-3xl font-bold'>
            Hello world!
         </h1>
      </div>
   )
}
