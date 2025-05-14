import { create } from "zustand";

type States = {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement?: string | undefined;
    district: string;
    city: string;
    state: string;
  };
};

type Actions = {
  setName: (name: States["name"]) => void;
  setEmail: (name: States["email"]) => void;
  setPhone: (name: States["phone"]) => void;
  setAddress: (address: States["address"]) => void;
};

const initialState: States = {
  name: "",
  email: "",
  phone: "",
  address: {
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    state: "",
  },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
  ...initialState,
  setName: (name) => set((state) => ({ ...state, name })),
  setEmail: (email) => set((state) => ({ ...state, email })),
  setPhone: (phone) => set((state) => ({ ...state, phone })),
  setAddress: (address) => set((state) => ({ ...state, address })),
}));
