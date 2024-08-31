import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  width: 350px;
  height: 360px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Content = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
    margin-bottom: 10px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.title};
`;

export const Text = styled.p`
  font-size: 1rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.title};
  margin: 0;
`;

export const Input = styled.input`
  height: 36px;
  width: 100%;
  margin: 10px;
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

export const Button = styled.button`
  height: 36px;
  width: 100%;
  margin: 10px;
  border: none;
  border-radius: 4px;
  font-weight: 400;
  padding: 0 10px;
  outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    filter: brightness(0.9);
  }
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

export const ErrorText = styled.p`
  height: 36px;
  width: 100%;
  color: red;
  text-align: left;
  padding: 10px;
  font-size: 1rem;
  outline: solid 0.1px red;
  border-radius: 4px;
`;

export const Registration = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  button {
    color: ${({ theme }) => theme.colors.tertiary};
    margin-left: 5px;
    border: none;
    background: none;
    text-decoration: none;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
