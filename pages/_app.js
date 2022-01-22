import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Home from '.'
import Galeria from './galeria'
//import { Provider } from 'next-auth/client';
import { InitialContextProvider } from '../src/contexts/initialContext'
import {AuthContextProvider} from "../src/contexts/AuthContext"
import { SessionProvider } from 'next-auth/react';
import {ArrayContextProvider} from "../src/contexts/arrayContext"
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, session, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <ArrayContextProvider>
        <AuthContextProvider>
        {/*<SessionProvider session={session}>*/}
      <InitialContextProvider>

       <Component {...pageProps}/>

      </InitialContextProvider>
      {/*</SessionProvider>*/}

        </AuthContextProvider>

      </ArrayContextProvider>

      </ThemeProvider>
    </>
  )
}
