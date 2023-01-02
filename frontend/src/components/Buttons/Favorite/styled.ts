import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  .Button {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: none;
    outline: none;

    svg {
      height: 28px;
      width: 28px;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .DropMenu {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  .OptionBtn {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.tertiary};
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
