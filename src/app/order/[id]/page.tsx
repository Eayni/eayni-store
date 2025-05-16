"use client"; // must be at the top!

import { OrderSummary } from "@/components/order/orderSummary";
import { getOrderById } from "@/services";
import { Order } from "@/types/order";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default async function OrderClientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [order, setOrder] = useState<Order>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchOrder = async () => {
      console.log("Fetching order with searchParams:", searchParams);
      if (id) {
        try {
          const data = await getOrderById(id);
          setOrder(data);
        } catch (error) {
          console.error("Error fetching order:", error);
        }
      }
    };

    fetchOrder();
  }, [searchParams]);

  return (
    <Suspense fallback={<>Loading...</>}>
      <OrderSummary order={order!} />
    </Suspense>
  );
}
