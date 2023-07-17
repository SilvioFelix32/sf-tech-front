import styled from "styled-components";

export const Wrapper = styled.div``;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  border-radius: 6px;
  font-size: 12px;
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

export const Text = styled.p`
  margin: 8px 5px;
  opacity: 0.5;
  transition: 0.3s;

  span {
    font-size: 0.8rem;;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 35px;
  }

  svg {
    position: absolute;
    text-align: center;
    width: 20px;
    height: 20px;
    line-height: 20px;
    font-size: large;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.tertiary};
    border: 1px solid ${({ theme }) => theme.colors.quaternary};
  }

  .faCheck {
    opacity: 1;
  }

  .faTimes {
    opacity: 1;
  }
`;
