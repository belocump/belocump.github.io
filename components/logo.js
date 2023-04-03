import Image from 'next/image'

export default function Logo() {
  return (
    <div className="mx-auto px-4 py-4">
    
      <Image
       src="/test.png"
       alt=''
       width={1000}
       height={450}
      />

     </div>
  )
}
