import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { SocialLinks } from '../components/SocialLinks'

export function PublicLayout() {
  const { pathname } = useLocation()
  const [isLight, setIsLight] = useState(false)
  const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt')
  const isHome = pathname === '/'

  useEffect(() => {
    document.body.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  return (
    <div className="min-h-screen animate-page-in bg-[var(--bg)] text-[var(--text)]">
      <Header
        isLight={isLight}
        language={language}
        onToggleTheme={() => setIsLight((value) => !value)}
        onChangeLanguage={setLanguage}
      />
      <Outlet context={{ isLight, language }} />
      <SocialLinks />
    </div>
  )
}