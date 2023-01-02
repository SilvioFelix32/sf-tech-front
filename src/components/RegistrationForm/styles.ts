import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;

  .inputMask {
    height: 36px;
    width: 90%;
    margin: 0 5px;
    border: none;
    border-radius: 8px;
    font-weight: 400;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.tertiary};
    outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};

    &::placeholder {
      font-weight: 300;
    }
  }
`;

export const Input = styled.input`
  height: 36px;
  width: 90%;
  margin: 0 5px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.tertiary};
  outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};

  &::placeholder {
    font-weight: 300;
  }
`;

export const Select = styled.select`
  cursor: pointer;
  height: 36px;
  width: 90%;
  margin: 0 5px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  padding: 0 10px;
  text-transform: capitalize;
  outline: solid 1px ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Button = styled.button`
  height: 36px;
  width: 30%;
  margin: 10px 5px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  padding: 0 10px;
  text-transform: capitalize;
  outline: solid 1px ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    filter: brightness(0.9);
  }
`;
