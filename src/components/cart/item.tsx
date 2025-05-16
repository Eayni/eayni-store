import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
  item: Cart;
};

export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-16 overflow-hidden">
        <img
          alt={item?.product?.name}
          src={item?.product?.images[0]}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-md">{item?.product?.name}</p>
        <p className="text-xs opacity-50">
          <span className="icon-saudi_riyal"></span>
          {item?.product?.price.toFixed(2)}
        </p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
};
