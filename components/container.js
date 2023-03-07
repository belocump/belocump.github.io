
export default function Container({ children}) {
  return (
    <div className="container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg">
      {children}
    </div>
  )
}
