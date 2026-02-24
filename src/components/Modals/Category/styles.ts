import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  max-height: 80vh;
  padding: 20px 24px 18px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`;

export const HeaderTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeaderTitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.title};
  margin: 0;
`;

export const HeaderDescription = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.9;
  margin: 0;
`;

export const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 4px 0 12px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FieldLabelRow = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
`;

export const LabelIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LabelRequired = styled.span`
  color: #f97373;
  font-weight: 600;
`;

export const LabelOptional = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-left: 4px;
`;

export const Input = styled.input`
  height: 38px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  padding: 0 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#ffffff" : theme.colors.background};

  &::placeholder {
    font-weight: 400;
    opacity: 0.6;
  }
`;

export const Textarea = styled.textarea`
  min-height: 96px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  padding: 8px 10px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) =>
    theme.title === "light" ? "#ffffff" : theme.colors.background};
  resize: none;
`;

export const Text = styled.p`
  width: 100%;
  margin: 10px 0;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  margin-top: 12px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const SecondaryButton = styled.button`
  flex: 1;
  height: 38px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.9);
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
`;

export const PrimaryButton = styled.button<{ $danger?: boolean }>`
  flex: 1;
  height: 38px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme, $danger }) =>
    $danger ? "#dc2626" : theme.colors.primary};
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
`;
