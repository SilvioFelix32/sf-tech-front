import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import { useProductFilter } from "../../hooks/useProductFilter";
import {
  ModalCreateProduct,
  ModalDeleteProduct,
  ModalEditProduct,
} from "../../components";
import { AdminProductTable } from "../../components/Admin/Product";
import { AdminWrapper, AdminContent, AdminTitle, AdminSubtitle } from "@/styles/pages/admin";
import { IProduct, ProductSortField, ProductSortOrder } from "../../interfaces";
import { categoryService } from "../../services";
import { getStockLevelOrder } from "../../utils";
import { environment } from "../../config/environment";
import { ICategoryResponse } from "../../interfaces";

function AdminProducts() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const company_id = environment.companyId;
  const [productId, setProductId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<ProductSortField>("category");
  const [sortOrder, setSortOrder] = useState<ProductSortOrder>("asc");

  const {
    value: { products },
    isLoading,
  } = useProductFilter({ page: 1, perPage: 100, queryKey: "admin-products" });

  const { data: categoriesResponse } = useQuery<ICategoryResponse>(
    ["productCategories", company_id],
    () => categoryService.getAll(company_id, { page: 1, limit: 500 }),
    { staleTime: 5 * 60 * 1000 }
  );

  const categoriesMap = useMemo(() => {
    const map: Record<string, string> = {};
    (categoriesResponse?.data ?? []).forEach((c) => {
      map[c.category_id] = c.title ?? "";
    });
    return map;
  }, [categoriesResponse?.data]);

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

  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    const mult = sortOrder === "asc" ? 1 : -1;

    list.sort((a, b) => {
      let cmp = 0;
      switch (sortField) {
        case "category":
          cmp = (categoriesMap[a.category_id] ?? "").localeCompare(
            categoriesMap[b.category_id] ?? ""
          );
          break;
        case "price":
          cmp = (a.price ?? 0) - (b.price ?? 0);
          break;
        case "stock":
          cmp = (a.stock ?? 0) - (b.stock ?? 0);
          break;
        case "stock_level":
          cmp = getStockLevelOrder(a.stock_level) - getStockLevelOrder(b.stock_level);
          break;
        case "highlighted":
          cmp = (a.highlighted ? 1 : 0) - (b.highlighted ? 1 : 0);
          break;
        default:
          return 0;
      }
      return mult * cmp;
    });
    return list;
  }, [filteredProducts, sortField, sortOrder, categoriesMap]);

  const totalItems = sortedProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  const handleSortChange = (field: ProductSortField) => {
    setSortField((prev) => (prev === field ? prev : field));
    setSortOrder((prev) =>
      sortField === field ? (prev === "asc" ? "desc" : "asc") : "asc"
    );
    setCurrentPage(1);
  };

  const reloadData = () =>
    queryClient.invalidateQueries(["admin-products"]);

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
        <AdminProductTable
          isLoading={isLoading}
          products={paginatedProducts}
          categoriesMap={categoriesMap}
          sortField={sortField}
          sortOrder={sortOrder}
          searchTerm={searchTerm}
          totalItems={totalItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onSearchChange={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
          }}
          onSortChange={handleSortChange}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
          onCreateClick={() => setIsCreateOpen(true)}
          onRowClick={handleOpenEdit}
          onViewClick={handleView}
          onEditClick={handleOpenEdit}
          onDeleteClick={handleOpenDelete}
        />
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

export default AdminProducts;
