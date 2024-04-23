"use client";

import Link from "next/link";
import styles from "styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} href="/">
        ITSmart Movie
      </Link>
      <ul>
        <li></li>
        <li>
          <Link href="/about-us">About Us</Link>
        </li>
      </ul>
    </nav>
  );
}
