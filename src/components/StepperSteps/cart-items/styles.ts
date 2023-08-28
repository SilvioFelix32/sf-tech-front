import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

export const Aside = styled.div`
  width: 60%;
  height: 100%;
  padding: 10px;
  margin: 5px;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
  }
`;

export const MainSection = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px;
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  div {
    display: flex;
    width: 100%;
    margin: 5px;
    justify-content: space-between;
    align-items: center;
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
  justify-content: flex-end !important;
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
  justify-content: flex-end !important;
  margin-top: auto;
  margin-right: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 400;
  font-size: 1rem;
  margin: 2px;
  padding: 0 5px;
  text-transform: capitalize;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 5px;
  align-self: center;
`;
