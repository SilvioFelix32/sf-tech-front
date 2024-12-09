import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const SectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  padding: 0 8px;
`;

interface InfoTextProps {
  weight?: number;
  size?: string;
  margin?: string;
  padding?: string;
}

export const InfoText = styled.p<InfoTextProps>`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size || "1rem"};
  margin: ${({ margin }) => margin || "2px"};
  padding: ${({ padding }) => padding || "0 5px"};
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
`;

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainSection = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Product = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  padding: 10px;
  margin: 10px 0;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 200px;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductQuantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProductValue = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;

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
  border: none;
  background: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    color: ${({ theme }) => theme.colors.tertiary};
    height: 24px;
    width: 24px;
  }
`;

export const ButtonPay = styled(Button)`
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 1.3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  transition-duration: 0.3s;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const PriceDetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 0;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 100%;
  /* min-height: 40rem; */
  outline: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
`;

export const SubTotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  border-top: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const Totals = styled.div`
  height: 4rem;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  border-top: solid 1px ${({ theme }) => theme.colors.tertiary};
`;

export const GiftWrapper = styled(Card)`
  align-items: start;
  justify-content: center;
  height: 10rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const AddGiftButton = styled(Button)`
  margin-top: 5px;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.tertiary};
`;
