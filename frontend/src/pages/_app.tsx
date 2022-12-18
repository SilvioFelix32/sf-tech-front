import React, { useContext } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import {
  AuthProvider,
  CartProvider,
  ThemePreferenceProvider,
  ThemeContext,
} from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import nookies from "nookies";
//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <ThemePreferenceProvider>
      <ThemeProvider theme={theme === "light" ? light : dark}>
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
    </ThemePreferenceProvider>
  );
}

App.getInitialProps = ({ ctx }) => ({
  theme: nookies.set(ctx, "color-theme", "dark", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  }),
});
