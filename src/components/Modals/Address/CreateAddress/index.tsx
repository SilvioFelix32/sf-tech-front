import { FormEvent, useState, useEffect } from "react";
import { Modal as ModalCreate } from "react-responsive-modal";
import { LuMapPin, LuHouse, LuBuilding2, LuHash } from "react-icons/lu";
import { IAddress, AddressTypeEnum, AddressPreferenceEnum } from "../../../../interfaces/IDbUser";
import { addressService } from "../../../../services/address-service";
import { GetSwallAlert } from "../../../../utils";
import {
  Wrapper,
  Header,
  HeaderTitleRow,
  HeaderTitle,
  HeaderDescription,
  FormGrid,
  Row,
  FieldGroup,
  FieldLabelRow,
  LabelIcon,
  LabelRequired,
  Input,
  Select,
  Footer,
  SecondaryButton,
  PrimaryButton,
} from "./styles";
import "react-responsive-modal/styles.css";

interface ModalAddressProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user_id: string;
  address?: IAddress;
  onSuccess: () => void;
}

export function ModalAddress({
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
  const [addressType, setAddressType] = useState<AddressTypeEnum>("House");
  const [addressPreference, setAddressPreference] = useState<AddressPreferenceEnum>("Primary");

  function normalizeAddressPreference(
    value: AddressPreferenceEnum | string | null | undefined
  ): AddressPreferenceEnum {
    if (!value) return "Primary";
    const normalized = String(value).toLowerCase();
    if (normalized === "primary") return "Primary";
    if (normalized === "secondary") return "Secondary";
    return "Primary";
  }

  useEffect(() => {
    if (isOpen) {
      if (address) {
        setStreet(address.street);
        setNumber(address.number);
        setNeighborhood(address.neighborhood);
        setCity(address.city);
        setCep(address.cep);
        setAddressType(address.address_type);
        setAddressPreference(normalizeAddressPreference(address.address_preference));
      } else {
        setStreet("");
        setNumber("");
        setNeighborhood("");
        setCity("");
        setCep("");
        setAddressType("House");
        setAddressPreference("Primary");
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
    } catch (error: unknown) {
      GetSwallAlert(
        "center",
        "error",
        error instanceof Error ? error.message : "Erro ao salvar endereço",
        2000
      );
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
          setAddressPreference("Primary");
        }
      }}
      styles={{ modal: { width: "720px", maxHeight: "90vh", padding: 0 } }}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Header>
          <HeaderTitleRow>
            <LuMapPin size={20} />
            <HeaderTitle>{address ? "Editar Endereço" : "Cadastrar Endereço"}</HeaderTitle>
          </HeaderTitleRow>
          <HeaderDescription>
            {address
              ? "Atualize os dados do endereço conforme necessário."
              : "Preencha os campos abaixo para adicionar um novo endereço de entrega."}
          </HeaderDescription>
        </Header>

        <FormGrid>
          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="address_type">
                <LabelIcon>
                  <LuBuilding2 size={14} />
                </LabelIcon>
                Tipo de Endereço <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Select
                id="address_type"
                value={addressType}
                onChange={(e) => setAddressType(e.target.value as AddressTypeEnum)}
              >
                <option value="House">Residencial</option>
                <option value="Work">Trabalho</option>
                <option value="Temporary">Temporário</option>
              </Select>
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="address_preference">
                <LabelIcon>
                  <LuHouse size={14} />
                </LabelIcon>
                Preferência <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Select
                id="address_preference"
                value={addressPreference}
                onChange={(e) => setAddressPreference(e.target.value as AddressPreferenceEnum)}
              >
                <option value="Primary">Principal</option>
                <option value="Secondary">Alternativo</option>
              </Select>
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="street">
                <LabelIcon>
                  <LuMapPin size={14} />
                </LabelIcon>
                Rua <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="street"
                type="text"
                placeholder="Ex: Rua das Flores"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="number">
                <LabelIcon>
                  <LuHash size={14} />
                </LabelIcon>
                Número <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="number"
                type="text"
                placeholder="Ex: 123"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </FieldGroup>
          </Row>

          <Row>
            <FieldGroup>
              <FieldLabelRow htmlFor="neighborhood">
                <LabelIcon>
                  <LuMapPin size={14} />
                </LabelIcon>
                Bairro <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="neighborhood"
                type="text"
                placeholder="Ex: Centro"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FieldLabelRow htmlFor="city">
                <LabelIcon>
                  <LuBuilding2 size={14} />
                </LabelIcon>
                Cidade <LabelRequired>*</LabelRequired>
              </FieldLabelRow>
              <Input
                id="city"
                type="text"
                placeholder="Ex: São Paulo"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </FieldGroup>
          </Row>

          <FieldGroup>
            <FieldLabelRow htmlFor="cep">
              <LabelIcon>
                <LuMapPin size={14} />
              </LabelIcon>
              CEP <LabelRequired>*</LabelRequired>
            </FieldLabelRow>
            <Input
              id="cep"
              type="text"
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(formatCep(e.target.value))}
              maxLength={9}
              required
            />
          </FieldGroup>
        </FormGrid>

        <Footer>
          <SecondaryButton type="button" onClick={() => setIsOpen(false)}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton type="submit">
            {address ? "Atualizar Endereço" : "Cadastrar Endereço"}
          </PrimaryButton>
        </Footer>
      </Wrapper>
    </ModalCreate>
  );
}
