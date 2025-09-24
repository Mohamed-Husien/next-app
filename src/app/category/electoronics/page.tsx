import React, { Suspense } from "react";
import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";
interface props {
  searchParams: Promise<{
    rate: string;
  }>;
}
export default async function Page({ searchParams }: props) {
  const { rate } = await searchParams;
  const filteredValue = rate ?? "all";
  console.log(filteredValue);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">📱 Electronics</h1>
      <Suspense fallback={<Spinner />}>
        <ProductList
          url="https://fakestoreapi.com/products/category/electronics"
          filteredValue={filteredValue}
        />
      </Suspense>
    </div>
  );
}
