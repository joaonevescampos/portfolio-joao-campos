import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ProjectCard } from '../components/ProjectCard'
import { projectGroups } from '../services/portfolioData'
import { socialLinks } from '../utils/links'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import clientBackground from '../assets/video/background-client.mp4'
import basic from "../assets/img/plans/basic.png"
import pro from "../assets/img/plans/pro.png"
import premium from "../assets/img/plans/premium.png"
import premiumPlus from "../assets/img/plans/premium-plus.png"
import PlanCard from '../components/PlanCard'


const featuredProjects = projectGroups[0].projects

const plans = [
  {id: "basic", image: basic},
  {id: "pro", image: pro},
  {id: "premium", image: premium},
  {id: "premiumPlus", image: premiumPlus},
]

export function Client() {
  const { t } = useTranslation()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isHeroTitleComplete, setIsHeroTitleComplete] = useState(false)
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
        <Link className="hero-home-back" to="/">
          ← HOME
        </Link>
        <video
          ref={videoRef}
          className="client-hero-video"
          src={clientBackground}
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={(event) => {
            event.currentTarget.playbackRate = 0.4;
          }}
        />
        <div className="client-hero-video-shade" />
        <div className="client-hero-grid" />
        <div className="client-hero-content">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="client-eyebrow"
          >
            {t("client.eyebrow")}
          </motion.p>
          <h1>
            <TypeAnimation
              sequence={[t("client.title"), () => setIsHeroTitleComplete(true)]}
              speed={5}
              cursor={false}
              wrapper="span"
            />
          </h1>
          <motion.p
            className="client-lead"
            initial={{ opacity: 0, y: 16 }}
            animate={isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            {t("client.subtitle")}
          </motion.p>
          <motion.div
            className="client-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={isHeroTitleComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <a
              className="client-cta client-cta-dark"
              href={socialLinks.find((link) => link.label === "WhatsApp")?.href}
              target="_blank"
              rel="noreferrer"
            >
              {t("client.cta")}
            </a>
            <a className="client-cta client-cta-outline" href="#projects">
              {t("client.projectsCta")}
            </a>
          </motion.div>
        </div>
        <div className="client-hero-note">{t("client.note")}</div>
      </section>

      <section id="projects" className="client-section">
        <div className="client-section-heading">
          <p className="client-eyebrow">{t("client.projectsEyebrow")}</p>
          <h2>{t("client.projectsTitle")}</h2>
          <p>{t("client.projectsDescription")}</p>
        </div>
        <div className="client-project-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="plans" className="client-section">
        <div className="client-section-heading">
          <p className="client-eyebrow">{t("client.plansEyebrow")}</p>
          <h2>{t("client.plansTitle")}</h2>
          <p>{t("client.plansDescription")}</p>
        </div>
        <div className="client-project-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
            >
              <PlanCard plan={plan}/>
              
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="client-about">
        <div className="client-about-flex">
          <div>
            <p className="client-eyebrow">{t("client.aboutEyebrow")}</p>
            <h2>{t("client.aboutTitle")}</h2>
          </div>
          <div className="client-about-copy">
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <a
              className="client-cta client-cta-dark"
              href={socialLinks.find((link) => link.label === "WhatsApp")?.href}
              target="_blank"
              rel="noreferrer"
            >
              {t("client.aboutCta")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}