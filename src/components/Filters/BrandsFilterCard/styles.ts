import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 8px;
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
    font-size: 0.8rem;;
    padding: 0 5px;

    @media screen and (max-width: 1200px) {
      font-size: 13px;
      padding: 0 2px;
    }
  }
`;

export const ProductFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .field {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  input {
    margin: 5px;

    @media screen and (max-width: 1200px) {
      height: 15px;
      width: 15px;
      margin: 2px;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  font-size: 12px;
  margin: 5px 0;
  padding: 0 5px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;
