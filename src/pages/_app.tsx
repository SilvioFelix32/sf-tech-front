import React from "react";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async () => {
  const favoriteTheme = Cookies.get("color-theme");

  setCookie("company_id", "b4cce349-7c0b-41c7-9b3e-c21c9f0c2e4c", {
    maxAge: 60 * 60 * 24 * 7, // 7 dias
    path: "/",
  });

  if (!favoriteTheme) {
    setCookie("color-theme", "light", {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: "/",
    });
  }

  return {
    props: {},
  };
};
