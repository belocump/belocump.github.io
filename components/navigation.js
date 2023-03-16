import Link from "next/link";

export default function Navigation() {
  return (
  
    <nav className="float-right">
    <ul>
      <li>
        <Link href="/">
          <p className="navigation font-fancy1 text-2xl">Home</p>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <p className="navigation font-fancy1 text-2xl">About</p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className="navigation font-fancy1 text-2xl">Blog</p>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <p className="navigation font-fancy1 text-2xl">Contact</p>
        </Link>
      </li>
    </ul>

  </nav>

  );
}