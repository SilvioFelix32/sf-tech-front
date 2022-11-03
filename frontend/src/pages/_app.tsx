import React, { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AuthProvider, CartProvider } from "../context";
//styles
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyles } from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <Head>
            <title>Sf-tech</title>
            <link rel="shortcut icon" href="/favicon.jpg" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
          <GlobalStyles />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
