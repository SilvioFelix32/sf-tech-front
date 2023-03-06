import styled from "styled-components";

export const Theme = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Text = styled.p`
  margin: 10px auto;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
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

  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    height: 32px;
    margin: 10px auto;
    padding: 8px;
    border-radius: 6px;
  }
`;
