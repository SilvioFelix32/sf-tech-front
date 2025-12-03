import { useState } from "react";
import {
  AccountTabsContainer,
  AccountTabsList,
  AccountTabButton,
} from "@/styles/components/Account/styles";
import { useAuth } from "../../hooks/useAuth";
import { PageWrapper, PageTitle, PageText } from "../../styles/pages/shared";
import { PersonalData } from "./PersonalData";
import { Addresses } from "./Addresses";
import { Preferences } from "./Preferences";
import { Security } from "./Security";

export default function MyAccount() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"dados" | "seguranca" | "enderecos" | "preferencias">("dados");

  const displayUser = {
    name: user?.name ?? "Sftech",
    lastName: user?.lastName ?? "Corp",
    email: user?.email ?? "sftech@mailinator.com",
  };

  return (
    <PageWrapper width="100%" padding="24px">
      <PageTitle fontSize="28px" margin="0 0 0.25rem 0">
        Minha Conta
      </PageTitle>
      <PageText fontSize="0.95rem" margin="0 0 1.5rem 0" color="text">
        Gerencie suas informações pessoais e preferências
      </PageText>

      <AccountTabsContainer>
        <AccountTabsList>
          <AccountTabButton
            type="button"
            $active={activeTab === "dados"}
            onClick={() => setActiveTab("dados")}
          >
            Dados Pessoais
          </AccountTabButton>
          <AccountTabButton
            type="button"
            $active={activeTab === "seguranca"}
            onClick={() => setActiveTab("seguranca")}
          >
            Segurança
          </AccountTabButton>
          <AccountTabButton
            type="button"
            $active={activeTab === "enderecos"}
            onClick={() => setActiveTab("enderecos")}
          >
            Endereços
          </AccountTabButton>
          <AccountTabButton
            type="button"
            $active={activeTab === "preferencias"}
            onClick={() => setActiveTab("preferencias")}
          >
            Preferências
          </AccountTabButton>
        </AccountTabsList>
      </AccountTabsContainer>

      {activeTab === "dados" && (
        <PersonalData
          name={displayUser.name}
          lastName={displayUser.lastName}
          email={displayUser.email}
        />
      )}

      {activeTab === "seguranca" && <Security />}

      {activeTab === "enderecos" && <Addresses />}

      {activeTab === "preferencias" && <Preferences />}
    </PageWrapper>
  );
}

