import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative mx-auto h-[200px] w-full md:max-w-[calc(100%_-_32px)] xl:max-w-screen-lg">
      <Image src="/images/banner-01.jpg" alt="" fill className="object-cover" />
      <div className="sm:pt8 absolute top-20 pb-10 text-white sm:w-[600px]">
        <h2 className="my-4 px-4 text-2xl">Bem vindo, Aventureiro</h2>
        <p className="bg-mate-black/70 px-4 py-4 text-base">
          Conheça o cenário de Kold, um mundo vasto e cheio de aventuras. Viaje
          pelos seus continentes, conheça as histórias de cada reino, navegue
          pelo mar de ugri, se sobreviver, um destino ainda mais difícil o
          aguarda em Arsil, lar das tribos de lendários guerreiros bárbaros.
        </p>
      </div>
    </section>
  )
}

export default Hero
