import styled from "styled-components";

export const Wrapper = styled.div`
  .Wrapper {
    height: 50px;
  }

  .Button {
    display: flex;
    align-items: center;
    justify-content:center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.tertiary};
    outline: none;
    border: none;
  }

  .DropMenu {
    background-color: ${({ theme }) => theme.colors.tertiary};
    outline: none;
    border: none;
  }

  .OptionBtn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.tertiary};

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  height: 50px;
  width: 100%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  outline: none;
  border: none;
`;

export const Svg = styled.div`
  height: 50px;
  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Text = styled.p`
  margin-top: 7px;
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.8rem;;
`;
