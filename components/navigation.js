import Link from "next/link";

export default function Navigation() {
  return (
  
    <nav className="float-right">
    <ul>
      <li>
        <Link href="/">
          <p className="navigation font-fancy1">Home</p>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <p className="navigation font-fancy1">About</p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className="navigation font-fancy1">Blog</p>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <p className="navigation font-fancy1">Contact</p>
        </Link>
      </li>
    </ul>
  </nav>

  );
}