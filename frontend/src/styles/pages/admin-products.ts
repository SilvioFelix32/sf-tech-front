import styled from "styled-components";

export const Theme = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

export const Text = styled.p`
  margin: 10px auto;
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  height: 40px;
  margin: 15px auto;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
