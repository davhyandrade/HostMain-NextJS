import Context from '../context/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>HostMain</title>
      </Head>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  ) 
}

export default MyApp
