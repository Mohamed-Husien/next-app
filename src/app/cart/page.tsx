"use client";

import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
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
export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

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
