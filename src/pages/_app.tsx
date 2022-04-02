import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { theme } from '../styles/theme'

import '../styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
