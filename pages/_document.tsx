import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/uxq3ibn.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="texture-overlay"></div>
      </body>
    </Html>
  )
}