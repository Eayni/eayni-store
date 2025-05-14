"use client";

import { Product } from "@/types/Item";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";
import { useCartStore } from "@/stores/cart-store";
import ImageCarousel from "../ui/ImageCarousel";

type Props = {
  item: Product;
};

export const ProductItem = ({ item }: Props) => {
  const { toast } = useToast();
  const { upsertCartItem } = useCartStore((state) => state);

  const handleAddButton = () => {
    upsertCartItem(item, 1);
    toast({
      title: "تم إضافة المنتج",
      description: `${item.name} تم إضافته إلى سلة التسوق`,
      action: <ToastAction altText="close">تجاهل</ToastAction>,
      duration: 2000,
    });
  };

  return (
    <div>
      <div className="rounded-md overflow-hidden">
        <ImageCarousel images={item.images} autoPlay={false} showDots={false} />
      </div>
      <div className="mt-3 flex flex-col gap-2">
        <p className="text-lg">
          <b>{item.name}</b>
        </p>
        <p className="text-sm">{item.content}</p>
        <p className="text-sm opacity-50">
          <span className="icon-saudi_riyal"></span>
          {item.price.toFixed(2)}
        </p>
        <Button variant="outline" onClick={handleAddButton}>
          اضف إلى السلة
        </Button>
      </div>
    </div>
  );
};
