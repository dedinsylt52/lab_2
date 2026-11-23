import Job from './Job'

const jobs = [
  {
    title: 'Стажер-фронтенд розробник',
    company: 'ТОВ «Веб-Студія», Львів',
    period: 'червень 2025 – вересень 2025',
    duties: [
      'Верстка адаптивних сторінок за макетами Figma.',
      'Виправлення помилок у наявних вебпроєктах.',
      "Участь у код-рев'ю та щоденних мітингах команди.",
    ],
  },
  {
    title: 'Фріланс-верстальник',
    company: 'Самозайнятість',
    period: 'вересень 2024 – травень 2025',
    duties: [
      'Створив 3 сайти-візитівки для локальних малих бізнесів.',
      'Налаштував публікацію сайтів на хостингу.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-stone-200 dark:bg-slate-900 dark:ring-slate-800 transition hover:shadow-xl">
      <h2 className="mb-5 inline-block border-b-4 border-brand pb-1 font-display text-2xl font-bold">Досвід роботи</h2>
      <div className="space-y-6">
        {jobs.map((job) => (
          <Job key={job.title} {...job} />
        ))}
      </div>
    </section>
  )
}

export default Experience
