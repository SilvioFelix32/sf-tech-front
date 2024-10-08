import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 2rem;
  }
`;
