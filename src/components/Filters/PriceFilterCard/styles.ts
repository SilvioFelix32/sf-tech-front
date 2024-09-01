import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const ProductFilter = styled.div`
  width: 75%;
  display: flex;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  font-weight: 600;
  width: 84px;
  height: 30px;
  font-size: 1rem;
  padding: 8px;
  border: none;
  outline: solid 0.1px ${({ theme }) => theme.colors.tertiary};
`;

export const RangeInput = styled.input`
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  font-weight: 600;
  width: 60%;
  height: 30px;
  font-size: 1rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1rem;
  margin: 5px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  text-transform: capitalize;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 1rem;
  margin: 5px 0;
  padding: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
