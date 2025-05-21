import { create } from "zustand";

type States = {
  name: string;
  email: string;
  phone: string;
  client_type: string;
  address: {
    street: string;
    number: string;
    district: string;
    city: string;
  };
  company?: {
    cr: string;
    name: string;
    taxـnumber: string;
    national_address: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setEmail: (name: States["email"]) => void;
  setPhone: (name: States["phone"]) => void;
  setAddress: (address: States["address"]) => void;
  setCompany: (address: States["company"]) => void;
  setClientType: (address: States["client_type"]) => void;
};

const initialState: States = {
  name: "",
  email: "",
  phone: "",
  client_type: "Individual",
  address: {
    street: "",
    number: "",
    district: "",
    city: "",
  },
  company: {
    cr: "",
    name: "",
    taxـnumber: "",
    national_address: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setEmail: (email) => set((state) => ({ ...state, email })),
  setPhone: (phone) => set((state) => ({ ...state, phone })),
  setAddress: (address) => set((state) => ({ ...state, address })),
  setCompany: (company) => set((state) => ({ ...state, company })),
  setClientType: (client_type) => set((state) => ({ ...state, client_type })),
}));
