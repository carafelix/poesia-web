import { Hero } from '../assets/svgs/components/index'
import '../assets/styles/_index.css'
import { Link, MetaFunction } from '@remix-run/react'

export const meta: MetaFunction = () => {
    return [
        { title: 'Inicio | Poesía.dev' },
        { name: 'og:site_name', content: 'Poesía.dev' },
        { name: 'og:url', content: 'https://poesia.dev/' },
        { name: 'og:image', content: 'https://i.postimg.cc/BQ9hn7ks/bg.jpg' },
    ]
}

export default function Landing() {
    return (
        <>
            <div
                id='hero'
                className='relative mx-2 my-4 flex flex-col items-center justify-around overflow-hidden border-2 border-gray-400 p-2 *:p-2 before:absolute before:top-0 before:size-double before:invert md:mx-8 md:my-4 md:p-8 xl:flex-row dark:border-gray-800 before:dark:invert-0'
            >
                <div className='flex max-w-screen-md flex-col justify-around border-2 border-gray-400 backdrop-blur-super-sm'>
                    <div>
                        <h1
                            id='hero-title'
                            className='px-4 pt-2 text-6xl tracking-wide invert md:px-8 md:pt-4 md:text-7xl lg:text-8xl dark:invert-0'
                        >
                            Poesía.dev
                        </h1>
                        <p className='px-4 pt-2 text-2xl md:px-8'>
                            En busca de los poemas perdidos.
                        </p>
                    </div>
                    <hr />
                    <div className='px-4 py-2 text-xl md:px-8 md:py-5'>
                        <p className='my-1'>
                            La nueva casa de la poesía en español.
                        </p>
                        <p className='my-1'>
                            Para amantes del género, entusiastas del dato,
                            mentes recolectoras y todo entremedio.
                        </p>
                    </div>
                    <p className='flex flex-wrap justify-around px-6 py-10 *:m-1 *:rounded-xl *:p-2.5 *:text-2xl *:md:px-5'>
                        <span className='bg-emerald-400 dark:bg-teal-600'>
                            <Link
                                to='/lector'
                                className='link'
                            >
                                Lee
                            </Link>
                        </span>
                        <span className='bg-red-400 dark:bg-red-600'>
                            <Link
                                to='/sns'
                                className='link'
                            >
                                Colabora
                            </Link>
                        </span>
                        <span className='bg-blue-400 dark:bg-blue-600'>
                            <Link
                                to='/explorar'
                                className='link'
                            >
                                Descubre
                            </Link>
                        </span>
                        <span className='bg-amber-400 dark:bg-amber-600'>
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
                        className='container rounded-md p-4 backdrop-blur-super-sm dark:backdrop-blur-none *:dark:fill-white'
                    />
                </div>
            </div>
        </>
    )
}
