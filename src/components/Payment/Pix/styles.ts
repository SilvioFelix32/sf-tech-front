import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.5rem;
  margin: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.7rem;
  font-weight: 300;
`;

export const QRCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
