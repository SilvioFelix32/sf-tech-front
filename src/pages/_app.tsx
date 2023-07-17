import React from "react";
import Cookies from "js-cookie";
import { setCookie } from "../shared/cookies";
import Head from "next/head";
import { MainApp } from "../components/MainApp";
import { IProduct } from "../types";
import {
  AuthProvider,
  CartProvider,
  FavoriteProvider,
  FilterContextProvider,
  ProductFilterProvider,
} from "../context";
import ThemePreferenceProvider from "../context/Theme/ThemeContext";
import CompanyIdProvider from "../context/Company/CompanyContext";
import { ProSidebarProvider } from "react-pro-sidebar";
//styles
import { GlobalStyles } from "../styles/global";

interface AppProps {
  Component: any;
  pageProps: AppProps;
  initialProducts: IProduct[];
}

export default function App({
  Component,
  pageProps,
  initialProducts,
}: AppProps) {
  if (typeof window === "undefined") {
    setCookie("company_id", "b4cce349-7c0b-41c7-9b3e-c21c9f0c2e4c", {
      expires: 7,
      path: "/",
    });
  }

  return (
    <CompanyIdProvider>
      <ThemePreferenceProvider>
        <AuthProvider>
          <CartProvider>
            <FavoriteProvider>
              <FilterContextProvider>
                <ProductFilterProvider initialProducts={initialProducts}>
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
                </ProductFilterProvider>
              </FilterContextProvider>
            </FavoriteProvider>
          </CartProvider>
        </AuthProvider>
      </ThemePreferenceProvider>
    </CompanyIdProvider>
  );
}

App.getInitialProps = ({ ctx }) => {
  const favoriteTheme: string = Cookies.get("color-theme");

  if (favoriteTheme) {
    Cookies.set("color-theme", favoriteTheme, {
      expires: 30,
      path: "/",
    });
  } else {
    Cookies.set("color-theme", "light", {
      expires: 30,
      path: "/",
    });
  }

  return {};
};
