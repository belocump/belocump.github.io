import Link from "next/link";
// import styles from 'styles/navigation.module.css'

export default function Navigation() {
  return (
    <nav className="md:ml-auto text-base flex container">
  
        <Link href="/">
          <p className="text-2xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">Home</p>
        </Link>
      
        <Link href="/about">
          <span className="text-2xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">About</span>
        </Link>
    
        <Link href="/posts/page/1">
          <p className="text-2xl font-fancy1 text-gray-900 mr-5 mb-4 hover:text-blue-400 duration-300">Blog</p>
        </Link>
     
        <Link href="/contact">
          <p className="text-2xl font-fancy1 text-gray-900 mb-4 hover:text-blue-400 duration-300">Contact</p>
        </Link>
  </nav>
  );
}