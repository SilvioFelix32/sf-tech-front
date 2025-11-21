import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Content = styled.div`
  width: 82%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.tertiary};
  padding: 10px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.2rem;
  font-weight: 400;
`;
