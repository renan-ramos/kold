import Link from 'next/link'

const Menu = () => {
  return (
    <nav className="hidden gap-2 text-white sm:flex">
      <Link href="/histories">Histórias</Link>
      <Link href="/races">Raças</Link>
      <Link href="/regions">Regiões</Link>
      <Link href="/organizations">Organizações</Link>
      <Link href="/characters">Personagens</Link>
    </nav>
  )
}

const Toogle = () => {
  return (
    <div className="flex flex-col gap-1 sm:hidden [&_div]:w-4 [&_div]:border [&_div]:border-solid [&_div]:border-white">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

const Header = () => {
  return (
    <header className="w-full bg-black">
      <nav className="mx-auto max-w-[calc(100%_-_32px)] p-0 py-2 xl:max-w-screen-lg ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              src="/images/logo-small.png"
              alt="Logo do cenário de campanha de Kold"
              title="Kold, um mundo de aventuras"
            />
          </Link>
          <Toogle />
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
