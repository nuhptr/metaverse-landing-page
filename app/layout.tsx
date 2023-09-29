import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Metaversus',
  description: 'Metaversus is a metaverse that is built on top of the Ethereum blockchain.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://stijndv.com' />
        <link rel='stylesheet' href='https://stijndv.com/fonts/Eudoxus-Sans.css' />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
