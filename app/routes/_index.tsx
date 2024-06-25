import type { MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
   return [{ title: 'Inicio' }]
}

export default function Landing() {
   return (
      <div>
         <div className='hero p-10 flex'>
            <div>
               <h1 className='hero-title text-8xl tracking-wide'>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     P
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     o
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     e
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     s
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     í
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     a
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     .
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     d
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     e
                  </span>
                  <span
                     className='char'
                     style={{
                        '--char-d': Math.floor(Math.random() * 20) + 1,
                     } as React.CSSProperties}
                  >
                     v
                  </span>
               </h1>
               <p className='inline text-2xl'>
                  En busca de los poemas perdidos
               </p>
            </div>
            <img
               src='app/assets/svgs/mine/mariposa1.svg'
               alt='svg'
               className='dark:invert inline size-1/4'
            />
            <img
               src='app/assets/svgs/mine/reading2.svg'
               alt='svg'
               className='dark:invert inline scale-x-[-1] -translate-x-60 size-1/4'
            />
         </div>
      </div>
   )
}
