import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  width: 82%;
  height: 80px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    color: ${({ theme }) => theme.colors.secondary};
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 1281px) and (max-width: 2560px) {
    width: 80%;
  }
`;

export const DesktopLogoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    opacity: 0.85;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  > image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 764px) {
    display: none;
  }
`;

export const MobileLogoButton = styled.button`
  display: none;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  > image {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 720px) {
    display: flex;
  }
`;

export const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  font-weight: 500;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  white-space: nowrap;

  ${DesktopLogoButton}:hover & {
    opacity: 1;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 0.8rem;
`;

export const HeaderActions = styled.div`
  display: flex;
`;

export const AdminButton = styled.button`
  display: flex;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  border: none;

  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
