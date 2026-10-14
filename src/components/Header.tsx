import { profile } from '../data/content'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="mx-auto flex max-w-4xl items-center justify-between px-6 pt-8">
      <a href="#top" className="font-display text-lg font-semibold tracking-tight">
        {profile.name}
      </a>
      <nav aria-label="Main">
        <ul className="flex gap-6 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
