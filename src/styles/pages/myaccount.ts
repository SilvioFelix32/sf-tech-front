import styled from "styled-components";
import { PageContent } from "./shared";

export const AccountContent = styled(PageContent)`
  margin: 10px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px white;
`;
