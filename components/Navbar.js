import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link href="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <li>About</li>
        </Link>
        <Link href="/blog" style={{ textDecoration: "none" }}>
          <li>Blog</li>
        </Link>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
