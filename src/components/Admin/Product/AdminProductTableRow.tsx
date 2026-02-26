import Image from "next/image";
import { BiStore } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { TableRow, TableCell } from "@/components/AdminTable";
import { CountBadge, AdminProductText } from "@/styles/pages/admin";
import { formatPrice, getStockLevelLabel } from "@/utils";
import { AdminProductRowProps } from "@/interfaces";

const clickableCellStyle = { cursor: "pointer" as const };

export function AdminProductTableRow({
  product,
  categoryTitle,
  onRowClick,
  onViewClick,
  onEditClick,
  onDeleteClick,
}: AdminProductRowProps) {
  return (
    <TableRow key={product.product_id}>
      <TableCell
        mono
        muted
        style={{
          maxWidth: 120,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          ...clickableCellStyle,
        }}
        onClick={() => onRowClick(product.product_id)}
      >
        {product.sku ?? `${product.product_id.slice(0, 10)}...`}
      </TableCell>

      <TableCell style={clickableCellStyle} onClick={() => onRowClick(product.product_id)}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "350px"
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
          <AdminProductText
            style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {product.title ?? "Produto sem título"}
          </AdminProductText>
        </div>
      </TableCell>

      <TableCell style={clickableCellStyle} onClick={() => onRowClick(product.product_id)}>
        <CountBadge style={{ textTransform: "capitalize" }}>{categoryTitle ?? "Categoria"}</CountBadge>
      </TableCell>

      <TableCell
        alignRight
        fontMedium
        style={{ ...clickableCellStyle, width: "120px", textAlign: "center" }}
        onClick={() => onRowClick(product.product_id)}
      >
        {product.price != null ? `R$ ${formatPrice(product.price)}` : "-"}
      </TableCell>

      <TableCell
        alignCenter
        style={clickableCellStyle}
        onClick={() => onRowClick(product.product_id)}
      >
        <CountBadge>{product.stock ?? 0}</CountBadge>
      </TableCell>

      <TableCell
        alignCenter
        style={clickableCellStyle}
        onClick={() => onRowClick(product.product_id)}
      >
        <CountBadge $variant={product.stock_level}>
          {getStockLevelLabel(product.stock_level)}
        </CountBadge>
      </TableCell>

      <TableCell
        alignCenter
        style={clickableCellStyle}
        onClick={() => onRowClick(product.product_id)}
      >
        <CountBadge $highlight={!!product.highlighted} $negative={!product.highlighted}>
          {product.highlighted ? "Sim" : "Não"}
        </CountBadge>
      </TableCell>

      <TableCell alignRight>
        <CDropdown>
          <CDropdownToggle caret={false} className="p-0 btn-link">
            <FiMoreVertical size={20} style={{ cursor: "pointer" }} />
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              onClick={(e) => {
                e.stopPropagation();
                onViewClick(product.product_id);
              }}
            >
              <BiStore size={16} style={{ marginRight: 8 }} />
              Visualizar
            </CDropdownItem>
            <CDropdownItem
              onClick={(e) => {
                e.stopPropagation();
                onEditClick(product.product_id);
              }}
            >
              <MdModeEditOutline size={16} style={{ marginRight: 8 }} />
              Editar
            </CDropdownItem>
            <CDropdownItem
              onClick={(e) => {
                e.stopPropagation();
                onDeleteClick(product.product_id);
              }}
              className="text-danger"
            >
              <MdDeleteOutline size={16} style={{ marginRight: 8 }} />
              Excluir
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      </TableCell>
    </TableRow>
  );
}
