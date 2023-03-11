import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="basic max-w-7xl mx-auto px-8 py-6">
      <Image
       src="/yamada.png"
       width={70}
       height={45}
      />
    <Link href="/" className='box'>
      <h1 className='text-6xl font-fancy1'>Belocump</h1>
    </Link>
     </div>
  )
}
