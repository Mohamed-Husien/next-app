"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
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
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const inCart = cart.some((item) => item.id === product.id);

  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
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
            onClick={() => dispatch(removeFromCart(product.id))}
            className="text-2xl text-red-500 hover:text-red-700"
          >
            <AiOutlineDelete />
          </button>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="text-2xl text-green-500 hover:text-green-700"
          >
            <AiOutlineShoppingCart />
          </button>
        )}
      </div>
    </div>
  );
}
