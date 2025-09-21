import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.css";
import Link from "next/link";

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

      <h2 className="text-amber-300">{product.title}</h2>

      <p className={styles.price}>${product.price}</p>

      <div className={styles.rating}>
        <span className={styles.stars}>{product.rating.rate} ⭐</span>
        <span>({product.rating.count})</span>
      </div>
      <Link href={`/product/${product.id}`} className={styles.button}>
        View Details
      </Link>
    </div>
  );
}
