import styled from "styled-components";
import { PageWrapper, PageContent, PageTitle, PageButton } from "../shared";

export const AdminWrapper = styled(PageWrapper)`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => 
    theme.title === "light" ? "#F7F8FA" : theme.colors.background};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AdminContent = styled(PageContent)`
  width: 100%;
  height: 100%;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`;

export const AdminTitle = styled(PageTitle)`
  font-size: 2rem;
  margin: 0 0 2rem 0;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const AdminCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => 
    theme.title === "light" ? "#FFFFFF" : theme.colors.background};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AdminCardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const AdminCardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  text-align: left;
`;

export const AdminButton = styled(PageButton).attrs({
  variant: "primary",
})`
  margin: 0;
`;

export const AdminPicture = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
`;

export const AdminContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;
`;

export const AdminSection = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: auto;
`;

