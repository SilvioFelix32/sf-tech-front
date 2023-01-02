import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  border-radius: 18px;
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
    font-size: 18px;
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

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 16px;
  margin: 5px 0;
  padding: 0 5px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
    margin: 2px 0;
    padding: 0 2px;
  }
`;