import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  width: 80%;
  height: 100%;
`;

export const Context = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  margin: 10px;
  border-radius: 6px;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px white;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  padding: 0 5px;
`;

export const Text = styled.p`
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 400;
  text-transform: capitalize;
  margin: 1px;
`;
