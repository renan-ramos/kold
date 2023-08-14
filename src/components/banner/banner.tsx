interface BannerProps {
  src: string
  href: string
  title: string
  text: string
}

const Banner = ({ href, src, text, title }: BannerProps) => {
  return (
    <article className="row mt-10">
      <img src={src} alt="" />

      <div className="banner-caption-right">
        <h2 className="text-uppercase titulo1">{title}</h2>
        <p>{text}</p>
        <button type="button" className="button">
          <a href={href}>Ver mais</a>
        </button>
      </div>
    </article>
  )
}

export default Banner
