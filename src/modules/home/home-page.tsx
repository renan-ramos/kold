import Banner from '@/src/modules/home/components/banner'
import Hero from '@/src/modules/home/components/hero'
import banners from '@/src/data/banners.json'

const HomePage = () => {
  return (
    <>
      {/* <Hero /> */}
      <main
        className="d-flex flex-column mx-auto py-20 md:max-w-[calc(100%_-_32px)] xl:max-w-screen-lg"
        data-testid="home-page"
      >
        {banners.map((banner, index) => (
          <Banner
            key={banner.id}
            href={banner.href}
            src={banner.src}
            text={banner.text}
            title={banner.title}
            textPosition={index++ % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </main>
    </>
  )
}

export default HomePage
