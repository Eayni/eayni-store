import { Product } from "./Item";

export type Order = {
  invoice: {
    discount: number;
    shipping: number;
    sub_total: number;
    tax: number;
    total: number;
    cart: number;
  };
  code: string;
  _id: string;
  items: {
    product: {
      id: string;
      name: string;
      content: string;
      price: number;
      stock: number;
      shipping_cost: number;
      shipping_days: number;
    };
    quantity: 1;
    _id: string;
  }[];
  client: {
    name: string;
    email: string;
    phone: string;
    _id: string;
  };
  address: {
    city: string;
    district: string;
    number: string;
    street: string;
    _id: string;
  };
  code: string;
  history: {
    status: string;
    date: date;
    _id: string;
  }[];
  status: string;
  createdAt: date;
  updatedAt: date;
  __v: 0;
  transaction: object;
};
