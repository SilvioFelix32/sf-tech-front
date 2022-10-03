import styled from "styled-components";

export const Wrapper = styled.div`
  height: 300px;
  width: 90%;
  padding: 15px;
  margin: 10px;
  border-radius: 18px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};

  box-shadow: rgba(32, 39, 44, 0.14) 0px 0px 17px; ;
`;

export const Picture = styled.div`
  display: flex;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ProductPrices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  padding: 0 5px;
`;
