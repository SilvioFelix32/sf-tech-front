import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};

  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
