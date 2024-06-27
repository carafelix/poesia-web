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
         <div className='hero
            relative p-2 md:p-8 mx-8 my-4 overflow-hidden
            flex justify-around flex-col xl:flex-row
            bg-transparent
            border-2 border-gray-400 dark:border-gray-800
            *:p-2
            before:absolute before:size-double before:top-0 before:invert before:dark:invert-0'>
            <div className='backdrop-blur-super-sm
               border-2 border-gray-400 flex-col flex justify-around'>
               <div>
                  <h1 className='hero-title 
                  text-6xl md:text-7xl lg:text-8xl tracking-wide px-8 pt-4
                  invert dark:invert-0'>
                     Poesía.dev
                  </h1>
                  <p className='inline text-2xl px-8'>
                     En busca de los poemas perdidos.
                  </p>
               </div>
               <hr />
               <div className='px-8 py-5 text-xl'>
                  <p className='my-1'>
                     La nueva casa de la poesía en español.
                  </p>
                  <p className='my-1'>
                     Para amantes del género, entusiastas del dato, mentes
                     recolectoras y todo entremedio.
                  </p>
               </div>
               <p className='px-6 py-10 
               flex justify-around flex-wrap
               *:p-2.5 *:m-1 *:text-2xl *:rounded-xl
               
               '>
                  <span className='dark:bg-teal-500 bg-emerald-400'>
                     <Link to='/lector' className='link'>Lee</Link>
                  </span>
                  <span className='dark:bg-red-500 bg-red-400'>
                     <Link to='/sns' className='link'>Colabora</Link>
                  </span>
                  <span className='dark:bg-blue-500 bg-blue-400'>
                     <Link to='/explorar' className='link'>Descubre</Link>
                  </span>
                  <span className='dark:bg-amber-500 bg-amber-400'>
                     <Link to='/sns' className='link'>Conecta</Link>
                  </span>
               </p>
            </div>
            <Hero
               height={'30rem'}
               width={'40rem'}
               className='
                  p-4 backdrop-blur-super-sm rounded-md
                  *:dark:fill-white 
                  dark:backdrop-blur-none'
            />
         </div>
      </div>
   )
}
