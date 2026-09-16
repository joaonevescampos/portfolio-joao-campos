import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { MagneticButton } from '../components/MagneticButton'
import desktopCover from '../assets/img/backgrounds/portfolio-cover-desktop.jpeg'
import mobileCover from '../assets/img/backgrounds/portfolio-cover-mobile.jpeg'
import ultrawideCover from '../assets/img/backgrounds/background-cover-ultrawide.jpeg'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Cover() {
  const { t } = useTranslation()
  useDocumentTitle('João Campos | Portfólio')

  return (
    <main className="cover-page">
      <picture className="cover-picture">
        <source media="(min-width: 1681px)" srcSet={ultrawideCover} />
        <source media="(max-width: 1023px)" srcSet={mobileCover} />
        <img src={desktopCover} alt="Capa do portfólio de João Campos" />
      </picture>
      <div className="cover-shade" />
      <div className="cover-brand" aria-label="João Campos">JC<span>.</span></div>
      <div className="cover-caption">{t('cover.eyebrow')}</div>
      <motion.div
        className="cover-actions"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
      >
        <MagneticButton href="/client" variant="light">{t('cover.client')}</MagneticButton>
        <MagneticButton href="/company" variant="dark">{t('cover.company')}</MagneticButton>
      </motion.div>
    </main>
  )
}