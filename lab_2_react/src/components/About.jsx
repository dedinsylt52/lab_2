function About() {
  return (
    <section id="about" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-stone-200 dark:bg-slate-900 dark:ring-slate-800 md:col-span-2">
      <h2 className="mb-3 inline-block border-b-4 border-brand pb-1 font-display text-2xl font-bold">Про мене</h2>
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Студент 2 курсу, що вивчає вебтехнології. Цікавлюся{' '}
        <strong className="bg-orange-100 px-1 text-brand-dark dark:bg-orange-900/40 dark:text-orange-200 dark:text-orange-300">фронтенд-розробкою</strong>{' '}
        та створенням зручних інтерфейсів. Швидко навчаюся та люблю працювати в команді.
      </p>
    </section>
  )
}

export default About
