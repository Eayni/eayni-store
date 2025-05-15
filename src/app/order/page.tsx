"use client"; // must be at the top!

import { OrderSummary } from "@/components/order/orderSummary";
import { getOrderById } from "@/services";
import { Order } from "@/types/order";
// import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function OrderClientPage() {
  const [order, setOrder] = useState<Order>();
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");

  const id = "682509fcfd1497559fa4a84d";

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

  return (
    <Suspense fallback={<>Loading...</>}>
      <OrderSummary order={order!} />
    </Suspense>
  );
}
