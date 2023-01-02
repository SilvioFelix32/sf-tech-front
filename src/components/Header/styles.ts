import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.tertiary};

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }
`;

export const Logo = styled.button`
  display: flex;
  border: none;
  outline: none;
  transition: filter 0.2s;

  > image {
    width: 100%;
    height: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 18px;
`;

export const Select = styled.div`
  display: flex;
`;

export const Button = styled.button`
  display: flex;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;

  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;