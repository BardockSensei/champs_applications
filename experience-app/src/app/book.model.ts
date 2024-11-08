// Modèle de Livre
export interface Book {
  id: number;
  title: string;
  author: string;
  date: number;
  type: string;
  availability: boolean;
  isbn: number | null;
}
