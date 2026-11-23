// Допоміжний компонент: одна посада. Дані передаються через props.
function Job({ title, company, period, duties }) {
  return (
    <article className="border-l-4 border-orange-200 pl-5 dark:border-slate-700 first:border-brand">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
        <em>{company}</em> — <span className="font-semibold text-brand-dark dark:text-orange-300">{period}</span>
      </p>
      <ul className="list-disc space-y-1 pl-5 text-slate-600 marker:text-brand dark:text-slate-300">
        {duties.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </article>
  )
}

export default Job
