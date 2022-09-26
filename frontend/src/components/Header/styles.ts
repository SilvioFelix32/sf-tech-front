import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};

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

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 18px;
`;

export const Select = styled.div`
  display: flex;
`;
