import { useEffect, useState } from 'react'

const VARIANT = 25 // номер варіанта (порядковий номер у журналі)

function Reviews() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Запит виконується один раз — при монтуванні компонента
  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        setComments(await response.json())
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="reviews" className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-stone-200 md:col-span-2 dark:bg-slate-900 dark:ring-slate-800">
      <h2 className="mb-5 inline-block border-b-4 border-brand pb-1 font-display text-2xl font-bold">Відгуки роботодавців</h2>
      {loading && <p className="text-slate-500">Завантаження відгуків…</p>}
      {error && <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {comments.map((c) => (
          <article key={c.id} className="rounded-xl border border-stone-200 bg-paper p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
            <h3 className="mb-1 font-semibold capitalize">{c.name}</h3>
            <p className="mb-2 text-sm text-brand dark:text-orange-300">{c.email}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Reviews
