import styled from "styled-components";

export const Theme = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  margin: 0 auto;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 76.7vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StepWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: ${({ theme }) => theme.colors.text} !important;
    font-size: 1rem;
  }
`;

export const StepContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100px;
  margin: 0 8px;
  padding: 10px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;
  transition: filter(0.2s);

  &:hover {
    filter: brightness(0.9);
  }
`;
