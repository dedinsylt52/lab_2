import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Денна тема з 07:00 до 21:00, у решту часу — нічна
function themeByTime() {
  const hours = new Date().getHours()
  return hours >= 7 && hours < 21 ? 'light' : 'dark'
}

function App() {
  const [theme, setTheme] = useState('light')

  // Автоматичне перемикання при першому завантаженні
  useEffect(() => {
    setTheme(themeByTime())
  }, [])

  // Клас dark також на <body>, щоб фон сторінки поза обгорткою був темним
  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-paper font-sans text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-200">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2">
          <About />
          <Experience />
          <div className="flex flex-col gap-6">
            <Education />
            <Skills />
          </div>
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
