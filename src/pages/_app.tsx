import React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { MainApp } from "../components/MainApp";
import { IProduct } from "../types";
import { getCookie, setCookie } from "../services";
import { Amplify } from "aws-amplify";
import config from "../aws/aws-config";
import {
  CartProvider,
  FavoriteProvider,
  FilterContextProvider,
  ProductFilterProvider,
  ProductProvider,
  AuthProvider,
} from "../context";
import ThemePreferenceProvider from "../context/Theme/ThemeContext";
import { ProSidebarProvider } from "react-pro-sidebar";
import { QueryClientProvider, QueryClient } from "react-query";
import { GlobalStyles } from "../styles/global";
import "@aws-amplify/ui-react/styles.css";

const queryClient = new QueryClient();
Amplify.configure(config);

export const getServerSideProps: GetServerSideProps = async () => {
  const favoriteTheme = getCookie("color-theme");

  if (favoriteTheme) {
    setCookie("color-theme", favoriteTheme, { expires: 30, path: "/" });
  } else {
    setCookie("color-theme", "light", { expires: 30, path: "/" });
  }

  return { props: {} };
};

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
  initialProducts: IProduct[];
}

export default function App({
  Component,
  pageProps,
  initialProducts,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemePreferenceProvider>
        <AuthProvider>
          <ProductProvider>
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
          </ProductProvider>
        </AuthProvider>
      </ThemePreferenceProvider>
    </QueryClientProvider>
  );
}
