import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/src/ui/sheet/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { ComponentPropsWithoutRef } from 'react'

type ItemsProps = ComponentPropsWithoutRef<'ul'>

const Items = ({ className }: ItemsProps) => {
  return (
    <ul className={className}>
      <li>
        <a href="#">Histórias</a>
      </li>
      <li>
        <a href="#">Raças</a>
      </li>
      <li>
        <a href="#">Organizações</a>
      </li>
    </ul>
  )
}

const Menu = () => {
  return (
    <>
      <Items className="hidden gap-4 md:flex" />

      <Sheet>
        <SheetTrigger className="flex md:hidden" data-testid="hamburger-menu">
          <HamburgerMenuIcon />
          <span className="sr-only">Abrir Menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-white">
          <SheetTitle>Kold</SheetTitle>
          <Items className="flex-col gap-2" />
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Menu
