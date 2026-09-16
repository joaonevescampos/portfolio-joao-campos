import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../components/ProjectCard'
import { projectGroups } from '../services/portfolioData'
import { socialLinks } from '../utils/links'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import clientBackground from '../assets/video/background-client.mp4'

const featuredProjects = projectGroups[0].projects

export function Client() {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  useDocumentTitle('João Campos | Sites sob medida')

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultPlaybackRate = 0.4
      videoRef.current.playbackRate = 0.4
    }
  }, [])

  return (
    <main className="client-page">
      <section id="top" className="client-hero">
        <Link className="hero-home-back" to="/">← HOME</Link>
        <video ref={videoRef} className="client-hero-video" src={clientBackground} autoPlay muted loop playsInline onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 0.4 }} />
        <div className="client-hero-video-shade" />
        <div className="client-hero-grid" />
        <div className="client-hero-content">
          <p className="client-eyebrow">{t('client.eyebrow')}</p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>{t('client.title')}</motion.h1>
          <motion.p className="client-lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>{t('client.subtitle')}</motion.p>
          <div className="client-actions">
            <a className="client-cta client-cta-dark" href={socialLinks.find((link) => link.label === 'WhatsApp')?.href} target="_blank" rel="noreferrer">{t('client.cta')}</a>
            <a className="client-cta client-cta-outline" href="#projects">{t('client.projectsCta')}</a>
          </div>
        </div>
        <div className="client-hero-note">{t('client.note')}</div>
      </section>

      <section id="projects" className="client-section">
        <div className="client-section-heading">
          <p className="client-eyebrow">{t('client.projectsEyebrow')}</p>
          <h2>{t('client.projectsTitle')}</h2>
          <p>{t('client.projectsDescription')}</p>
        </div>
        <div className="client-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: index * 0.08 }}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="client-about">
        <div>
          <p className="client-eyebrow">{t('client.aboutEyebrow')}</p>
          <h2>{t('client.aboutTitle')}</h2>
        </div>
        <div className="client-about-copy">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <a className="client-cta client-cta-dark" href={socialLinks.find((link) => link.label === 'WhatsApp')?.href} target="_blank" rel="noreferrer">{t('client.aboutCta')}</a>
        </div>
      </section>
    </main>
  )
}