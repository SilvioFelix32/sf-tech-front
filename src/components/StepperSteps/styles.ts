import styled from "styled-components";

export const LeftContent = styled.div`
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

export const Totals = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  p {
    font-size: 12px;
    margin: 2px;
  }
`;
