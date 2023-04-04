// import Container from 'components/container'
// import Logo from 'components/logo'
import Social from 'components/social'
// import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer className='bg-red-100'>
    
      <div className='container flex mx-auto p-5 flex-col items-center justify-center'>
        <Social />
        <p className='font-medium my-5'>© 2023 Belocump.com all reserved</p>
      </div>
      
    </footer>
  )
}

{/* <div  className="container flex mx-auto p-5 flex-col md:flex-row items-center">

<Logo />
<Navigation />

</div> */}