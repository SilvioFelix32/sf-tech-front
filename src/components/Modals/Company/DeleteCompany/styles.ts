import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 120px;
  width: 350px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 12px;
  justify-content: center;
`;

export const Text = styled.p`
  width: 90%;
  margin: 10px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 120px;
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

export const ButtonCancel = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
`;
