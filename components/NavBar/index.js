import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/favorites">Favorites</Link>
      <Link href="/settings">Settings</Link>
    </>
  );
}
