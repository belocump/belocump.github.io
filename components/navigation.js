import Link from "next/link";
import styles from 'styles/navigation.module.css'

export default function Navigation() {
  return (
    <nav>
    <ul  className={styles.list}>
      <li>
        <Link href="/">
          <p className="font-fancy1">Home</p>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <p className="font-fancy1">About</p>
        </Link>
      </li>
      <li>
        <Link href="/posts/page/1">
          <p className="font-fancy1">Blog</p>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <p className="font-fancy1">Contact</p>
        </Link>
      </li>
    </ul>
  </nav>
  );
}