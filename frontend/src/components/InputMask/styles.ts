import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .inputMask {
    height: 36px;
    width: 98%;
    margin: 0 5px;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.tertiary};
    outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};
  }
`;
