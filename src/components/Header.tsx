import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.projects', href: '#projects' },
  { labelKey: 'nav.experience', href: '#experience' },
  { labelKey: 'nav.skills', href: '#skills' },
  { labelKey: 'nav.contact', href: '#contact' },
]

export function Header({
  isLight,
  language,
  onToggleTheme,
  onChangeLanguage,
}: {
  isLight: boolean
  language: 'pt' | 'en' | 'es'
  onToggleTheme: () => void
  onChangeLanguage: (language: 'pt' | 'en' | 'es') => void
}) {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('about')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash || '#about'
      setActiveSection(hash.replace('#', ''))
      setIsMenuOpen(false)
    }

    updateActiveSection()
    window.addEventListener('hashchange', updateActiveSection)
    return () => window.removeEventListener('hashchange', updateActiveSection)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)]/80 backdrop-blur-xl transition-[background-color,border-color] duration-[3000ms] ease-in-out">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 md:px-8">
        <a href="#top" aria-label="Voltar para o início" className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text)] transition-colors hover:text-[var(--accent)]">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-sm font-bold text-[var(--text)]">JC</span>
          <span className="hidden sm:inline">João Campos</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setActiveSection(item.href.replace('#', ''))
                setIsMenuOpen(false)
              }}
              className={`text-[8px] font-medium uppercase tracking-[0.22em] transition-all duration-300 ${
                activeSection === item.href.replace('#', '')
                  ? 'font-bold text-[var(--text)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              }`}
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] p-1 lg:flex">
            {(['pt', 'en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onChangeLanguage(lang)}
                className={`rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
                  language === lang ? 'bg-[var(--text)] text-[var(--bg)]' : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                {lang === 'pt' ? 'PT' : lang === 'en' ? 'EN' : 'ES'}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isLight ? 'Ativar modo escuro' : 'Ativar modo claro'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-base text-[var(--text)] transition-all duration-[3000ms] hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {isLight ? '☾' : '☀'}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="menu-toggle inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] lg:hidden"
          >
            <span className="sr-only">{isMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            <span className={`menu-icon ${isMenuOpen ? 'is-open' : ''}`} aria-hidden="true"><span /><span /><span /></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="mobile-navigation lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2 px-4 pb-4 pt-2 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.replace('#', ''))
                  setIsMenuOpen(false)
                }}
                className={`mobile-navigation-link ${activeSection === item.href.replace('#', '') ? 'is-active' : ''}`}
              >
                {t(item.labelKey)}
              </a>
            ))}
            <div className="mobile-menu-controls">
              <div className="mobile-language-switcher">
                {(['pt', 'en', 'es'] as const).map((lang) => (
                  <button key={lang} type="button" onClick={() => onChangeLanguage(lang)} className={language === lang ? 'is-active' : ''}>
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <button type="button" onClick={onToggleTheme} className="mobile-theme-button">
                {isLight ? '☾' : '☀'}
                <span>{isLight ? 'Modo escuro' : 'Modo claro'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}