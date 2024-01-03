import Link from 'next/link'
import Menu from './menu'

const Header = () => {
  return (
    <header data-testid="page-header" className="bg-black">
      <nav className="flex items-center justify-between px-2 text-white">
        <Link href="/">
          <img
            src="/images/logo-small.png"
            alt="Logo do cenário de campanha de Kold"
            title="Kold, um mundo de aventuras"
          />
        </Link>
        <Menu />
      </nav>
    </header>
  )
}

export default Header
