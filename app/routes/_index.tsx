import type { MetaFunction } from '@remix-run/cloudflare'
import { Hero } from '../assets/svgs/components/index'
export const meta: MetaFunction = () => {
   return [{ title: 'Inicio' }]
}

export default function Landing() {
   return (
      <div>
         <div className='hero
            relative p-8 mx-8 my-4 overflow-hidden
            flex justify-around flex-col lg:flex-row
            bg-transparent
            border-2 border-gray-400 dark:border-gray-800
            *:p-2
            before:absolute before:size-double before:top-0 before:invert before:dark:invert-0'>
            <div className='backdrop-blur-super-sm
               border-2 border-gray-400'>
               <h1 className='hero-title 
                  text-6xl md:text-7xl lg:text-8xl tracking-wide px-8 pt-4
                  invert dark:invert-0'>
                  Poesía.dev
               </h1>
               <p className='inline text-2xl px-8'>
                  En busca de los poemas perdidos
               </p>
            </div>
            <Hero
               height={'30rem'}
               className='
                  p-4 backdrop-blur-super-sm rounded-md
                  *:dark:fill-white 
                  dark:backdrop-blur-none'
            />
            {
               /* <div>
               <img
                  src='app/assets/svgs/mine/hero.svg'
                  alt='svg'
                  className='
                  w-160 h-90 p-4 backdrop-blur-super-sm rounded-md
                  dark:fill-zinc-50 dark:backdrop-blur-none'
               />
            </div> */
            }
         </div>
      </div>
   )
}
