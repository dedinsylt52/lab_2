const tech = ['HTML', 'CSS', 'JavaScript', 'Python', 'React', 'Vite', 'Tailwind', 'Git', 'GitHub']

function Skills() {
  return (
    <section id="skills" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-stone-200 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="mb-4 inline-block border-b-4 border-brand pb-1 font-display text-2xl font-bold">Навички</h2>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Технічні</h3>
      <ul className="mb-5 flex flex-wrap gap-2">
        {tech.map((s) => (
          <li
            key={s}
            className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-brand-dark dark:border-orange-900 dark:bg-orange-950/50 dark:text-orange-200 transition hover:scale-105 hover:bg-brand hover:text-white"
          >
            {s}
          </li>
        ))}
      </ul>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Мови</h3>
      <ul className="space-y-1 text-slate-600 dark:text-slate-300">
        <li>Українська — <span className="font-semibold">рідна</span></li>
        <li>Англійська — <span className="font-semibold">B2</span></li>
      </ul>
    </section>
  )
}

export default Skills
