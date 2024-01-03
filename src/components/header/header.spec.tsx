import { render, screen } from '@testing-library/react'
import { resizeWindow } from '@/.jest/mocks/screen'
import Header from './header'

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByTestId('page-header')).toBeInTheDocument()
  })

  it('should render a hamburger menu when screen size is smaller than 768px', () => {
    render(<Header />)

    resizeWindow('767px')

    expect(screen.getByTestId('hamburger-menu')).toHaveClass('flex')
    expect(screen.getByRole('list')).toHaveClass('hidden')
  })

  it('should render a list of links', () => {
    render(<Header />)

    const menuItems = ['Histórias', 'Raças', 'Organizações']

    expect(screen.getAllByRole('listitem').length).toBe(menuItems.length)
  })
})
