import { Wrapper } from "./styles";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return <Wrapper>{t("main.footer.title")}</Wrapper>;
}
