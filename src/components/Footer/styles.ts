import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.text};

  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 1.2rem;;
  }

  p {
    text-align: end;
    font-size: 12px;
  }
`;
