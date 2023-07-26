import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
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
    font-size: 0.8rem;;
    padding: 0 5px;

    @media screen and (max-width: 1200px) {
      font-size: 0.8rem;;
      padding: 0 2px;
    }
  }
`;

export const ProductFilter = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  font-weight: 400;
  font-size: 0.8rem;;
  margin: 5px 0;
  padding: 8px 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 0.8rem;;
  margin: 5px 0;
  padding: 0 5px;

  @media screen and (max-width: 1200px) {
    font-size: 0.8rem;;
    margin: 2px 0;
    padding: 0 2px;
  }
`;
