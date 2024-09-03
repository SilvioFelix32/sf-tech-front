import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  border-radius: 6px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.tertiary};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;

  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  transition: all 0.1s linear;
  transition-duration: 0.3s;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.tertiary};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: none;
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: bold;
  font-size: 0.8rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.tertiary};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: none;
  transition: all 0.1s linear;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
`;
