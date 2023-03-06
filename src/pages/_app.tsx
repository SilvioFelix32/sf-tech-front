import React from "react";
import Cookies from "js-cookie";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MainApp } from "../components/MainApp";
import {
  AuthProvider,
  CartProvider,
  FavoriteProvider,
  FilterContextProvider,
} from "../context";
import ThemePreferenceProvider from "../context/Theme/ThemeContext";
import { ProSidebarProvider } from "react-pro-sidebar";
//styles
import { GlobalStyles } from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemePreferenceProvider>
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <FilterContextProvider>
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
            </FilterContextProvider>
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </ThemePreferenceProvider>
  );
}

App.getInitialProps = ({ ctx }) => {
  Cookies.set("color-theme", "light", {
    expires: 30,
    path: "/",
  });

  return {};
};
