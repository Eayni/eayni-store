import { TabsSkeleton } from "@/components/products/skeleton";
import { ProductTabs } from "@/components/products/tab";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<TabsSkeleton />}>
      <div className="mx-3">
        <ProductTabs />
      </div>
    </Suspense>
  );
};

export default Page;
