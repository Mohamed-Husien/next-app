import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
interface props {
  searchParams: Promise<{
    rate: string;
  }>;
}

export default async function ProductsPage({ searchParams }: props) {
  const { rate } = await searchParams;
  const filteredValue = rate ?? "all";
  console.log(filteredValue);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">🛍️ Our Products</h1>
      <Suspense fallback={<Spinner />}>
        <ProductList
          url="https://fakestoreapi.com/products"
          filteredValue={filteredValue}
        />
      </Suspense>
    </div>
  );
}
