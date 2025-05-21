export type Product = {
  id: string;
  name: string;
  content: string;
  stock: number;
  price: number;
  shipping_cost: number;
  shipping_days: number;
  images: string[];
  active: true;
};

export type Item = {
  _id: string;
  name: string;
  count: 1;
  products: Product[];
};
