import React from "react";
import ProductCard from "./ProductCard";
import FilterBtn from "./FilterBtn";

interface ProductListProps {
  url: string;
  filteredValue: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default async function ProductList({
  url,
  filteredValue,
}: ProductListProps) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");

  const products = await res.json();

  let filteredProduct = [];
  if (filteredValue === "all") filteredProduct = products;
  if (filteredValue === "high") {
    filteredProduct = products.filter(
      (product: Product) => product.rating.rate >= 4
    );
  }

  if (filteredValue === "medium") {
    filteredProduct = products.filter(
      (product: Product) => product.rating.rate >= 3 && product.rating.rate < 4
    );
  }

  if (filteredValue === "low") {
    filteredProduct = products.filter(
      (product: Product) => product.rating.rate < 3
    );
  }

  return (
    <div>
      <div className="flex gap-4 mb-6">
        <FilterBtn />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProduct.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
