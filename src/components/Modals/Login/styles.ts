import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
  padding: 20px;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Password = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 100%;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.text};
    background: none;
    border: none;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .showhide {
    cursor: pointer;
    transition: 0.4s;
    margin-right: 10px;
    position: absolute;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.2rem;
  }
`;

export const SavePassword = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  input {
    margin: 0 5px;
  }
`;

export const Input = styled.input`
  height: 32px;
  margin: 6px 0;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  border: solid 1px ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  margin: 10px auto;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Registration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 100px;
    margin: 5px;
    padding: 5px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.tertiary};
    background: none;
    border: none;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Text = styled.p`
  font-size: 0.8rem !important;
  margin-left: 5px !important;
  color: red;
`;
