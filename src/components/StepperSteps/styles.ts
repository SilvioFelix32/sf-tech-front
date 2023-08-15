import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Aside = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
  }
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductValue = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      color: ${({ theme }) => theme.colors.tertiary};
      height: 24px;
      width: 24px;
    }
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Totals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin: 2px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.2rem;
  margin: 5px;
  align-self: center;
`;
