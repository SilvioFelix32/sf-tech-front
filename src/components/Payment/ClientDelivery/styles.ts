import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.tertiary};
  margin: 15px 0;
`;

export const Card = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Divisory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const MainData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
  height: 70px;
  padding: 10px;
  border-left: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const Column = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 300;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  padding: 3px;
  border-bottom: solid 0.5px lightgrey;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  margin: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
  font-weight: 300;
`;
