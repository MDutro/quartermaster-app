export interface IProduct {
  id: string;
  name: string;
  adjective: string | null;
  description: string;
  quantity: number;
  createdAt: string;
  updatedAt: string | null;
}

export type ProductContextType = {
  products: IProduct[];
  setProductsContext: (products: IProduct[]) => void;
};
