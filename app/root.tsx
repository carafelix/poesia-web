import {
    Link,
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
            <body className='dark:bg-gray-950 dark:text-white'>
                <header className='sticky top-0 z-[9999] border-b border-gray-200 backdrop-blur-md dark:border-gray-800'>
                    <nav className='flex-auto'>
                        <ul className='flex justify-around p-4 font-semibold'>
                            <li className='link'>
                                <Link to={{ pathname: '/' }}>Inicio</Link>
                            </li>
                            <li className='link'>
                                <Link to={{ pathname: '/lector' }}>Lector</Link>
                            </li>
                            <li className='link'>
                                <a href='https://api.poesia.dev'>API</a>
                            </li>
                            <li className='link'>Data</li>
                            <li className='link'>Login</li>
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
