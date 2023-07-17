import Context from '../context/layout'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  ) 
}

export default MyApp
