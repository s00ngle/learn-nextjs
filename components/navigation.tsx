"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
];

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>{item.label}</Link>
            {path === item.path ? "🔥" : ""}
          </li>
        ))}
      </ul>
    </nav>
  );
}
