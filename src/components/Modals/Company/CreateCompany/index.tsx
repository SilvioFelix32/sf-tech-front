import { FormEvent, useState } from "react";
import { Modal as ModalCreate } from "react-responsive-modal";
import { companiesService } from "@/services/companies-service";
import { ICompanyParams } from "@/interfaces/ICompanyParams";
import { GetSwallAlert } from "@/utils";
import { Button, Text, Content, Wrapper, Input, Select } from "./styles";
import "react-responsive-modal/styles.css";

interface ModalCreateCompanyProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onSuccess: () => void;
}

export function ModalCreateCompany({
  isOpen,
  setIsOpen,
  onSuccess,
}: ModalCreateCompanyProps) {
  const [name, setName] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [status, setStatus] = useState<"ACTIVE" | "INACTIVE">("ACTIVE");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data: ICompanyParams = {
      name: name || undefined,
      fantasyName: fantasyName || undefined,
      email: email || undefined,
      cnpj: cnpj || undefined,
      status,
    };

    await companiesService
      .create(data)
      .then(() => {
        onSuccess();
        setIsOpen(false);
        setName("");
        setFantasyName("");
        setEmail("");
        setCnpj("");
        setStatus("ACTIVE");
      })
      .catch((error: Error) => {
        GetSwallAlert("center", "error", error.message ?? "Erro ao cadastrar empresa", 2000);
      });
  }

  return (
    <ModalCreate
      classNames={{
        overlay: "customOverlay",
        modal: "customModal",
      }}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Content>
          <Text>Nome:</Text>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Text>Nome Fantasia:</Text>
          <Input
            type="text"
            value={fantasyName}
            onChange={(e) => setFantasyName(e.target.value)}
          />
          <Text>CNPJ:</Text>
          <Input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            placeholder="00.000.000/0001-00"
          />
          <Text>Email:</Text>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Text>Status:</Text>
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value as "ACTIVE" | "INACTIVE")}
          >
            <option value="ACTIVE">Ativo</option>
            <option value="INACTIVE">Inativo</option>
          </Select>
        </Content>
        <Button type="submit">Cadastrar</Button>
      </Wrapper>
    </ModalCreate>
  );
}
