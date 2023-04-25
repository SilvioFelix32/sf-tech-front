import { Navigation, List, Ul, Button } from "./styles";

interface PaginationProps {
  productsPerPage: number;
  totalProducts: number;
  paginate: (pageNumber: number) => void;
}

export const PaginationButton: React.FC<PaginationProps> = ({
  productsPerPage,
  totalProducts,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Navigation>
      <Ul className="pagination">
        {pageNumbers.map((pageNumber) => (
          <List key={pageNumber} className="page-item">
            <Button onClick={() => paginate(pageNumber)} className="page-link">
              {pageNumber}
            </Button>
          </List>
        ))}
      </Ul>
    </Navigation>
  );
};
