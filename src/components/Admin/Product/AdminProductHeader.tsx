import { BiSearch, BiPackage, BiPlus } from "react-icons/bi";
import {
  AdminCardHeader,
  AdminCardHeaderLeft,
  AdminCardHeaderRight,
  AdminCardTitleRow,
  AdminCardTitle,
  AdminCardCount,
  AdminSearchWrap,
  AdminSearchInput,
  AdminButton,
} from "@/styles/pages/admin";
import { AdminProductHeaderProps } from "@/interfaces";

export function AdminProductHeader({
  totalCount,
  searchTerm,
  onSearchChange,
  onCreateClick,
}: AdminProductHeaderProps) {
  return (
    <AdminCardHeader>
      <AdminCardHeaderLeft>
        <AdminCardTitleRow>
          <BiPackage />
          <AdminCardTitle>Lista de Produtos</AdminCardTitle>
        </AdminCardTitleRow>
        <AdminCardCount>{totalCount} produtos cadastrados</AdminCardCount>
      </AdminCardHeaderLeft>
      <AdminCardHeaderRight>
        <AdminSearchWrap>
          <BiSearch />
          <AdminSearchInput
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </AdminSearchWrap>
        <AdminButton onClick={onCreateClick}>
          <BiPlus size={18} style={{ marginRight: 8 }} />
          Novo Produto
        </AdminButton>
      </AdminCardHeaderRight>
    </AdminCardHeader>
  );
}
