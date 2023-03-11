import Container from 'components/container'
// import Logo from 'components/logo'
import Social from 'components/social'
// import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <Container>
      <br />
      <Social />
      <br />
      <div className='flex justify-center text-4xl'>© 2023 Belocump.com</div>
      <br />
      </Container>
    </footer>
  )
}
