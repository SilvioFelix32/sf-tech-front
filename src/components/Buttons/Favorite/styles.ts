import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  border: none;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};

  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
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

export const FavoriteItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  border-radius: 100%;
  font-size: 0.85em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transform: translate(19px, -11px);
  background-color: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 20px;
  margin: 3px;
`;

export const Icon = styled.div``;
