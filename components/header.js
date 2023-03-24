import Container from 'components/container'
import Logo from 'components/logo'
import Navigation from 'components/navigation'
import styles from 'styles/header.module.css'

export default function Header() {
  return (
    <header>

      <Container large>
        <div  className={styles.header}>
      <Navigation />
          <Logo />
          </div>
      </Container>

    </header>
  )
}
