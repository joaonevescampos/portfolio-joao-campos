import { useEffect, useState } from 'react'
import i18next from 'i18next'
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { SocialLinks } from '../components/SocialLinks'

export function PublicLayout() {
  const location = useLocation();
  const { pathname } = location;
  const [isLight, setIsLight] = useState(false)
  const [language, setLanguage] = useState<'pt' | 'en' | 'es'>('pt')
  const isCover = pathname === "/";
  const isClient = pathname === "/client";

  useEffect(() => {
    document.body.dataset.theme = isLight ? 'light' : 'dark'
  }, [isLight])

  useEffect(() => {
    i18next.changeLanguage(language)
  }, [language])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {!isCover && (
        <Header
          isLight={isLight}
          language={language}
          onToggleTheme={() => setIsLight((value) => !value)}
          onChangeLanguage={setLanguage}
          clientMode={isClient}
        />
      )}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <Outlet context={{ isLight, language }} />
        </motion.div>
      </AnimatePresence>
      {!isCover && <SocialLinks />}
    </div>
  );
}