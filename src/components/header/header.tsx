const Menu = () => {
  return (
    <nav className="hidden gap-2 text-white sm:flex">
      <a href="/histories">Histórias</a>
      <a href="/races">Raças</a>
      <a href="/regions">Regiões</a>
      <a href="/organizations">Organizações</a>
      <a href="/characters">Personagens</a>
    </nav>
  )
}

const Header = () => {
  return (
    <header className="w-full bg-mate-black/80">
      <nav className="mx-auto max-w-[calc(100%_-_32px)] p-0 py-2 xl:max-w-screen-lg ">
        <div className="flex items-center justify-between">
          <a className="" href="#">
            <img
              src="/images/logo-small.png"
              alt="Logo do cenário de campanha de Kold"
              title="Kold, um mundo de aventuras"
            />
          </a>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
