import {
  AccountContent,
  AccountPreferencesCard,
  AccountPreferencesCategories,
  AccountPreferencesCategoriesLabel,
  AccountPreferencesCategoriesList,
  AccountPreferencesCategoryBadge,
  AccountPreferencesHeader,
  AccountPreferencesItem,
  AccountPreferencesItemDescription,
  AccountPreferencesItemInfo,
  AccountPreferencesItemTitle,
  AccountPreferencesSeparator,
  AccountPreferencesToggle,
} from "@/styles/components/Account/styles";
import { PageTitle, PageText } from "../../../styles/pages/shared";

export function Preferences() {
  return (
    <AccountContent
      direction="column"
      align="flex-start"
      justify="flex-start"
      padding="0"
    >
      <AccountPreferencesCard>
        <AccountPreferencesHeader>
          <PageTitle fontSize="1.2rem" margin="0 0 0.5rem 0">
            Notificações por E-mail
          </PageTitle>
          <PageText fontSize="0.9rem" margin="0" color="text">
            Escolha quais e-mails você deseja receber
          </PageText>
        </AccountPreferencesHeader>

        <AccountPreferencesItem>
          <AccountPreferencesItemInfo>
            <AccountPreferencesItemTitle>
              Ofertas e Promoções
            </AccountPreferencesItemTitle>
            <AccountPreferencesItemDescription>
              Receba ofertas exclusivas e descontos
            </AccountPreferencesItemDescription>
          </AccountPreferencesItemInfo>
          <AccountPreferencesToggle $active={true}>Ativo</AccountPreferencesToggle>
        </AccountPreferencesItem>

        <AccountPreferencesSeparator />

        <AccountPreferencesItem>
          <AccountPreferencesItemInfo>
            <AccountPreferencesItemTitle>
              Atualizações de Pedidos
            </AccountPreferencesItemTitle>
            <AccountPreferencesItemDescription>
              Notificações sobre status de entrega
            </AccountPreferencesItemDescription>
          </AccountPreferencesItemInfo>
          <AccountPreferencesToggle $active={true}>Ativo</AccountPreferencesToggle>
        </AccountPreferencesItem>

        <AccountPreferencesSeparator />

        <AccountPreferencesItem>
          <AccountPreferencesItemInfo>
            <AccountPreferencesItemTitle>Newsletter</AccountPreferencesItemTitle>
            <AccountPreferencesItemDescription>
              Novidades e lançamentos de produtos
            </AccountPreferencesItemDescription>
          </AccountPreferencesItemInfo>
          <AccountPreferencesToggle $active={false}>
            Inativo
          </AccountPreferencesToggle>
        </AccountPreferencesItem>
      </AccountPreferencesCard>

      <AccountPreferencesCard>
        <AccountPreferencesHeader>
          <PageTitle fontSize="1.2rem" margin="0 0 0.5rem 0">
            Preferências de Compra
          </PageTitle>
          <PageText fontSize="0.9rem" margin="0" color="text">
            Personalize sua experiência de compra
          </PageText>
        </AccountPreferencesHeader>

        <AccountPreferencesCategories>
          <AccountPreferencesCategoriesLabel>
            Categorias Favoritas
          </AccountPreferencesCategoriesLabel>
          <AccountPreferencesCategoriesList>
            <AccountPreferencesCategoryBadge>Notebooks</AccountPreferencesCategoryBadge>
            <AccountPreferencesCategoryBadge>Monitores</AccountPreferencesCategoryBadge>
            <AccountPreferencesCategoryBadge>Periféricos</AccountPreferencesCategoryBadge>
          </AccountPreferencesCategoriesList>
        </AccountPreferencesCategories>
      </AccountPreferencesCard>
    </AccountContent>
  );
}

