import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiPrisma, SiGit, SiFigma, SiOpenjdk } from 'react-icons/si'
import backgroundVideo from '../assets/video/background-video.mp4'
import profilePhoto from '../assets/img/perfil-portfolio.png'
import curriculum from '../assets/img/curriculo-joao-campos.pdf'
import { ProjectCard } from '../components/ProjectCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { projectGroups, skills } from '../services/portfolioData'
import { socialLinks } from '../utils/links'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const experiences = [
  { date: '07/2025', role: 'Desenvolvedor full stack', roleKey: 'experience.cards.compass.role', type: 'Estagiário', typeKey: 'experience.cards.compass.type', company: 'Compass UOL' },
  { date: '01/2025', role: 'Desenvolvedor frontend', roleKey: 'experience.cards.golab.role', type: 'Trainee', typeKey: 'experience.cards.golab.type', company: 'Golab' },
  { date: '06/2024', role: 'Desenvolvedor frontend', roleKey: 'experience.cards.mundiware.role', type: 'Estagiário', typeKey: 'experience.cards.mundiware.type', company: 'Mundiware Systems' },
  { date: '04/2023', role: 'Desenvolvedor frontend', roleKey: 'experience.cards.freelance.role', type: 'Freelancer', typeKey: 'experience.cards.freelance.type', company: 'Autônomo' },
]

const accentMap: Record<string, string> = {
  FRONTEND: 'border-sky-300/70 bg-transparent',
  BACKEND: 'border-sky-500/80 bg-transparent',
  DESIGN: 'border-sky-700/80 bg-transparent',
}

const technologyMarquee = [
  { label: 'React', icon: SiReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'Prisma', icon: SiPrisma },
  { label: 'Git', icon: SiGit },
  { label: 'Java', icon: SiOpenjdk },
  { label: 'Figma', icon: SiFigma },
  { label: 'API', icon: SiNodedotjs },
  { label: 'React', icon: SiReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'Next.js', icon: SiNextdotjs },
  { label: 'Node.js', icon: SiNodedotjs },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'MongoDB', icon: SiMongodb },
  { label: 'Prisma', icon: SiPrisma },
  { label: 'Git', icon: SiGit },
  { label: 'Java', icon: SiOpenjdk },
  { label: 'Figma', icon: SiFigma },
  { label: 'API', icon: SiNodedotjs },
]

const projects = projectGroups
  .flatMap((group) => group.projects)
  .filter((project, index, allProjects) => allProjects.findIndex((item) => item.title === project.title) === index)

export function Home() {
  const { t } = useTranslation()
  useDocumentTitle('João Campos | Frontend Developer')
  const [visibleProjects, setVisibleProjects] = useState(1)
  const [isProjectsPaused, setIsProjectsPaused] = useState(false)
  const [projectIndex, setProjectIndex] = useState(projects.length)
  const [projectTransition, setProjectTransition] = useState(true)
  const projectTouchStart = useRef<number | null>(null)

  useEffect(() => {
    const updateVisibleProjects = () => {
      setVisibleProjects(window.innerWidth >= 1280 ? 4 : window.innerWidth >= 768 ? 2 : 1)
    }

    updateVisibleProjects()
    window.addEventListener('resize', updateVisibleProjects)
    return () => window.removeEventListener('resize', updateVisibleProjects)
  }, [])

  useEffect(() => {
    if (isProjectsPaused) return

    const interval = window.setInterval(() => {
      setProjectIndex((current) => current + 1)
    }, 10000)

    return () => window.clearInterval(interval)
  }, [isProjectsPaused])

  const moveProjects = (direction: 1 | -1) => {
    setProjectTransition(true)
    setProjectIndex((current) => current + direction)
  }

  const resetProjectLoop = () => {
    if (projectIndex >= projects.length * 2) {
      setProjectTransition(false)
      setProjectIndex(projects.length)
    }

    if (projectIndex < projects.length) {
      setProjectTransition(false)
      setProjectIndex(projects.length * 2 - 1)
    }
  }

  const handleProjectPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    projectTouchStart.current = event.clientX
    setIsProjectsPaused(true)
  }

  const handleProjectPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (projectTouchStart.current === null) return

    const distance = event.clientX - projectTouchStart.current
    if (Math.abs(distance) > 40) moveProjects(distance > 0 ? -1 : 1)
    projectTouchStart.current = null
    setIsProjectsPaused(false)
  }

  const stats = [
    { value: t('stats.experience.value'), label: t('stats.experience.label') },
    { value: t('stats.projects.value'), label: t('stats.projects.label') },
    { value: t('stats.stack.value'), label: t('stats.stack.label') },
  ]

  return (
    <main className="relative overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <motion.section
        id="top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hero-shell relative isolate flex min-h-screen items-center overflow-hidden border-b border-[var(--border)]"
      >
        <Link className="hero-home-back" to="/">← HOME</Link>
        <video
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-75"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-ambient absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.88),rgba(2,6,23,0.38),rgba(2,6,23,0.82))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-20 pt-28 md:px-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="hero-copy max-w-3xl"
          >
            <p className="status-badge mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
              {t('hero.status')}
            </p>
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
              {t('hero.title')}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-200">
                {t('hero.ctaPrimary')}
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-200">
                {t('hero.ctaSecondary')}
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 + index * 0.12 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elevated)]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="marquee-wrap">
          <div className="marquee-track">
            {technologyMarquee.map(({ label, icon: Icon }, index) => (
              <div key={`${label}-${index}`} className="marquee-item">
                <span className="marquee-dot"><Icon size={12} /></span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="about" className="section-shell" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <div className="section-kicker">{t('about.kicker')}</div>
        <div className="section-heading">
          <h2>{t('about.title')}</h2>
          <p>{t('about.description')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <img
              src={profilePhoto}
              alt="João Campos"
              className="photo-frame h-[540px] w-full rounded-[2rem] border border-[var(--border)] object-cover shadow-[0_25px_80px_var(--shadow)]"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay: 0.15 }} className="space-y-6 text-base leading-8 text-[var(--muted)]">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href={curriculum} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--panel)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text)] transition duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]">
                {t('about.buttonCv')}
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-[var(--text)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--bg)] transition duration-300 hover:opacity-90">
                {t('about.buttonProjects')}
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="projects" className="section-shell" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
        <div className="section-kicker">{t('projects.kicker')}</div>
        <div className="section-heading">
          <h2>{t('projects.title')}</h2>
          <p>{t('projects.description')}</p>
        </div>

        <div
          className="project-carousel"
          onMouseEnter={() => setIsProjectsPaused(true)}
          onMouseLeave={() => setIsProjectsPaused(false)}
          onPointerDown={handleProjectPointerDown}
          onPointerUp={handleProjectPointerUp}
          onPointerCancel={() => {
            projectTouchStart.current = null
            setIsProjectsPaused(false)
          }}
        >
          <div className="project-carousel-viewport">
            <div
              className={`project-carousel-track ${projectTransition ? 'is-transitioning' : ''}`}
              onTransitionEnd={resetProjectLoop}
              style={{
                width: `${(projects.length * 3 * 100) / visibleProjects}%`,
                '--project-total': projects.length * 3,
                transform: `translateX(-${projectIndex * (100 / (projects.length * 3))}%)`,
              } as React.CSSProperties}
            >
              {[...projects, ...projects, ...projects].map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="project-carousel-slide"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.04 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
          <button type="button" aria-label="Projeto anterior" className="project-carousel-arrow left-2" onClick={() => moveProjects(-1)}>←</button>
          <button type="button" aria-label="Próximo projeto" className="project-carousel-arrow right-2" onClick={() => moveProjects(1)}>→</button>
        </div>
      </motion.section>

      <motion.section id="experience" className="section-shell" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }}>
        <div className="section-kicker">{t('experience.kicker')}</div>
        <div className="section-heading">
          <h2>{t('experience.title')}</h2>
          <p>{t('experience.description')}</p>
        </div>

        <div className="relative mt-8 space-y-5 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(to_bottom,transparent,rgba(125,211,252,0.7),transparent)] md:before:left-1/2 md:before:-translate-x-1/2">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.date}-${experience.company}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.01, y: -6 }}
              className="experience-card relative rounded-[1.75rem] border border-[var(--border)] bg-[var(--panel)] p-6 shadow-[0_22px_60px_var(--shadow)] md:w-[calc(50%-1.5rem)] md:p-7"
              style={index % 2 === 0 ? { marginRight: 'auto' } : { marginLeft: 'auto' }}
            >
              <span className="absolute -left-[1.4rem] top-8 hidden h-3 w-3 rounded-full bg-sky-400 ring-4 ring-[var(--bg)] md:block" />
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">{experience.date}</p>
              <h3 className="text-xl font-semibold text-[var(--text)]">{t(experience.roleKey, experience.role)}</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{t(experience.typeKey, experience.type)}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{experience.company}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section id="skills" className="section-shell" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8 }}>
        <div className="section-kicker">{t('skills.kicker')}</div>
        <div className="section-heading">
          <h2>{t('skills.title')}</h2>
          <p>{t('skills.description')}</p>
        </div>

        <Accordion type="single" collapsible defaultValue="skill-0" className="skills-accordion">
          {skills.map((skill, index) => (
            <AccordionItem key={skill.title} value={`skill-${index}`} className={`skills-accordion-item ${accentMap[skill.title] ?? 'border-sky-300/70'}`}>
              <AccordionTrigger>{skill.title}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 text-sm leading-7 text-[var(--muted)]">
                  {skill.description.map((paragraph, paragraphIndex) => (
                    <p key={paragraph}>{skill.descriptionKeys?.[paragraphIndex] ? t(skill.descriptionKeys[paragraphIndex], paragraph) : paragraph}</p>
                  ))}
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <li key={technology} className="rounded-full border border-sky-300/60 bg-[var(--bg-elevated)] px-2.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      {technology}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      <motion.section id="contact" className="section-shell pb-28" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.75 }}>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(125,211,252,0.16),rgba(15,23,42,0.18))] p-8 shadow-[0_25px_80px_var(--shadow)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="section-kicker mb-5">{t('contact.kicker')}</div>
              <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text)] md:text-5xl">
                {t('contact.title')}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-[var(--muted)]">
                {t('contact.description')}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-sm text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  <span>{social.label}</span>
                  <span aria-hidden="true">→</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  )
}