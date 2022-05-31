import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  border: none;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    height: 32px;
    width: 32px;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Text = styled.p`
  margin-left: 12px;
  font-size: 16px;
`;
export const CartValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  border-radius: 100%;
  font-size: 0.85em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transform: translate(19px, -11px);
  background-color: ${({ theme }) => theme.colors.quaternary};
  width: 20px;
  height: 20px;
  margin: 3px;
`;
export const Icon = styled.div``;
