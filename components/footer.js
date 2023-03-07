import Container from 'components/container'
// import Logo from 'components/logo'
// import Social from 'components/social'
// import styles from 'styles/footer.module.css'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="flex items-center justify-center w-full h-20 text-sm border-t">
          {/* <Logo /> */}
          {/* <Social /> */}
          © 2023 Belocump.com
        </div>
      </Container>
    </footer>
  )
}
