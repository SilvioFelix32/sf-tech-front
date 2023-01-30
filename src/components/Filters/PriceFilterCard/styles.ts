import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  p {
    color: ${({ theme }) => theme.colors.title};
    font-weight: bold;
    font-size: 14px;
    padding: 0 5px;

    @media screen and (max-width: 1200px) {
      font-size: 12px;
      padding: 0 2px;
    }
  }
`;

export const ProductFilter = styled.div`
  width: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};
  text-transform: uppercase;
  border: none;

  font-weight: 400;
  font-size: 14px;
  margin: 5px 0;
  padding: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 14px;
  margin: 5px 0;
  padding: 0 5px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
    margin: 2px 0;
    padding: 0 2px;
  }
`;
