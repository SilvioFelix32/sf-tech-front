import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  border: none;
  height: 50px;
  padding: 10px;
  /* color: ${({ theme }) => theme.colors.primary}; */
  color: yellow;
  background-color: ${({ theme }) => theme.colors.tertiary};

  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
