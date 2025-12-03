import styled from "styled-components";

export const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
  box-shadow: 4px 0 8px -4px rgba(0, 0, 0, 0.24),
    -4px 0 8px -4px rgba(0, 0, 0, 0.24);
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 1281px) and (max-width: 2560px) {
    width: 80%;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  min-height: 76.7vh;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterSidebar = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 1025px) {
    width: 18%;
  }
`;

export const ProductListSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
