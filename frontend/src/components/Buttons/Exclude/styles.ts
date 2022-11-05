import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  border: none;
  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: ${({ theme }) => theme.colors.tertiary};
    height: 24px;
    width: 24px;
  }
`;
