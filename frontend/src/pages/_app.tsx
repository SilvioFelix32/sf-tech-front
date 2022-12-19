import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MainApp } from "../components/MainApp";
import {
  AuthProvider,
  CartProvider,
  ThemePreferenceProvider,
} from "../context";
import { ProSidebarProvider } from "react-pro-sidebar";
import nookies from "nookies";
//styles
import { GlobalStyles } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemePreferenceProvider>
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
            <MainApp>
              <Component {...pageProps} />
              <GlobalStyles />
            </MainApp>
          </ProSidebarProvider>
        </CartProvider>
      </AuthProvider>
    </ThemePreferenceProvider>
  );
}

App.getInitialProps = ({ ctx }) => ({
  theme: nookies.set(ctx, "color-theme", "light", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  }),
});
