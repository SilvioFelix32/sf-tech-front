import styled from "styled-components";
import { PageContent } from "../../pages/shared";

export const AccountContent = styled(PageContent)`
  margin: 24px 0;
  border-radius: 8px;
  width: 100%;
  padding: 24px 24px 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 4px 0 8px -4px rgba(0, 0, 0, 0.24),
    -4px 0 8px -4px rgba(0, 0, 0, 0.24);
`;

export const AccountTabsContainer = styled.div`
  margin-top: 24px;
`;

export const AccountTabsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 100%;
  gap: 0;
  border-radius: 8px;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 4px 0 8px -4px rgba(0, 0, 0, 0.24),
    -4px 0 8px -4px rgba(0, 0, 0, 0.24);
`;

interface AccountTabButtonProps {
  $active?: boolean;
}

export const AccountTabButton = styled.button<AccountTabButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.tertiary : "transparent"};
  color: ${({ theme, $active }) =>
  $active ? theme.colors.title : theme.colors.tertiary};
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme, $active }) =>
    $active ? theme.colors.tertiary : "rgba(15, 23, 42, 0.04)"};
  }
`;

export const AccountFormHeader = styled.div`
  margin-bottom: 24px;
`;

export const AccountFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AccountField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 4px;
`;

export const AccountLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const AccountInput = styled.input`
  height: 44px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  padding: 0 14px;
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.title};
  background-color: ${({ theme }) => theme.colors.background};
  outline: 1px solid ${({ theme }) => theme.colors.tertiary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0 0 0 1px rgba(15, 23, 42, 0.08),
      0 0 0 3px rgba(50, 200, 190, 0.35);
  }
`;

export const AccountDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  margin: 32px 0 20px;
`;

export const AccountActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 12px;
`;

export const AccountAddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
  width: 100%;
`;

export const AccountAddressHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const AccountAddressList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const AccountAddressCard = styled.div<{ $isPrimary?: boolean }>`
  border-radius: 8px;
  border: 1px solid
    ${({ theme, $isPrimary }) =>
    $isPrimary ? theme.colors.tertiary : "rgba(15, 23, 42, 0.12)"};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const AccountAddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const AccountAddressTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

export const AccountAddressName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
`;

export const AccountAddressBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.title};

  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
  }
`;

export const AccountAddressText = styled.p`
  font-size: 1rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.8;
`;

export const AccountAddressActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const AccountPreferencesCard = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  margin-bottom: 24px;
`;

export const AccountPreferencesHeader = styled.div`
  margin-bottom: 24px;
`;

export const AccountPreferencesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export const AccountPreferencesItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  width: 100%;
`;

export const AccountPreferencesItemTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
`;

export const AccountPreferencesItemDescription = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.8;
`;

export const AccountPreferencesToggle = styled.button<{ $active?: boolean }>`
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.tertiary : theme.colors.background};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.title : theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const AccountPreferencesSeparator = styled.hr`
  border: none;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  margin: 0;
`;

export const AccountPreferencesCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AccountPreferencesCategoriesLabel = styled.label`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 8px;
`;

export const AccountPreferencesCategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const AccountPreferencesCategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.title};
`;

export const AccountSecurityCard = styled.div`
  width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  margin-bottom: 24px;
`;

export const AccountSecurityCardHeader = styled.div`
  margin-bottom: 24px;
`;

export const AccountSecurityCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccountSecurityCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const AccountSecurityCardStatus = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
`;

export const AccountSecurityCardDescription = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.title};
  opacity: 0.8;
`;

