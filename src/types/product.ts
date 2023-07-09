export interface IProduct {
  id?: string;
  name: string;
  adjective: string | null;
  description: string;
  quantity: number;
  country_of_origin: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface IProductFormInitialValues {
  name: string;
  adjective: string;
  description: string;
  quantity: number;
  country_of_origin: string;
}
