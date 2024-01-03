import { render, screen } from '@testing-library/react'
import HomePage from './home-page'

describe('<HomePage />', () => {
  it('should render correctly', () => {
    render(<HomePage />)

    expect(screen.getByTestId('home-page')).toBeInTheDocument()
  })
})
