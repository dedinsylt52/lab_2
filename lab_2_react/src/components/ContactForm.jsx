import { useEffect, useState } from 'react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjyyagga'

const inputClass =
  'rounded-lg border border-stone-300 bg-paper px-3 py-2 text-slate-800 focus:border-brand focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100'

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  // Через 1 хвилину відкриваємо модальне вікно (лише якщо його ще не закривали в цій сесії)
  useEffect(() => {
    if (sessionStorage.getItem('feedbackClosed')) return
    const timer = setTimeout(() => setIsOpen(true), 60000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setIsOpen(false)
    sessionStorage.setItem('feedbackClosed', 'true')
  }

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={close}>
        <div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Закрити"
            className="absolute top-3 right-4 text-2xl text-slate-400 transition hover:text-brand"
          >
            ×
          </button>
          <h2 className="mb-5 font-display text-2xl font-bold">Зворотний зв'язок</h2>
          <form action={FORMSPREE_ENDPOINT} method="POST" className="flex flex-col gap-3">
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Ім'я
              <input type="text" name="name" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Email
              <input type="email" name="email" required className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Номер телефону
              <input type="tel" name="phone" placeholder="+380…" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold">
              Повідомлення
              <textarea name="message" rows="4" required className={inputClass} />
            </label>
            <div className="mt-2 flex gap-3">
              <button type="submit" className="flex-1 rounded-lg bg-brand px-4 py-2 font-semibold text-white transition hover:bg-brand-dark">
                Надіслати
              </button>
              <button type="button" onClick={close} className="rounded-lg border border-stone-300 px-4 py-2 transition hover:bg-stone-100 dark:border-slate-600 dark:hover:bg-slate-800">
                Закрити
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  )
}

export default ContactForm
