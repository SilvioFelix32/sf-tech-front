import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { productsService } from "../../../services";
import { IProduct } from "../../../types";
//components
import { Modal as ModalCreate } from "react-responsive-modal";
//styles
import { Button, Text, Content, Wrapper, Input, Select } from "./styles";

interface modalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setReloadData(value: number);
}

export function ModalCreateProduct({
  isOpen,
  setIsOpen,
  setReloadData,
}: modalProps) {
  const {
    query: { company_id },
  } = useRouter();
  const [product, setProduct] = useState<IProduct[]>([]);
  //product data
  const [sku, setSku] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [url_banner, setUrl] = useState<string>();
  const [discount, setDiscount] = useState(10.0);
  const [amountmin, setAmount_min_sale] = useState(1);
  const [amount_max_sale, setAmount_max_sale] = useState(5);
  const [order_on_menu, setOrder_on_menu] = useState(1);
  const [active, setActive] = useState(true);
  const [combo, setCombo] = useState(true);
  const [for_sale, setFor_sale] = useState(true);
  const [highlighted, setHighlighted] = useState(true);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      sku: sku || uuidv4(),
      title,
      subtitle,
      description,
      url_banner: url_banner || "https://i.imgur.com/2HFGvvT.png",
      amountmin,
      amount_max_sale,
      order_on_menu,
      active,
      combo,
      for_sale,
      highlighted,
      discount,
    };

    await productsService
      .create(company_id as string, data)
      .then(() => setReloadData(Math.random()))
      .catch((err) => alert(err));
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
      }}
      center
    >
      <Wrapper onSubmit={handleSubmit}>
        <Content>
          <Text>Sku:</Text>
          <Input
            type="string"
            placeholder="(Optional)"
            onChange={(e) => setSku(e.target.value)}
          />
          <Text>Title:</Text>
          <Input type="string" onChange={(e) => setTitle(e.target.value)} />
          <Text>Subtitle:</Text>
          <Input type="string" onChange={(e) => setSubtitle(e.target.value)} />
          <Text>DescriTexttion:</Text>
          <Input
            type="string"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Text>Url_banner:</Text>
          <Input
            type="string"
            placeholder="(Optional)"
            onChange={(e) => setUrl(e.target.value)}
          />
          <Text>discount:</Text>
          <Input
            type="number"
            placeholder="(Optional)"
            onChange={(e) => setDiscount(Number(e.target.value))}
          />
          <Text>Quantidade min de Venda:</Text>
          <Input
            type="number"
            onChange={(e) => setAmount_min_sale(Number(e.target.value))}
          />
          <Text>Quantidade máx de Venda:</Text>
          <Input
            type="number"
            onChange={(e) => setAmount_max_sale(Number(e.target.value))}
          />
          <Text>Ordem menu:</Text>
          <Input
            type="number"
            onChange={(e) => setOrder_on_menu(Number(e.target.value))}
          />
        </Content>
        <Content>
          <Text>A venda:</Text>
          <Select
            onChange={(e) =>
              setFor_sale(e.target.value === "true" ? true : false)
            }
            defaultValue="true"
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </Select>
          <Text>Em destaque:</Text>
          <Select
            onChange={(e) =>
              setHighlighted(e.target.value === "true" ? true : false)
            }
            defaultValue="false"
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </Select>
          <Text>Ativo:</Text>
          <Select
            onChange={(e) =>
              setActive(e.target.value === "true" ? true : false)
            }
            defaultValue="true"
          >
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </Select>
        </Content>
        <Button type="submit" onClick={() => setIsOpen(false)}>
          Cadastrar
        </Button>
      </Wrapper>
    </ModalCreate>
  );
}
