"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navigation.module.css";

const navigationItems = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
];

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
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
