"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
import { getAllItems } from "@/services";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/Item";
import MyLoader from "../loader/MyLoader";

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
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) return <MyLoader />;
  else
    return (
      <Tabs dir="rtl" defaultValue={tabs.at(0)?.value} className="w-full">
        <TabsList className="flex">
          {tabs.map((item) => (
            <TabsTrigger key={item.value} value={item.value} className="flex-1">
              {item.title} ({item.count})
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((item) => (
          <TabsContent key={item.value} value={item.value} className="mt-6">
            {item.products.length > 0 && (
              <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
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
