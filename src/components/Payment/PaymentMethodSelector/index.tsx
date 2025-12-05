import { useState, useEffect } from "react";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import { CardForm } from "../Card";
import { PixForm } from "../Pix";
import { User } from "../../../services/auth";
import { PaymentCard, PaymentOptions, SelectedBadge } from "./styles";
import { Title } from "../styles";

export type PaymentMethodType = "credit" | "debit" | "pix" | null;

interface PaymentMethodSelectorProps {
  user: User;
  selectedMethod: PaymentMethodType;
  onMethodSelect: (method: PaymentMethodType) => void;
}

export function PaymentMethodSelector({
  user,
  selectedMethod,
  onMethodSelect,
}: PaymentMethodSelectorProps) {
  const [activeKey, setActiveKey] = useState<number | null>(null);

  const handleItemClick = (itemKey: number, method: PaymentMethodType) => {
    if (activeKey === itemKey) {
      setActiveKey(null);
      onMethodSelect(null);
    } else {
      setActiveKey(itemKey);
      onMethodSelect(method);
    }
  };

  useEffect(() => {
    if (selectedMethod === "credit") {
      setActiveKey(1);
    } else if (selectedMethod === "debit") {
      setActiveKey(2);
    } else if (selectedMethod === "pix") {
      setActiveKey(3);
    }
  }, [selectedMethod]);

  return (
    <PaymentCard>
      <Title>Forma de pagamento:</Title>
      <PaymentOptions>
        <CAccordion activeItemKey={activeKey}>
          <CAccordionItem
            itemKey={1}
            onClick={() => handleItemClick(1, "credit")}
          >
            <CAccordionHeader>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", marginRight: "10px" }}>
                <span>Cartão de Crédito</span>
                {selectedMethod === "credit" && (
                  <SelectedBadge>✓ Selecionado</SelectedBadge>
                )}
              </div>
            </CAccordionHeader>
            <CAccordionBody>
              <CardForm user={user} />
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem
            itemKey={2}
            onClick={() => handleItemClick(2, "debit")}
          >
            <CAccordionHeader>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "8px", width: "100%", marginRight: "15px"
              }}>
                <span>Cartão de Débito</span>
                {selectedMethod === "debit" && (
                  <SelectedBadge>✓ Selecionado</SelectedBadge>
                )}
              </div>
            </CAccordionHeader>
            <CAccordionBody>
              <CardForm user={user} />
            </CAccordionBody>
          </CAccordionItem>
          <CAccordionItem
            itemKey={3}
            onClick={() => handleItemClick(3, "pix")}
          >
            <CAccordionHeader>
              <div style={{
                display: "flex", alignItems: "center",
                gap: "8px", width: "100%", marginRight: "15px"
              }}>
                <span>PIX</span>
                {selectedMethod === "pix" && (
                  <SelectedBadge>✓ Selecionado</SelectedBadge>
                )}
              </div>
            </CAccordionHeader>
            <CAccordionBody>
              <PixForm />
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
      </PaymentOptions>
    </PaymentCard>
  );
}

