import { skills } from '../data/content'

function LevelBar({ level }: { level: number }) {
  return (
    <span aria-hidden="true" className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`h-1.5 w-5 rounded-sm ${i < level ? 'bg-accent' : 'bg-line'}`}
        />
      ))}
    </span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl scroll-mt-8 px-6 pb-24">
      <h2 className="font-display text-3xl font-semibold tracking-tight">What I work with</h2>
      <p className="mt-3 max-w-xl text-muted">
        A backend developer's idea of a skills list: a query and its result.
      </p>

      <figure className="mt-8 overflow-hidden rounded-lg border border-line bg-surface">
        <figcaption className="border-b border-line bg-accent-soft px-4 py-3 font-mono text-sm text-ink">
          <span className="font-semibold text-accent">SELECT</span> area, technology, depth{' '}
          <span className="font-semibold text-accent">FROM</span> skills{' '}
          <span className="font-semibold text-accent">ORDER BY</span> depth{' '}
          <span className="font-semibold text-accent">DESC</span>;
        </figcaption>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead className="text-muted">
              <tr className="border-b border-line">
                <th scope="col" className="px-4 py-2 font-medium">area</th>
                <th scope="col" className="px-4 py-2 font-medium">technology</th>
                <th scope="col" className="px-4 py-2 font-medium">depth</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((s) => (
                <tr key={s.technology} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-muted">{s.area}</td>
                  <td className="px-4 py-3 font-medium">{s.technology}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-3">
                      <LevelBar level={s.level} />
                      <span className="text-muted">{s.label}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="border-t border-line px-4 py-2 font-mono text-xs text-muted">
          ({skills.length} rows affected)
        </p>
      </figure>
    </section>
  )
}
