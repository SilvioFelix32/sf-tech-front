import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  height: 36px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border: none;
`;

export const ShopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 21px;
  margin: 10px;
  height: 36px;
  width: 100%;

  position: relative;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.tertiary};
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  filter: hue-rotate(0deg);
  border: 2px solid ${({ theme }) => theme.colors.tertiary};
  transition: all 0.1s linear;
  /* transition-duration: 4s; */

  &:hover {
    border: 1px solid transparent;
    span {
      position: absolute;
      display: block;

      &:nth-child(1) {
        filter: hue-rotate(0deg);
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
          90deg,
          transparent,
          ${({ theme }) => theme.colors.tertiary}
        );
        animation: animate1 1s linear infinite;
      }
      @keyframes animate1 {
        0% {
          left: -100%;
        }
        50%,
        100% {
          left: 100%;
        }
      }

      &:nth-child(2) {
        filter: hue-rotate(60deg);
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(
          180deg,
          transparent,
          ${({ theme }) => theme.colors.tertiary}
        );
        animation: animate2 1s linear infinite;
        animation-delay: 0.25s;
      }

      @keyframes animate2 {
        0% {
          top: -100%;
        }
        50%,
        100% {
          top: 100%;
        }
      }
      &:nth-child(3) {
        filter: hue-rotate(120deg);
        bottom: 0;
        right: 0;
        width: 100%;

        background: linear-gradient(
          270deg,
          transparent,
          ${({ theme }) => theme.colors.tertiary}
        );
        animation: animate3 1s linear infinite;
        animation-delay: 0.5s;
      }
      @keyframes animate3 {
        0% {
          right: -100%;
          height: 3px;
        }
        50%,
        100% {
          height: 2px;
          right: 100%;
        }
      }

      &:nth-child(4) {
        filter: hue-rotate(300deg);
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(
          360deg,
          transparent,
          ${({ theme }) => theme.colors.tertiary}
        );
        animation: animate4 1s linear infinite;
        animation-delay: 0.75s;
      }
      @keyframes animate4 {
        0% {
          bottom: -100%;
        }
        50%,
        100% {
          bottom: 100%;
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px;

  border: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
  transition: width 0.3s ease-in-out, opacity 0.17s ease-out;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  font-weight: bold;
  font-size: 24px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.tertiary};
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: none;
`;

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  font-weight: bold;
  font-size: 24px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.tertiary};
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border: none;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
`;
