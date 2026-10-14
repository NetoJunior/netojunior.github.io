import { profile } from '../data/content'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl scroll-mt-8 px-6 pb-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-3 max-w-xl text-muted">
        The quickest way to reach me is email. I'm also on GitHub and LinkedIn.
      </p>
      <p className="mt-6">
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-md bg-accent px-5 py-2.5 font-medium text-paper transition-opacity hover:opacity-90"
        >
          Email me
        </a>
      </p>
    </section>
  )
}
