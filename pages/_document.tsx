import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="w-100 bg-gradient-to-r from-gray-500 to-gray-500 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
