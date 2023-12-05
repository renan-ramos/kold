import { render, screen } from '@testing-library/react'
import Banner from './banner'
import banners from '@/src/data/banners.json'

const banner = banners[0]

describe('<Banner />', () => {
  it('should render correctly', () => {
    render(
      <Banner
        href={banner.href}
        src={banner.src}
        text={banner.text}
        title={banner.title}
      />
    )

    expect(screen.getByTestId('home-banner')).toBeInTheDocument()
  })

  it('should render the text on the left side by default', () => {
    render(
      <Banner
        href={banner.href}
        src={banner.src}
        text={banner.text}
        title={banner.title}
      />
    )

    expect(screen.getByTestId('home-banner-text-group')).toHaveClass('left-8')
  })

  it('should render the text on the right side', () => {
    render(
      <Banner
        href={banner.href}
        src={banner.src}
        text={banner.text}
        title={banner.title}
        textPosition="right"
      />
    )

    expect(screen.getByTestId('home-banner-text-group')).toHaveClass('right-8')
  })
})
