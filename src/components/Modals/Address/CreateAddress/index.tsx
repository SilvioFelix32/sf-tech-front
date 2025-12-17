import { FormEvent, useState, useEffect } from "react";
import { Modal as ModalCreate } from "react-responsive-modal";
import { IAddress, AddressType, AddressPreference } from "../../../../interfaces/IDbUser";
import { addressService } from "../../../../services/address-service";
import { GetSwallAlert } from "../../../../utils";
import { Button, Text, Content, Wrapper, Input, Select } from "./styles";
import "react-responsive-modal/styles.css";

interface ModalAddressProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user_id: string;
  address?: IAddress;
  onSuccess: () => void;
}

export function ModalCreateAddress({
  isOpen,
  setIsOpen,
  user_id,
  address,
  onSuccess,
}: ModalAddressProps) {
  const [street, setStreet] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [addressType, setAddressType] = useState<AddressType>("House");
  const [addressPreference, setAddressPreference] = useState<AddressPreference>("House");

  useEffect(() => {
    if (isOpen) {
      if (address) {
        setStreet(address.street);
        setNumber(address.number);
        setNeighborhood(address.neighborhood);
        setCity(address.city);
        setCep(address.cep);
        setAddressType(address.address_type);
        setAddressPreference(address.address_preference);
      } else {
        setStreet("");
        setNumber("");
        setNeighborhood("");
        setCity("");
        setCep("");
        setAddressType("House");
        setAddressPreference("House");
      }
    }
  }, [address, isOpen]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const addressData: Omit<IAddress, "address_id" | "createdAt" | "updatedAt"> = {
      user_id,
      street,
      number,
      neighborhood,
      city,
      cep,
      address_type: addressType,
      address_preference: addressPreference,
    };

    try {
      if (address?.address_id) {
        await addressService.update(address.address_id, addressData);
        GetSwallAlert("center", "success", "Endereço atualizado com sucesso!", 2000);
      } else {
        await addressService.create(addressData);
        GetSwallAlert("center", "success", "Endereço cadastrado com sucesso!", 2000);
      }
      setIsOpen(false);
      onSuccess();
    } catch (error: any) {
      GetSwallAlert("center", "error", error.message || "Erro ao salvar endereço", 2000);
    }
  }

  function formatCep(value: string): string {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 8) {
      return cleaned.replace(/(\d{5})(\d{3})/, "$1-$2");
    }
    return cleaned.substring(0, 8).replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  return (
    <ModalCreate
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        if (!address) {
          setStreet("");
          setNumber("");
          setNeighborhood("");
          setCity("");
          setCep("");
          setAddressType("House");
          setAddressPreference("House");
        }
      }}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Content>
          <Text>Tipo de Endereço:</Text>
          <Select
            value={addressType}
            onChange={(e) => setAddressType(e.target.value as AddressType)}
          >
            <option value="House">Residencial</option>
            <option value="Work">Trabalho</option>
            <option value="Temporary">Temporário</option>
          </Select>

          <Text>Preferência:</Text>
          <Select
            value={addressPreference}
            onChange={(e) => setAddressPreference(e.target.value as AddressPreference)}
          >
            <option value="House">Residencial</option>
            <option value="Work">Trabalho</option>
            <option value="Temporary">Temporário</option>
          </Select>

          <Text>Rua:</Text>
          <Input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />

          <Text>Número:</Text>
          <Input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <Text>Bairro:</Text>
          <Input
            type="text"
            value={neighborhood}
            onChange={(e) => setNeighborhood(e.target.value)}
            required
          />

          <Text>Cidade:</Text>
          <Input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />

          <Text>CEP:</Text>
          <Input
            type="text"
            value={cep}
            onChange={(e) => setCep(formatCep(e.target.value))}
            placeholder="00000-000"
            maxLength={9}
            required
          />
        </Content>
        <Button type="submit">{address ? "Atualizar" : "Cadastrar"}</Button>
      </Wrapper>
    </ModalCreate>
  );
}

