import { User } from "../../../interfaces/IUser";
import { useQuery } from "react-query";
import { addressService } from "../../../services/address-service";
import { IAddress } from "../../../interfaces/IDbUser";
import { DeliveryRecipient, DeliveryText, DeliveryInfo } from "../styles";

interface DeliveryMethodProps {
  user: User;
}

function getAddressTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    House: "Residencial",
    Work: "Trabalho",
    Temporary: "Temporário",
  };
  return labels[type] || type;
}

export function DeliveryMethod({ user }: DeliveryMethodProps) {
  const { data: addresses = [], isLoading } = useQuery<IAddress[]>(
    ["addresses", user?.user_id],
    () => {
      if (!user?.user_id) throw new Error("user_id não disponível");
      return addressService.findAll(user.user_id);
    },
    {
      enabled: !!user?.user_id,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

  function getPrimaryAddress(): IAddress | null {
    if (addresses.length === 0) return null;
    
    const primaryAddress = addresses.find(
      (addr) => addr.address_preference === "Primary"
    );
    
    return primaryAddress || addresses[0] || null;
  }

  const primaryAddress = getPrimaryAddress();

  if (isLoading) {
    return (
      <DeliveryInfo>
        <DeliveryText>Carregando endereço...</DeliveryText>
      </DeliveryInfo>
    );
  }

  if (!primaryAddress) {
    return (
      <DeliveryInfo>
        <DeliveryText>Nenhum endereço cadastrado</DeliveryText>
        <DeliveryText style={{ fontSize: "0.85rem", color: "#666" }}>
          Cadastre um endereço na seção "Minha Conta"
        </DeliveryText>
      </DeliveryInfo>
    );
  }

  return (
    <DeliveryInfo>
      <DeliveryRecipient>
        Destinatário: {user?.name} {user?.lastName} ({getAddressTypeLabel(primaryAddress.address_type)})
      </DeliveryRecipient>
      <DeliveryText>
        {primaryAddress.street}, {primaryAddress.number}
      </DeliveryText>
      <DeliveryText>
        {primaryAddress.neighborhood} - {primaryAddress.city}
      </DeliveryText>
      <DeliveryText>
        CEP: {primaryAddress.cep}
      </DeliveryText>
    </DeliveryInfo>
  );
}
