import type { MetaFunction } from '@remix-run/cloudflare'
import { Hero } from '../assets/svgs/components/index'
import '../assets/styles/_index.css'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
    return [{ title: 'Inicio' }]
}

export default function Landing() {
    return (
        <div>
            <div className='hero relative mx-8 my-4 flex flex-col justify-around overflow-hidden border-2 border-gray-400 p-2 *:p-2 before:absolute before:top-0 before:size-double before:invert md:p-8 xl:flex-row dark:border-gray-800 before:dark:invert-0'>
                <div className='flex max-w-screen-md flex-col justify-around border-2 border-gray-400 backdrop-blur-super-sm'>
                    <div>
                        <h1 className='hero-title px-8 pt-4 text-6xl tracking-wide invert md:text-7xl lg:text-8xl dark:invert-0'>
                            Poesía.dev
                        </h1>
                        <p className='inline px-8 text-2xl'>
                            En busca de los poemas perdidos.
                        </p>
                    </div>
                    <hr />
                    <div className='px-8 py-5 text-xl'>
                        <p className='my-1'>
                            La nueva casa de la poesía en español.
                        </p>
                        <p className='my-1'>
                            Para amantes del género, entusiastas del dato,
                            mentes recolectoras y todo entremedio.
                        </p>
                    </div>
                    <p className='flex flex-wrap justify-around px-6 py-10 *:m-1 *:rounded-xl *:p-2.5 *:text-2xl'>
                        <span className='bg-emerald-400 dark:bg-teal-500'>
                            <Link
                                to='/lector'
                                className='link'
                            >
                                Lee
                            </Link>
                        </span>
                        <span className='bg-red-400 dark:bg-red-500'>
                            <Link
                                to='/sns'
                                className='link'
                            >
                                Colabora
                            </Link>
                        </span>
                        <span className='bg-blue-400 dark:bg-blue-500'>
                            <Link
                                to='/explorar'
                                className='link'
                            >
                                Descubre
                            </Link>
                        </span>
                        <span className='bg-amber-400 dark:bg-amber-500'>
                            <Link
                                to='/sns'
                                className='link'
                            >
                                Conecta
                            </Link>
                        </span>
                    </p>
                </div>
                <div>
                    <Hero
                        height={'30rem'}
                        width={'40rem'}
                        className='rounded-md p-4 backdrop-blur-super-sm dark:backdrop-blur-none *:dark:fill-white'
                    />
                </div>
            </div>
        </div>
    )
}
