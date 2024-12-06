import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Content = styled.form`
  width: 100%;
  height: 100%;
  min-height: 160px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const Input = styled.input`
  border: none;
  height: 36px;
  width: 80%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 300;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  padding: 3px;
  border-bottom: solid 0.5px ${({ theme }) => theme.colors.tertiary};
`;

export const Expiry = styled.input`
  width: 70%;
  height: 36px;
  margin-right: 5px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 300;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  padding: 3px;
  border-bottom: solid 0.5px ${({ theme }) => theme.colors.tertiary};
`;

export const CVC = styled.input`
  width: 30%;
  height: 36px;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 300;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  padding: 3px;
  border-bottom: solid 0.5px ${({ theme }) => theme.colors.tertiary};
`;
