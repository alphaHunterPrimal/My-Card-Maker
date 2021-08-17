import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Home from '.'
import Galeria from './galeria'
import { InitialContextProvider } from '../src/contexts/initialContext'
import {AuthContextProvider} from "../src/contexts/AuthContext"
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

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <AuthContextProvider>
      <InitialContextProvider>

       <Component {...pageProps}/>

      </InitialContextProvider>
      </AuthContextProvider>


      </ThemeProvider>
    </>
  )
}
