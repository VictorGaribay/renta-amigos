import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { GlobalStyle } from 'src/styles/globalStyled'
import '../styles/responsive.css'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
