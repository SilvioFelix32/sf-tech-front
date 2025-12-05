import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 40px;
  margin: 0 auto;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 764px) {
    height: 40px;
    width: 60%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  > svg {
    color: ${({ theme }) => theme.colors.text};
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  text-align: start;
  height: 100%;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;
