import type { Project } from '../types/portfolio'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const title = project.titleKey ? t(project.titleKey, project.title) : project.title
  const description = project.descriptionKey ? t(project.descriptionKey, project.description) : project.description

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const openProject = () => setIsOpen(true)
  const stopCardClick = (event: React.MouseEvent) => event.stopPropagation()

  return (
    <article
      className="project-card group flex h-[28rem] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-[var(--border)] shadow-[0_22px_55px_var(--shadow)] transition duration-500 hover:md:scale-[1.02] hover:md:shadow-[0_25px_80px_rgba(59,130,246,0.12)]"
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openProject()
        }
      }}
    >
      <div className="h-70! md:h-60! shrink-0 bg-[var(--bg-elevated)]">
        {project.image && <img src={project.image} alt={title} className="h-full w-full object-cover" />}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-3 p-4">
        <h3 className="text-lg font-semibold text-[var(--project-card-text)]">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-[var(--project-card-text)]/75">{description}</p>
        <div className="mt-auto flex flex-wrap justify-center gap-3 pt-2">
          <button type="button" className="project-button primary min-w-32" onClick={(event) => { stopCardClick(event); openProject() }}>
            {t('projectDetails.details')}
          </button>
        </div>
      </div>
      {isOpen && createPortal(
        <div className="project-modal" role="presentation" onClick={() => setIsOpen(false)}>
          <div className="project-modal-content" role="dialog" aria-modal="true" aria-labelledby={`project-title-${project.title}`} onClick={stopCardClick}>
            <button type="button" className="project-modal-close" aria-label={t('projectDetails.close')} onClick={() => setIsOpen(false)}>
              X
            </button>
            {project.image && <img src={project.image} alt={title} className="project-modal-image" />}
            <div className="project-modal-body">
              <p className="project-modal-eyebrow">{t('projectDetails.details')}</p>
              <h2 id={`project-title-${project.title}`}>{title}</h2>
              <p>{description}</p>
              <div className="project-modal-actions">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-button primary">{t('projectDetails.live')}</a>}
                {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-button secondary">{project.secondaryCodeUrl ? t('projectDetails.frontendCode') : t('projectDetails.code')}</a>}
                {project.secondaryCodeUrl && <a href={project.secondaryCodeUrl} target="_blank" rel="noreferrer" className="project-button secondary">{t('projectDetails.backendCode')}</a>}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </article>
  )
}