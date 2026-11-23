function Education() {
  return (
    <section id="education" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-stone-200 dark:bg-slate-900 dark:ring-slate-800 transition hover:-translate-y-1 hover:shadow-xl">
      <h2 className="mb-4 inline-block border-b-4 border-brand pb-1 font-display text-2xl font-bold">Освіта</h2>
      <h3 className="text-lg font-semibold">Бакалавр, Кібербезпека та захист інформації</h3>
      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        <em>Національний університет «Львівська політехніка»</em> —{' '}
        <span className="font-semibold text-brand-dark dark:text-orange-300">2025 – 2029</span>
      </p>
      <p className="mb-1 text-slate-600 dark:text-slate-300">Основні дисципліни:</p>
      <ol className="list-decimal space-y-1 pl-5 text-slate-600 dark:text-slate-300">
        <li>Основи програмування</li>
        <li>Вебтехнології</li>
        <li>Бази даних</li>
      </ol>
    </section>
  )
}

export default Education
