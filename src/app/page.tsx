import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductTabs } from "@/components/products/tab";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="mx-3">
      <Suspense fallback={<TabsSkeleton />}>
        <ProductTabs />
      </Suspense>
    </div>
  );
};

export default Page;
