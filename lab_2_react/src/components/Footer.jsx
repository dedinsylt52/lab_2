import { useEffect, useState } from 'react'

const contacts = [
  ['Email', 'mailto:Serhii.Petruniak.KB.2025@lpnu.ua', 'Serhii.Petruniak.KB.2025@lpnu.ua'],
  ['Телефон', 'tel:+380967923212', '+38 096 792 32 12'],
  ['GitHub', 'https://github.com/dedinsylt52', 'github.com/dedinsylt52'],
  ['LinkedIn', 'https://www.linkedin.com/in/your-username', 'linkedin.com/in/your-username'],
]

function Footer() {
  const [sysInfo, setSysInfo] = useState({})

  // При монтуванні: зчитуємо дані про ОС і браузер, зберігаємо в localStorage, потім читаємо звідти
  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent)
    localStorage.setItem('platform', navigator.platform)
    localStorage.setItem('language', navigator.language)

    setSysInfo({
      userAgent: localStorage.getItem('userAgent'),
      platform: localStorage.getItem('platform'),
      language: localStorage.getItem('language'),
    })
  }, [])

  return (
    <footer id="contacts" className="bg-slate-900 text-slate-300 dark:bg-black">
      <div className="mx-auto max-w-5xl px-4 py-12 text-center">
        <h2 className="mb-6 inline-block border-b-4 border-orange-300 pb-1 font-display text-2xl font-bold text-white">Контакти</h2>
        <address className="grid gap-3 not-italic sm:grid-cols-2">
          {contacts.map(([label, href, text]) => {
            const external = href.startsWith('http')
            return (
              <a
                key={label}
                href={href}
                {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="break-all rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-orange-300 hover:bg-white/10"
              >
                <span className="block text-xs uppercase tracking-widest text-orange-300">{label}</span>
                <span className="text-white">{text}</span>
              </a>
            )
          })}
        </address>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4 text-left">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-300">Системна інформація (localStorage)</h3>
          <dl className="grid gap-x-4 gap-y-1 text-sm sm:grid-cols-[max-content_1fr]">
            {Object.entries(sysInfo).map(([key, value]) => (
              <div key={key} className="contents">
                <dt className="font-semibold text-white">{key}</dt>
                <dd className="mb-2 break-all sm:mb-0">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-8 text-sm opacity-60">&copy; 2026 Сергій Петруняк</p>
      </div>
    </footer>
  )
}

export default Footer
