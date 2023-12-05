import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-full bg-black">
      <section className="shadows relative mx-auto h-52 w-full md:h-[300px] md:max-w-[calc(100%_-_32px)] xl:max-w-screen-lg">
        <Image
          src="/images/banner-01.jpg"
          alt=""
          fill
          className="md:object-cover"
        />
        <div className="absolute z-20 text-white sm:w-[600px] sm:pt-8 md:-left-10 md:top-20 md:pb-10">
          <h2 className="my-4 px-4 text-2xl">Bem vindo, Aventureiro</h2>
          <p className="hidden bg-mate-black/70 px-6 py-8 text-base sm:block">
            Conheça o cenário de Kold, um mundo vasto e cheio de aventuras.
            Viaje pelos seus continentes, conheça as histórias de cada reino,
            navegue pelo mar de ugri, se sobreviver, um destino ainda mais
            difícil o aguarda em Arsil, lar das tribos de lendários guerreiros
            bárbaros.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hero
