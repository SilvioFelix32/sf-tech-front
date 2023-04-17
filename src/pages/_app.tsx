import React from "react";
import Cookies from "js-cookie";
import Head from "next/head";
import { MainApp } from "../components/MainApp";
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
import { IProduct } from "../types";

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
  const favoriteTheme = Cookies.get("color-theme");

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

  Cookies.set("company_id", "55e445bf-f6fd-422f-98ae-0eef24e1f1d7", {
    expires: 30,
    path: "/",
  });

  return {};
};
