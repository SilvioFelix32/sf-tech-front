import styled from "styled-components";

export const Wrapper = styled.div`
  .Wrapper {
    margin: 0;
    padding: 0;
  }
  
  .GlobeBtn {
    margin: 0 5px;
    color: ${({ theme }) => theme.colors.secondary};
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
  
  .OptionBtn {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
