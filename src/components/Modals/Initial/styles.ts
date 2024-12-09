import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 800px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 15px;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  margin: 8px 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.8rem;
  margin: 0;
  padding: 0 8px;
`;
