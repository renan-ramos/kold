import { cn } from '@/src/lib/utils'
import Link from 'next/link'

interface BannerProps {
  src: string
  href: string
  title: string
  text: string
  textPosition?: 'left' | 'right'
}

const Banner = ({
  href,
  src,
  text,
  textPosition = 'left',
  title
}: BannerProps) => {
  return (
    <article className="row relative mt-10" data-testid="home-banner">
      <img src={src} alt={`Imagem de fundo do banner, com título ${title}`} />

      <div
        className={cn(
          'banner-caption-right absolute top-1/4 flex w-1/2 flex-col gap-4',
          textPosition === 'left' && 'left-8',
          textPosition === 'right' && 'right-8'
        )}
        data-testid="home-banner-text-group"
      >
        <h2 className="text-uppercase mb-6 text-3xl">{title}</h2>
        <p>{text}</p>
        <Link href={href} className="underline hover:no-underline">
          Ver mais
        </Link>
      </div>
    </article>
  )
}

export default Banner
