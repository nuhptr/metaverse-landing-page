import '../styles/globals.css'

export default function RootLayout({ children }) {
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
