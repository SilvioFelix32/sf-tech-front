import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 90%;

  a {
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.text};

    svg {
      height: 30px;
      width: 30px;
      color: ${({ theme }) => theme.colors.tertiary};
      background-color: ${({ theme }) => theme.colors.background};

      &:hover {
        color: ${({ theme }) => theme.colors.quaternary};
      }
    }
  }
`;
