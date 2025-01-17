// import { Nunito } from 'next/font/google'
// import '@/app/global.css'
//
// const nunitoFont = Nunito({
//     subsets: ['latin'],
//     display: 'swap',
// })
//
// const RootLayout = ({ children }) => {
//     return (
//         <html lang="en" className={nunitoFont.className}>
//             <body className="antialiased">{children}</body>
//         </html>
//     )
// }
//
// export const metadata = {
//     title: 'Laravel',
// }
//
// export default RootLayout
// import { getEvents } from '@/data'
import '@/styles/tailwind.css'

// import { ApplicationLayout } from './application-layout'

export const metadata = {
    title: {
        template: '%s - Catalyst',
        default: 'Catalyst',
    },
    description: '',
}

export default async function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className="text-zinc-950 antialiased lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
        >
        <head>
            <link rel="preconnect" href="https://rsms.me/" />
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </head>
        <body className="antialiased">{children}</body>
        </html>
    )
}
