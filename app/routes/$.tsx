import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/cloudflare'
import { Link, useLoaderData, useNavigate } from '@remix-run/react'
import { PerroCola2 } from '../assets/svgs/components/index'
import { PoemResponseSchema } from '@db/zodSchemas'
import SimplePoem from '../components/poemSimpleFormat'

export const meta: MetaFunction = () => {
    return [{ title: 'Not Found | Poesía.dev' }]
}

export const loader = async ({ context, params }: LoaderFunctionArgs) => {
    const { env } = context.cloudflare
    const responseJson = await (
        await env.API.fetch('http://localhost:8787/poemarandom?length=300')
    ).json()
    const poemarandom = PoemResponseSchema.safeParse(responseJson).data

    return json({ poemarandom }, { status: 404 })
}

export default function notFound() {
    const navigate = useNavigate()
    const { poemarandom } = useLoaderData<typeof loader>()
    return (
        <div className='container m-auto grid grid-flow-row items-center justify-center gap-2 px-6 py-6 *:mt-8 md:gap-12 lg:grid-flow-col lg:p-12 xl:items-center xl:justify-between'>
            <div className='min-w-20'>
                <p className='font-medium text-blue-500 dark:text-blue-400'>
                    404!
                </p>
                <h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white'>
                    ¿Qué estás buscando?
                </h1>
                <p className='mt-4 text-gray-500 dark:text-gray-400'>
                    Lo que sea que fuere, no esta aquí.
                    <br />
                    Pero nunca es mal momento para disfrutar de un buen poema.
                </p>

                <div className='mt-6 flex flex-wrap items-center gap-3'>
                    <button
                        onClick={() => {
                            navigate(-1)
                        }}
                        className='flex items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='h-5 w-5 rtl:rotate-180'
                        >
                            <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                            />
                        </svg>
                        <span>Volver atrás</span>
                    </button>
                    <Link to='/'>
                        <button className='shrink-0 rounded-lg bg-blue-500 px-5 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500'>
                            Ir al Inicio
                        </button>
                    </Link>
                </div>
            </div>

            <div className='w-fit'>
                {poemarandom && <SimplePoem poem={{ ...poemarandom }} />}
            </div>

            <div className='relative *:size-3/4 *:max-h-[45rem]'>
                <PerroCola2 className='*:dark:fill-white' />
            </div>
        </div>
    )
}
