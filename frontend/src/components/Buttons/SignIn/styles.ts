import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;

  svg {
    height: 100%;
    width: 100%;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
