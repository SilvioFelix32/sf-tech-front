import { IProductReview } from "../interfaces/IProductReview";

export const mockReviews: IProductReview[] = [
  {
    id: 1,
    name: "João Silva",
    rating: 5,
    date: "15/12/2024",
    comment: "Excelente computador! Chegou muito bem embalado e funcionando perfeitamente. Roda todos os jogos que eu queria.",
  },
  {
    id: 2,
    name: "Maria Santos",
    rating: 4,
    date: "10/12/2024",
    comment: "Bom custo-benefício. A entrega foi rápida e o produto corresponde à descrição.",
  },
  {
    id: 3,
    name: "Pedro Costa",
    rating: 5,
    date: "05/12/2024",
    comment: "Perfeito para iniciantes! Montagem impecável e funciona muito bem.",
  },
];

export const mockRating = 4.5;
export const mockReviewsCount = 128;

