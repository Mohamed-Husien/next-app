// app/page.tsx
import Image from "next/image";

export const revalidate = 5;

export default function Home() {
  console.log("Home page rendered at", new Date().toISOString());

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "32px",
        fontWeight: "bold",
        backgroundColor: "#f9fafb",
      }}
    >
      Home
    </div>
  );
}
