import { Breadcrumb } from "../../../styles/pages/product";

interface ProductBreadcrumbProps {
  categoryName?: string;
  productName: string;
}

export function ProductBreadcrumb({ categoryName, productName }: ProductBreadcrumbProps) {
  return (
    <Breadcrumb>
      <a href="/">Home</a>
      <span>/</span>
      {categoryName ? (
        <>
          <a href="/">{categoryName}</a>
          <span>/</span>
        </>
      ) : (
        <>
          <a href="/">Computadores</a>
          <span>/</span>
        </>
      )}
      <span>{productName}</span>
    </Breadcrumb>
  );
}

