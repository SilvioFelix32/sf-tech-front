import { useState } from "react";
import { useQuery } from "react-query";
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
import { userService } from "../../services/user-service";
import { IDbUser } from "../../interfaces/IDbUser";

function formatCpf(cpf: string): string {
  if (!cpf) return "";
  const cleaned = cpf.replace(/\D/g, "");
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  return cpf;
}

function formatCellphone(cellphone: string): string {
  if (!cellphone) return "";
  const cleaned = cellphone.replace(/\D/g, "");
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }
  return cellphone;
}

function formatGender(gender: string): string {
  const genderMap: Record<string, string> = {
    Male: "Masculino",
    Female: "Feminino",
    Other: "Outro",
  };
  return genderMap[gender] || gender;
}

export default function MyAccount() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"dados" | "seguranca" | "enderecos" | "preferencias">("dados");

  const { data: dbUser, isLoading } = useQuery<IDbUser>(
    ["user", user?.user_id],
    () => userService.findById(user!.user_id!),
    {
      enabled: !!user?.user_id,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

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
          name={dbUser?.first_name ?? user?.name ?? ""}
          lastName={dbUser?.last_name ?? user?.lastName ?? ""}
          email={dbUser?.email ?? user?.email ?? ""}
          cpf={formatCpf(dbUser?.cpf ?? "")}
          cellphone={formatCellphone(dbUser?.cellphone ?? "")}
          birthdate={dbUser?.birthdate ?? ""}
          gender={formatGender(dbUser?.gender ?? "")}
          isLoading={isLoading}
        />
      )}

      {activeTab === "seguranca" && <Security />}

      {activeTab === "enderecos" && <Addresses />}

      {activeTab === "preferencias" && <Preferences />}
    </PageWrapper>
  );
}

