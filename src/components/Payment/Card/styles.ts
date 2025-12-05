import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 0;
`;

export const CardVisualWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const CardVisual = styled.div`
  background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%);
  border-radius: 12px;
  padding: 24px;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
`;

export const CardChip = styled.div`
  width: 40px;
  height: 32px;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border-radius: 4px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 60%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`;

export const CardNumber = styled.div`
  font-size: 1.125rem;
  letter-spacing: 0.15em;
  font-family: "Courier New", monospace;
  margin-bottom: 24px;
  font-weight: 500;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CardNameSection = styled.div`
  flex: 1;
`;

export const CardNameLabel = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 4px 0;
`;

export const CardName = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 0.05em;
`;

export const CardExpirySection = styled.div`
  text-align: right;
`;

export const CardExpiryLabel = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 4px 0;
`;

export const CardExpiry = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0;
`;

export const Content = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    grid-column: span 2;
  }
`;

export const FormGroupRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 6px;
  height: 40px;
  width: 100%;
  outline: none;
  background-color: ${({ theme }) => theme.colors.background};
  font-weight: 400;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text};
  padding: 8px 12px;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.tertiary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.tertiary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text}80;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const Expiry = styled(Input)`
  width: 100%;
`;

export const CVC = styled(Input)`
  width: 100%;
`;
