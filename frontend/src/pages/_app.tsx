import React, { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { AuthProvider, CartProvider } from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import nookies, { parseCookies } from "nookies";
//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

interface ICookie {
  title: string;
  access_token: string;
}
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const themes = light || dark;
  const [theme, setTheme] = useState(themes);
  const cookies = parseCookies();

  const teste = Object.values(cookies).map((value) => {
    return value;
  });

  useEffect(() => {
    console.log("cookies-theme", teste);
  }, [cookies]);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          <ProSidebarProvider>
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
          </ProSidebarProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

App.getInitialProps = ({ ctx }) => ({
  theme: nookies.set(ctx, "color-theme", "dark", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  }),
});
