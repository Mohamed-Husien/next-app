import ProductCard from "@/components/ProductCard";

interface PageProps {
  params: {
    itemid: string;
  };
}

async function getProductById(id: number) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export async function generateMetadata({ params }: PageProps) {
  const product = await getProductById(Number(params.itemid));
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Page({ params }: PageProps) {
  console.log("PARAMS =>", params);

  const product = await getProductById(Number(params.itemid));

  return (
    <div style={{ padding: "20px" }}>
      <ProductCard product={product} />
    </div>
  );
}
