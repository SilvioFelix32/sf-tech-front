import styled from "styled-components";

export const Navigation = styled.nav`
padding: 5px;
box-sizing: border-box;
text-align: center;

height: 50px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 80px;
margin-top: 10px;
`
export const Ul = styled.ul`
`
export const List = styled.li`
`
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
background-color: ${({ theme }) => theme.colors.tertiary};
color: ${({ theme }) => theme.colors.background};
outline: solid 1px ${({ theme }) => theme.colors.secondary};
transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`


