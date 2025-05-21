import { OrderSummary } from "@/components/order/orderSummary";
import { TabsSkeleton } from "@/components/products/skeleton";
import { getOrderById } from "@/services";
import { Suspense } from "react";

export default async function InternalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const order = await getOrderById(resolvedParams.id);
  if (!order._id) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 border rounded-md shadow-md bg-danger space-y-6">
        <div>صفحه غير موجود</div>
      </div>
    );
  }
  return (
    <Suspense fallback={<TabsSkeleton />}>
      <OrderSummary order={order} />
    </Suspense>
  );
}
