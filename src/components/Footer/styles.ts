import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100vw;
  margin-top: auto;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  opacity: 0.85;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 0.875rem;
  opacity: 0.85;

  & + & {
    margin-top: 0.5rem;
  }
`;

export const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.85;
`;
