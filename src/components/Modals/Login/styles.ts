import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;

  h2 {
    font-size: 18px;
    margin: 0;
  }

  p {
    font-size: 14px;
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
    color: ${({ theme }) => theme.colors.tertiary};
    background: none;
    border: none;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.9);
    }
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
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Registration = styled.div`
  display: flex;
  justify-content: flex-start;
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

export const Medias = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border-radius: 8px;
    border: none;
    transition: filter(0.2s);

    &:hover {
      filter: brightness(0.9);
    }

    svg {
      height: 36px;
      width: 36px;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;
