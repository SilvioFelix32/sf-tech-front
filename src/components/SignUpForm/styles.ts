import styled from "styled-components";

export const Wrapper = styled.form`
  width: 60%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.title};
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .inputMask {
    height: 36px;
    width: 98%;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    font-weight: 400;
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.tertiary};
    outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};

    &::placeholder {
      font-weight: 300;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 5px;
  padding: 5px;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
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
  border-radius: 4px;
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
  border-radius: 4px;
  font-weight: 400;
  padding: 0 10px;
  text-transform: capitalize;
  outline: solid 1px ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 4px 0;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  margin: 0;
`;

export const RouterButton = styled.button`
  color: ${({ theme }) => theme.colors.tertiary};
  margin-left: 5px;
  border: none;
  background: none;
  text-decoration: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
