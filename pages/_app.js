import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/global-css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HayuBerbagi | Lembaga Sosial Edukatif</title>
        <meta name="description" content="HayuBerbagi Website Lembaga Sosial" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
