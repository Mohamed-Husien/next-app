import Btn from "./Btn";

export default function NavBar() {
  const links = [
    { href: "/", label: "🏠 Home" },
    { href: "/product", label: "🛍️ Products" },
    { href: "/category", label: "📂 Categories" },
  ];

  return (
    <nav className="navbar">
      <h2 className="logo">MyProject</h2>
      <div className="links">
        {links.map((link) => (
          <Btn key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </nav>
  );
}
