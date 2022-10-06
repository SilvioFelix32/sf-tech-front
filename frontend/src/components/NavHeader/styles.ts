import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
`;

export const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

export const Text = styled.p`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  font-size: 14px;
  margin: 0;
  padding: 0 5px;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
