import React from "react";

function Header() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Works", link: "#works" },
    { name: "Services", link: "#services" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center py-8 px-24">
      <div className="flex font-bold uppercase">Tiara Lestari Subaran</div>
      <nav className="flex gap-8 font-semibold uppercase">
        {navItems.map((item) => (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
