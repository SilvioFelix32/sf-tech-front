import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1366px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;

  @media screen and (max-width: 1366px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const Text = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  padding: 0 5px;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
