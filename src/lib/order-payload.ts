import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const initOrderPayload = () => {
  const { name, email, phone, address, company, client_type } =
    useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);
  return { name, email, phone, address, cart, company, client_type };
};
