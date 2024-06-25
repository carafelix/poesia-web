import {
   Links,
   Meta,
   Outlet,
   Scripts,
   ScrollRestoration,
} from '@remix-run/react'

import './styles.css'

export default function App() {
   return (
      <html lang='en'>
         <head>
            <meta charSet='utf-8' />
            <meta
               name='viewport'
               content='width=device-width, initial-scale=1'
            />
            <Meta />
            <Links />
         </head>
         <body className='dark:bg-gray-950  dark:text-white'>
            <header className='sticky'>
               <nav className='flex-auto p-4'>
                  <ul className='flex justify-around font-semibold'>
                     <li>Inicio</li>
                     <li>Lector</li>
                     <li>Misión</li>
                     <li>Login</li>
                  </ul>
               </nav>
            </header>

            <Outlet />
            <ScrollRestoration />
            <Scripts />
         </body>
      </html>
   )
}
