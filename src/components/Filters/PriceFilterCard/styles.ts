import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  margin-top: 10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  width: 100%;
  height: 18px;
  margin-bottom: 10px;
`;

export const ProductFilter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px 15px 15px;
  gap: 0;
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 18px;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const SliderTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 3px;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 0;
`;

export const RangeInput = styled.input.attrs({ type: "range" })`
  position: absolute;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: transparent;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  pointer-events: none;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
    pointer-events: all;
    position: relative;
    z-index: 3;
    margin-top: -6px;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
    cursor: pointer;
    pointer-events: all;
    position: relative;
    z-index: 3;
    margin-top: -6px;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    background: transparent;
    border-radius: 3px;
  }

  &::-moz-range-track {
    width: 100%;
    height: 6px;
    background: transparent;
    border-radius: 3px;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  font-weight: 600;
  width: 84px;
  height: 30px;
  font-size: 1rem;
  padding: 8px;
  border: none;
  outline: solid 0.1px ${({ theme }) => theme.colors.tertiary};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.background};
  text-transform: capitalize;
  border: none;
  outline: none;

  font-weight: 400;
  font-size: 1rem;
  margin: 5px 0;
  padding: 0 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
