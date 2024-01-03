import { render, screen } from '@testing-library/react'
import Menu from './menu'

describe('<Menu />', () => {
  it('should render correctly', () => {
    render(<Menu />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('should render a list of links', () => {
    render(<Menu />)

    const menuItems = ['Histórias', 'Raças', 'Organizações']

    expect(screen.getAllByRole('listitem').length).toBe(menuItems.length)
  })
})
