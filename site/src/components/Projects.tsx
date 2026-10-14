import { projects } from '../data/content'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-8 px-6 pb-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Projects</h2>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.href}
              className="group grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8"
            >
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-accent">
                {p.title}
              </h3>
              <div>
                <p className="max-w-prose text-muted">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded bg-accent-soft px-2 py-0.5 text-xs font-medium text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
