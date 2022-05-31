import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const SearchBar = styled.div`
  width: 30%;
  height: 50px;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.quaternary};
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
  text-align: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.quaternary};

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 18px;
`;

export const Select = styled.div`
  display: flex;
`;
