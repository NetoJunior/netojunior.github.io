import { profile } from '../data/content'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl border-t border-line px-6 py-8 text-sm text-muted">
      © {year} {profile.name}
    </footer>
  )
}
