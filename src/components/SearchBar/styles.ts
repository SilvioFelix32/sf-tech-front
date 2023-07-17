import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  height: 50px;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 764px) {
    height: 40px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  > svg {
    color: ${({ theme }) => theme.colors.text};
    width: 60px;
    height: 30px;
    margin-left: auto;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  text-align: start;
  padding-left: 12px;
  height: 100%;
  width: 100%;

  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
`;
