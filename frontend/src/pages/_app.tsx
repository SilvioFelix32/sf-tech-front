import React, { useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
//styles
import { ThemeProvider, DefaultTheme } from "styled-components";
import { GlobalStyles } from "../styles/global";
import light from "../styles/themes/light";
import { AuthProvider } from "../context";
import CartProvider from "../context/Cart/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  return (
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
