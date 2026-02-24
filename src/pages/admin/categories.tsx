import { memo, useState, useMemo } from "react";
import { useQueryClient } from "react-query";
import { BiSearch, BiNews, BiPlus } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { IProductCategory } from "../../interfaces";
import { useCategoryFilter } from "../../hooks/useCategoryFilter";
import {
  ModalCreateCategory,
  ModalEditCategory,
  ModalDeleteCategory,
} from "../../components";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
} from "../../components/AdminTable";
import {
  AdminWrapper,
  AdminContent,
  AdminTitle,
  AdminSubtitle,
  AdminCard,
  AdminCardHeader,
  AdminCardHeaderLeft,
  AdminCardHeaderRight,
  AdminCardTitleRow,
  AdminCardTitle,
  AdminCardCount,
  AdminSearchWrap,
  AdminSearchInput,
  AdminButton,
  CountBadge,
} from "../../styles/pages/admin";
import "react-responsive-modal/styles.css";

function AdminCategories() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const {
    value: { productCategories, meta },
    isLoading,
  } = useCategoryFilter({ page: 1, perPage: 100 });

  const filteredCategories = useMemo(() => {
    if (!searchTerm.trim()) return productCategories ?? [];
    const term = searchTerm.toLowerCase();
    return (productCategories ?? []).filter(
      (c: IProductCategory) =>
        c.title?.toLowerCase().includes(term) ||
        c.description?.toLowerCase().includes(term)
    );
  }, [productCategories, searchTerm]);

  const handleInvalidate = () => {
    queryClient.invalidateQueries(["productCategories"]);
  };

  const handleOpenEdit = (id: string) => {
    setCategoryId(id);
    setEditOpen(true);
  };

  const handleOpenDelete = (id: string) => {
    setCategoryId(id);
    setDeleteOpen(true);
  };

  return (
    <AdminWrapper>
      <AdminTitle>Administração de Categorias</AdminTitle>
      <AdminSubtitle>Gerencie as categorias de produtos da loja</AdminSubtitle>
      <AdminContent fullWidth>
        <AdminCard>
          <AdminCardHeader>
            <AdminCardHeaderLeft>
              <AdminCardTitleRow>
                <BiNews />
                <AdminCardTitle>Lista de Categorias</AdminCardTitle>
              </AdminCardTitleRow>
              <AdminCardCount>
                {meta?.total ?? 0} categorias cadastradas
              </AdminCardCount>
            </AdminCardHeaderLeft>
            <AdminCardHeaderRight>
              <AdminSearchWrap>
                <BiSearch />
                <AdminSearchInput
                  type="text"
                  placeholder="Buscar categoria..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </AdminSearchWrap>
              <AdminButton onClick={() => setIsCreateOpen(true)}>
                <BiPlus size={18} style={{ marginRight: 8 }} />
                Nova Categoria
              </AdminButton>
            </AdminCardHeaderRight>
          </AdminCardHeader>

          {isLoading ? (
            <p style={{ padding: 24, textAlign: "center", opacity: 0.8 }}>
              Carregando...
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Título</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead alignCenter>Produtos</TableHead>
                  <TableHead alignRight>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category: IProductCategory) => (
                    <TableRow key={category.category_id}>
                      <TableCell fontMedium>{category.title}</TableCell>
                      <TableCell muted>{category.description ?? "-"}</TableCell>
                      <TableCell alignCenter>
                        <CountBadge>
                          {category.products?.length ?? 0}
                        </CountBadge>
                      </TableCell>
                      <TableCell alignRight>
                        <CDropdown>
                          <CDropdownToggle caret={false} className="p-0 btn-link">
                            <FiMoreVertical
                              size={20}
                              style={{ cursor: "pointer" }}
                            />
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem
                              onClick={() =>
                                handleOpenEdit(category.category_id)
                              }
                            >
                              <MdModeEditOutline
                                size={16}
                                style={{ marginRight: 8 }}
                              />
                              Editar
                            </CDropdownItem>
                            <CDropdownItem
                              onClick={() =>
                                handleOpenDelete(category.category_id)
                              }
                              className="text-danger"
                            >
                              <MdDeleteOutline
                                size={16}
                                style={{ marginRight: 8 }}
                              />
                              Excluir
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <AdminTableEmpty
                    colSpan={4}
                    message="Nenhuma categoria encontrada"
                  />
                )}
              </TableBody>
            </Table>
          )}
        </AdminCard>
      </AdminContent>

      <ModalCreateCategory
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        setReloadData={(_value?: number) => handleInvalidate()}
      />
      <ModalEditCategory
        category_id={categoryId}
        onOpen={isEditOpen}
        setOnOpen={setEditOpen}
        setReloadData={(_value?: number) => handleInvalidate()}
      />
      <ModalDeleteCategory
        category_id={categoryId}
        open={isDeleteOpen}
        setOpen={setDeleteOpen}
        setReloadData={(_value?: number) => handleInvalidate()}
      />
    </AdminWrapper>
  );
}

export default memo(AdminCategories);
