import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 100%;
  width: 100%;
`;

export const Text = styled.p`
  width: 90%;
  margin-left: 10px;
  font-weight: 500;
`;

export const Input = styled.input`
  height: 36px;
  width: 95%;
  margin: 8px auto;
  outline: solid 0.1px ${({ theme }) => theme.colors.quaternary};
  border: none;
  border-radius: 4px;
  font-weight: 400;
  padding-left: 10px;
  color: ${({ theme }) => theme.colors.secondary};

  &::placeholder {
    font-weight: 300;
  }
`;

export const Select = styled.select`
  height: 36px;
  width: 95%;
  margin: 8px auto;
  border: none;
  border-radius: 4px;
  outline: solid 1px ${({ theme }) => theme.colors.quaternary};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  padding-left: 10px;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  height: 40px;
  margin: 15px auto;
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
