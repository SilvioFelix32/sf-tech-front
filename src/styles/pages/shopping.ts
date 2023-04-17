import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
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
  align-items: flex-end;
  padding: 5px;

  height: 50px;
  width: 600px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px white;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-weight: 500;
  margin: 5px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 12px;
  font-weight: 400;
  text-transform: capitalize;
  margin: 5px;
`;