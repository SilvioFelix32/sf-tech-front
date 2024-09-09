import styled from "styled-components";

export const Navigation = styled.div``;

export const Ul = styled.ul``;

export const List = styled.li``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.tertiary};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
    color: ${({ theme }) => theme.colors.text};
  }
`;
