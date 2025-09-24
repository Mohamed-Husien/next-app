"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import styles from "./ProductCard.module.css";

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

export default function ProductCard({ product }: { product: Product }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const currentCart = storedCart ? JSON.parse(storedCart) : [];
    setCart(currentCart);
    setInCart(currentCart.some((item: Product) => item.id === product.id));
  }, []);

  const handleAddToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setInCart(false);
  };

  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        loading="lazy"
        className={styles.image}
      />
      <h2 className="text-black">{product.title}</h2>
      <p className={styles.price}>${product.price}</p>
      <div className={styles.rating}>
        <span className={styles.stars}>{product.rating.rate} ⭐</span>
        <span>({product.rating.count})</span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <Link href={`/product/${product.id}`} className={styles.button}>
          View Details
        </Link>

        {inCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="text-2xl text-red-500 hover:text-red-700"
          >
            <AiOutlineDelete />
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="text-2xl text-green-500 hover:text-green-700"
          >
            <AiOutlineShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
}
