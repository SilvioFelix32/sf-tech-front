import "@coreui/coreui/dist/css/coreui.min.css";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  AdminTableEmpty,
  AdminTablePagination,
} from "@/components/AdminTable";
import { AdminCard } from "@/styles/pages/admin";
import { AdminProductTableRow } from "./AdminProductTableRow";
import { AdminProductHeader } from "./AdminProductHeader";
import { AdminProductTableProps, ProductSortField } from "@/interfaces";

const sortableHeaderStyle = { cursor: "pointer", userSelect: "none" as const };

function SortableHeader({
  label,
  field,
  currentField,
  sortOrder,
  onSort,
  alignCenter,
  alignRight,
}: {
  label: string;
  field: ProductSortField;
  currentField: ProductSortField;
  sortOrder: "asc" | "desc";
  onSort: (field: ProductSortField) => void;
  alignCenter?: boolean;
  alignRight?: boolean;
}) {
  const isActive = currentField === field;
  const showAsc = isActive ? sortOrder === "asc" : false;
  const iconOpacity = isActive ? 1 : 0.4;
  return (
    <TableHead
      alignCenter={alignCenter}
      alignRight={alignRight}
      onClick={() => onSort(field)}
      style={sortableHeaderStyle}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
        {label}
        {showAsc ? (
          <BiChevronUp size={16} style={{ opacity: iconOpacity }} />
        ) : (
          <BiChevronDown size={16} style={{ opacity: iconOpacity }} />
        )}
      </span>
    </TableHead>
  );
}

export function AdminProductTable({
  isLoading,
  products,
  categoriesMap,
  sortField,
  sortOrder,
  searchTerm,
  totalItems,
  currentPage,
  itemsPerPage,
  onSearchChange,
  onSortChange,
  onPageChange,
  onItemsPerPageChange,
  onCreateClick,
  onRowClick,
  onViewClick,
  onEditClick,
  onDeleteClick,
}: AdminProductTableProps) {
  return (
    <AdminCard>
      <AdminProductHeader
        totalCount={totalItems}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onCreateClick={onCreateClick}
      />

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
              <SortableHeader
                label="Categoria"
                field="category"
                currentField={sortField}
                sortOrder={sortOrder}
                onSort={onSortChange}
              />
              <SortableHeader
                label="Preço"
                field="price"
                currentField={sortField}
                sortOrder={sortOrder}
                onSort={onSortChange}
                alignCenter
              />
              <SortableHeader
                label="Estoque"
                field="stock"
                currentField={sortField}
                sortOrder={sortOrder}
                onSort={onSortChange}
                alignCenter
              />
              <SortableHeader
                label="Nível"
                field="stock_level"
                currentField={sortField}
                sortOrder={sortOrder}
                onSort={onSortChange}
                alignCenter
              />
              <SortableHeader
                label="Destaque"
                field="highlighted"
                currentField={sortField}
                sortOrder={sortOrder}
                onSort={onSortChange}
                alignCenter
              />
              <TableHead alignRight>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <AdminProductTableRow
                  key={product.product_id}
                  product={product}
                  categoryTitle={product.category_id ? categoriesMap[product.category_id] : undefined}
                  onRowClick={onRowClick}
                  onViewClick={onViewClick}
                  onEditClick={onEditClick}
                  onDeleteClick={onDeleteClick}
                />
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
          onPageChange={onPageChange}
          onItemsPerPageChange={(value) => {
            onItemsPerPageChange(value);
            onPageChange(1);
          }}
        />
      )}
    </AdminCard>
  );
}
