import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  height: 50px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};
  border: none;

  svg {
    height: 100%;
    width: 100%;

    &:hover {
      color: red;
    }
  }
`;
