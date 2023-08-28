import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  transition: width 0.3s ease-in-out, opacity 0.17s ease-out;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin: 5px;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 50%;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.tertiary};
`;
