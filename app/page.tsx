import Banner from '@/src/components/banner'
import Hero from '@/src/components/hero/hero'
import banners from '@/src/data/banners.json'

const Home = () => {
  return (
    <>
      <Hero />
      <main className="d-flex flex-column bg-pale-white">
        {banners.map((banner) => (
          <Banner
            key={banner.id}
            href={banner.href}
            src={banner.src}
            text={banner.text}
            title={banner.title}
          />
        ))}
      </main>
    </>
  )
}

export default Home
