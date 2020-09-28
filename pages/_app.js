import "./index.css";
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    black: '#212121',
    darkerBlack: '#1a1919',
    gold: '#fdb92c'
  },
  sizes: {
    mobile: `(max-width: 900px)`
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
