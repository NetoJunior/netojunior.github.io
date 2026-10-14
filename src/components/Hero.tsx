import { profile } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-6 pt-20 pb-24 sm:pt-28">
      <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-7xl">
        {profile.headline}
      </h1>
      <p className="mt-8 max-w-xl text-lg text-muted">{profile.intro}</p>
      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
        <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href={profile.github}>
          GitHub
        </a>
        {/* <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href={profile.linkedin}>
          LinkedIn
        </a> */}
        <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href={`mailto:${profile.email}`}>
          Email
        </a>
      </p>
    </section>
  )
}
