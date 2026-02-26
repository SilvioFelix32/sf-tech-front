import { useState, useMemo, useEffect, memo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { BiSearch, BiPackage, BiPlus, BiStore } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

import { useProductFilter } from "../../hooks/useProductFilter";
import { formatPrice } from "../../utils/formatPrice";
import { IProduct, StockLevel } from "../../interfaces";

function getStockLevelLabel(level: StockLevel | undefined): string {
  const labels: Record<StockLevel, string> = {
    OutOfStock: "Sem estoque",
    Low: "Baixo",
    Medium: "Médio",
    High: "Alto",
  };
  return level ? labels[level] ?? level : "-";
}
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "../../components";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
  AdminTablePagination,
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
import { AdminProductText } from "@/styles/pages/admin/styles";

function AdminProducts() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [productId, setProductId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    value: { products, meta },
    isLoading,
  } = useProductFilter({ page: 1, perPage: 100 });

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products ?? [];
    const term = searchTerm.toLowerCase();

    return (products ?? []).filter((p: IProduct) => {
      const title = p.title ?? "";
      const sku = p.sku ?? "";
      return (
        title.toLowerCase().includes(term) ||
        sku.toLowerCase().includes(term) ||
        p.product_id.toLowerCase().includes(term)
      );
    });
  }, [products, searchTerm]);

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const reloadData = () => queryClient.invalidateQueries(["products"]);

  const handleOpenEdit = (id: string) => {
    setProductId(id);
    setEditOpen(true);
  };

  const handleOpenDelete = (id: string) => {
    setProductId(id);
    setDeleteOpen(true);
  };

  const handleView = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <AdminWrapper>
      <AdminTitle>Administração de Produtos</AdminTitle>
      <AdminSubtitle>Gerencie o catálogo de produtos da loja</AdminSubtitle>

      <AdminContent fullWidth>
        <AdminCard>
          <AdminCardHeader>
            <AdminCardHeaderLeft>
              <AdminCardTitleRow>
                <BiPackage />
                <AdminCardTitle>Lista de Produtos</AdminCardTitle>
              </AdminCardTitleRow>
              <AdminCardCount>
                {meta?.total ?? 0} produtos cadastrados
              </AdminCardCount>
            </AdminCardHeaderLeft>
            <AdminCardHeaderRight>
              <AdminSearchWrap>
                <BiSearch />
                <AdminSearchInput
                  type="text"
                  placeholder="Buscar produto..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </AdminSearchWrap>
              <AdminButton onClick={() => setIsCreateOpen(true)}>
                <BiPlus size={18} style={{ marginRight: 8 }} />
                Novo Produto
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
                  <TableHead>SKU</TableHead>
                  <TableHead>Produto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead alignRight>Preço</TableHead>
                  <TableHead alignCenter>Estoque</TableHead>
                  <TableHead alignCenter>Nível</TableHead>
                  <TableHead alignCenter>Destaque</TableHead>
                  <TableHead alignRight>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedProducts.length > 0 ? (
                  paginatedProducts.map((product: IProduct) => (
                    <TableRow key={product.product_id}>
                      <TableCell mono muted style={{ maxWidth: 120, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {product.sku ??
                          `${product.product_id.slice(0, 10)}...`}
                      </TableCell>

                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            overflow: "hidden",
                          }}
                        >
                          {product.urlBanner && (
                            <Image
                              src={product.urlBanner}
                              alt={product.title ?? "Produto"}
                              width={48}
                              height={48}
                              style={{ objectFit: "cover" }}
                            />
                          )}
                          <AdminProductText>{product.title ?? "Produto sem título"} </AdminProductText>
                        </div>
                      </TableCell>
                      <TableCell>
                        <CountBadge>
                          Categoria
                        </CountBadge>
                      </TableCell>

                      <TableCell alignRight fontMedium>
                        {product.price != null
                          ? `R$ ${formatPrice(product.price)}`
                          : "-"}
                      </TableCell>

                      <TableCell alignCenter>
                        <CountBadge>{product.stock ?? 0}</CountBadge>
                      </TableCell>

                      <TableCell alignCenter>
                        <CountBadge $variant={product.stock_level}>
                          {getStockLevelLabel(product.stock_level)}
                        </CountBadge>
                      </TableCell>

                      <TableCell alignCenter>
                        <CountBadge $highlight={product.highlighted}>
                          {product.highlighted ? "Sim" : "Não"}
                        </CountBadge>
                      </TableCell>

                      <TableCell alignRight>
                        <CDropdown>
                          <CDropdownToggle
                            caret={false}
                            className="p-0 btn-link"
                          >
                            <FiMoreVertical
                              size={20}
                              style={{ cursor: "pointer" }}
                            />
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem
                              onClick={() => handleView(product.product_id)}
                            >
                              <BiStore
                                size={16}
                                style={{ marginRight: 8 }}
                              />
                              Visualizar
                            </CDropdownItem>
                            <CDropdownItem
                              onClick={() =>
                                handleOpenEdit(product.product_id)
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
                                handleOpenDelete(product.product_id)
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
                    colSpan={8}
                    message="Nenhum produto encontrado"
                  />
                )}
              </TableBody>
            </Table>
          )}

          {totalItems > 0 && (
            <AdminTablePagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              itemsPerPageOptions={[5, 10, 15, 20]}
              label="produtos"
              onPageChange={setCurrentPage}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            />
          )}
        </AdminCard>
      </AdminContent>

      <ModalCreateProduct
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        setReloadData={reloadData}
      />
      <ModalEditProduct
        product_id={productId}
        onOpen={isEditOpen}
        setOnOpen={setEditOpen}
        setReloadData={reloadData}
      />
      <ModalDeleteProduct
        product_id={productId}
        open={isDeleteOpen}
        setOpen={setDeleteOpen}
        setReloadData={reloadData}
      />
    </AdminWrapper>
  );
}

export default memo(AdminProducts);

