import MainContainer from '../components/MainContainer'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <link rel="shortcut icon" href="https://i.postimg.cc/1Rgvfws7/hostmain.png" type="image/x-icon" /> { /* Tentei fazer do modo convencional, mas nao funcionou, nao estava reconhecendo o arquivo favicon.ico, portanto eu acabei colocando o link da imagem */ }
      </Head>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </>
  ) 
}

export default MyApp
