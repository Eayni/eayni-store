"use client"; // must be at the top!

import { OrderSummary } from "@/components/order/orderSummary";
import { getOrderById } from "@/services";
import { Order } from "@/types/order";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderClientPage() {
  const [order, setOrder] = useState<Order>();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const callback = searchParams.get("callback");

  useEffect(() => {
    if (id) {
      getOrderById(id)
        .then((data) => {
          setOrder(data);
        })
        .catch((error) => {
          console.error("Error fetching order:", error);
        });
    }
  }, [id]);
  if (id && callback === "payment") {
    return <OrderSummary order={order!} />;
  } else {
    return <div>رقم الطلب: Not provided</div>;
  }
}
