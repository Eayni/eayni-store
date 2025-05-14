"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
import { getAllItems } from "@/services/product";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/Item";

type Tab = {
  title: string;
  value: string;
  count: number;
  products: Product[];
};

export const ProductTabs = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getAllItems();
        const tabs: Tab[] = data.map((item) => ({
          title: item.name,
          value: item._id,
          count: item.count,
          products: item.products,
        }));
        setLoading(false);
        setTabs(tabs);
        console.log("Tabs data:", tabs);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Tabs dir="rtl" defaultValue={tabs[0]?.value} className="w-full">
      <TabsList className="flex">
        {tabs.map((item) => (
          <TabsTrigger key={item.value} value={item.value} className="flex-1">
            {item.title} ({item.count})
          </TabsTrigger>
        ))}
      </TabsList>
      {loading && (
        <div className="flex justify-center items-center h-96">
          <div className="loader">جاري التحميل ...</div>
        </div>
      )}

      {tabs.map((item) => (
        <TabsContent key={item.value} value={item.value} className="mt-6">
          {item.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map((product) => (
                <ProductItem key={product.id} item={product} />
              ))}
            </div>
          )}
          {item.products.length === 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
