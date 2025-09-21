import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div style={styles.container}>
      <Link href="/category/electoronics" style={styles.link}>
        Electronics
      </Link>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9fafb",
  },
  link: {
    padding: "12px 24px",
    backgroundColor: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "600",
    textDecoration: "none",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "all 0.2s ease-in-out",
  },
};
