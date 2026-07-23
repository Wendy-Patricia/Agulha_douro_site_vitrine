import Image from 'next/image';

export default function PageHero({ eyebrow, title, italic, description, image }) {
  return (
    <section className="noise relative min-h-[70vh] bg-ink pt-20 text-ivory">
      <Image src={image} alt="" fill priority className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="relative mx-auto flex min-h-[calc(70vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-label">{eyebrow}</p>
          <h1 className="mt-6 font-display text-6xl leading-[.95] sm:text-7xl lg:text-8xl">
            {title} <span className="italic text-gold">{italic}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm font-light leading-7 text-ivory/75 sm:text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}
