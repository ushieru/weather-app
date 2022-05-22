import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="theme-color"
        content="#0A1C2D"
        media="(prefers-color-scheme: light)" />
      <meta name="theme-color"
        content="#0A1C2D"
        media="(prefers-color-scheme: dark)" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
