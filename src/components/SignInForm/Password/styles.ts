import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 5px;
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.quaternary};
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .showhide {
    cursor: pointer;
    transition: 0.4s;
    margin-right: 10px;
    position: absolute;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 1.2rem;
  }
`;
