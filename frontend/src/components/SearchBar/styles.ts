import styled from "styled-components";

export const Search = styled.div`
  width: 40%;
  height: 50px;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.quaternary};

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SearchSelect = styled.select`
  border: none;
  outline: none;
  border-radius: 12px 0 0 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  text-transform: capitalize;
  padding: 5px 10px;
  height: 100%;
  width: 30%;

  option {
    margin: 5px 0;
    padding: 5px 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    width: 60px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  text-align: center;
  height: 100%;
  width: 100%;

  color: ${({ theme }) => theme.colors.secondary};
`;
