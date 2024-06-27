import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { AuthorsArr } from '@db/zodSchemas'

export const meta: MetaFunction = () => {
    return [
        {
            title: 'Poesía',
            charset: 'utf-8',
            viewport: 'width=device-width,initial-scale=1',
        },
    ]
}

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
    const { env } = context.cloudflare
    const responseJson = await (
        await env.API.fetch('http://localhost:8787/autores')
    ).json()

    const authors = AuthorsArr.safeParse(responseJson).data

    return json({ authors })
}

export default function Reader() {
    const { authors } = useLoaderData<typeof loader>()

    return (
        <div>
            {authors ? authors.map((author) => author.name) : 'No Authors'}
        </div>
    )
}
