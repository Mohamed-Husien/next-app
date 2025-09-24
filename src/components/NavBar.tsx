import { auth } from "@/service/auth";
import Btn from "./Btn";
import Image from "next/image";

export default async function NavBar() {
  const session = await auth();

  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/product", label: "🛍️ Products" },
    { href: "/category", label: "📂 Categories" },
    { href: "/cart", label: "🛒 Cart" },
  ];

  const nav = [...links];

  if (session) {
    nav.push({ href: "/api/auth/signout", label: "🚪 Logout" });
  } else {
    nav.push({ href: "/api/auth/signin", label: "🔑 Login" });
  }

  return (
    <nav className="navbar">
      <h2 className="logo">MyProject</h2>
      <div className="links">
        {nav.map((link) => (
          <Btn key={link.href} href={link.href} label={link.label} />
        ))}
        {session && session.user?.image && (
          <Image
            src={session.user.image}
            alt={session.user.name || "User"}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
      </div>
    </nav>
  );
}
