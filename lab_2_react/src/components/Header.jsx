const links = [
  ['#about', 'Про мене'],
  ['#experience', 'Досвід роботи'],
  ['#education', 'Освіта'],
  ['#skills', 'Навички'],
  ['#reviews', 'Відгуки'],
  ['#contacts', 'Контакти'],
]

function Header({ theme, onToggleTheme }) {
  return (
    <header className="bg-slate-900 text-white dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 pt-14 pb-8 text-center">
        <span className="mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-brand font-display text-3xl font-bold shadow-xl ring-4 ring-orange-300/40">
          СП
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Сергій Петруняк</h1>
        <p className="text-lg uppercase tracking-widest text-orange-300">Junior веброзробник</p>
        <button
          type="button"
          onClick={onToggleTheme}
          className="mt-2 rounded-full border border-orange-300 px-4 py-1.5 text-sm text-orange-300 transition hover:bg-orange-300 hover:text-slate-900"
        >
          {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
        </button>
        <nav className="mt-6 w-full">
          <ul className="flex flex-col justify-center gap-2 sm:flex-row sm:flex-wrap">
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-full border border-white/30 px-4 py-1.5 text-sm transition hover:bg-white hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-orange-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
