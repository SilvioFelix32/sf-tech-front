import React from "react";
import { NavHeader, Header, Footer } from "../../";
import { Theme } from "../../../styles/components";
import { PageWrapper, PageContent } from "../../../styles/pages/shared";

interface PageLayoutProps {
  children: React.ReactNode;
  showSignInButton?: boolean;
  showCartButton?: boolean;
  showFavoritesButton?: boolean;
  showAdminButton?: boolean;
  showSearchBar?: boolean;
  showFooter?: boolean;
  wrapperWidth?: string;
  wrapperShadow?: "default" | "vertical";
  contentProps?: {
    direction?: "row" | "column";
    align?: "flex-start" | "center" | "flex-end" | "stretch";
    justify?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around";
    minHeight?: string;
    height?: string;
    padding?: string;
    fullWidth?: boolean;
  };
  themeHeight?: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showSignInButton = true,
  showCartButton = true,
  showFavoritesButton = true,
  showAdminButton = true,
  showSearchBar = true,
  showFooter = true,
  wrapperWidth,
  wrapperShadow,
  contentProps,
  themeHeight,
}) => {
  return (
    <Theme height={themeHeight}>
      <NavHeader />
      <Header
        showSignInButton={showSignInButton}
        showCartButton={showCartButton}
        showFavoritesButton={showFavoritesButton}
        showAdminButton={showAdminButton}
        showSearchBar={showSearchBar}
      />
      <PageWrapper width={wrapperWidth} shadow={wrapperShadow}>
        <PageContent {...contentProps}>{children}</PageContent>
      </PageWrapper>
      {showFooter && <Footer />}
    </Theme>
  );
};

