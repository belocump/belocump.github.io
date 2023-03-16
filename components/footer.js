import Container from 'components/container'
// import Logo from 'components/logo'
import Social from 'components/social'
import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
      <div className='flex justify-center'><span className={styles.flexContainer}><Social /></span></div>
      <div className='flex justify-center text-4xl'>© 2023 Belocump.com</div>
      </Container>
    </footer>
  )
}
