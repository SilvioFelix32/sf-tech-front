import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import Swal from "sweetalert2";
import {
  AccountAddressActions,
  AccountAddressBadge,
  AccountAddressCard,
  AccountAddressHeader,
  AccountAddressHeaderText,
  AccountAddressInfo,
  AccountAddressList,
  AccountAddressName,
  AccountAddressText,
  AccountAddressTitle,
  AccountContent,
} from "@/styles/components/Account/styles";
import { PageTitle, PageText } from "../../../../styles/pages/shared";
import { Button } from "../../../../styles/components";
import { useAuth } from "../../../../hooks/useAuth";
import { addressService } from "../../../../services/address-service";
import { IAddress, AddressType } from "../../../../interfaces/IDbUser";
import { ModalCreateAddress } from "../../../Modals";
import { GetSwallAlert } from "../../../../utils";

function getAddressTypeLabel(type: AddressType): string {
  const labels: Record<AddressType, string> = {
    House: "Casa",
    Work: "Trabalho",
    Temporary: "Temporário",
  };
  return labels[type] || type;
}

export function Addresses() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<IAddress | undefined>();

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

  function handleAddAddress() {
    setEditingAddress(undefined);
    setIsModalOpen(true);
  }

  function handleEditAddress(address: IAddress) {
    setEditingAddress(address);
    setIsModalOpen(true);
  }

  async function handleDeleteAddress(address: IAddress) {
    const result = await Swal.fire({
      title: "Tem certeza?",
      text: `Deseja realmente remover o endereço ${getAddressTypeLabel(address.address_type)}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sim, remover",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed && address.address_id) {
      try {
        await addressService.remove(address.address_id);
        queryClient.invalidateQueries(["addresses", user?.user_id]);
        GetSwallAlert("center", "success", "Endereço removido com sucesso!", 2000);
      } catch (error: any) {
        GetSwallAlert("center", "error", error.message || "Erro ao remover endereço", 2000);
      }
    }
  }

  function handleModalSuccess() {
    queryClient.invalidateQueries(["addresses", user?.user_id]);
  }

  if (isLoading) {
    return (
      <AccountContent
        direction="column"
        align="flex-start"
        justify="flex-start"
        padding="0"
      >
        <PageText fontSize="0.95rem" margin="0" color="text">
          Carregando endereços...
        </PageText>
      </AccountContent>
    );
  }

  return (
    <AccountContent
      direction="column"
      align="flex-start"
      justify="flex-start"
      padding="0"
    >
      <AccountAddressHeader>
        <AccountAddressHeaderText>
          <PageTitle fontSize="1.4rem" margin="0 0 0.5rem 0">
            Meus Endereços
          </PageTitle>
          <PageText fontSize="1rem" margin="0" color="text">
            Gerencie seus endereços de entrega
          </PageText>
        </AccountAddressHeaderText>
        <Button width="160px" height="40px" onClick={handleAddAddress}>
          Adicionar Endereço
        </Button>
      </AccountAddressHeader>

      {addresses.length === 0 ? (
        <PageText fontSize="0.95rem" margin="20px 0 0 0" color="text">
          Nenhum endereço cadastrado
        </PageText>
      ) : (
        <AccountAddressList>
          {addresses.map((address) => {
            const isPrimary = address.address_preference === address.address_type;
            return (
              <AccountAddressCard key={address.address_id} $isPrimary={isPrimary}>
                <AccountAddressInfo>
                  <AccountAddressTitle>
                    <AccountAddressName>
                      {getAddressTypeLabel(address.address_type)}
                    </AccountAddressName>
                    {isPrimary && <AccountAddressBadge>Principal</AccountAddressBadge>}
                  </AccountAddressTitle>
                  <AccountAddressText>
                    {address.street}, {address.number}
                  </AccountAddressText>
                  <AccountAddressText>
                    {address.neighborhood} - {address.city}
                  </AccountAddressText>
                  <AccountAddressText>CEP: {address.cep}</AccountAddressText>
                </AccountAddressInfo>
                <AccountAddressActions>
                  <Button
                    width="80px"
                    height="32px"
                    backgroundColor="background"
                    textColor="text"
                    onClick={() => handleEditAddress(address)}
                  >
                    Editar
                  </Button>
                  <Button
                    width="90px"
                    height="32px"
                    backgroundColor="background"
                    textColor="text"
                    onClick={() => handleDeleteAddress(address)}
                  >
                    Remover
                  </Button>
                </AccountAddressActions>
              </AccountAddressCard>
            );
          })}
        </AccountAddressList>
      )}

      {user?.user_id && (
        <ModalCreateAddress
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          user_id={user.user_id}
          address={editingAddress}
          onSuccess={handleModalSuccess}
        />
      )}
    </AccountContent>
  );
}

