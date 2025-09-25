"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductCard from "@/components/ProductCard";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);

  if (cart.length === 0)
    return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cart.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
