import type { Project } from '../types/portfolio'
import { useTranslation } from 'react-i18next'

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()

  return (
    <article className="project-card group flex h-[35rem] flex-col overflow-hidden rounded-[1.35rem] border border-[var(--border)] shadow-[0_22px_55px_var(--shadow)] transition duration-500 hover:md:scale-[1.02] hover:md:shadow-[0_25px_80px_rgba(59,130,246,0.12)]">
      <div className="h-64 shrink-0 bg-[var(--bg-elevated)]">
        {project.image && <img src={project.image} alt={project.title} className="h-full w-full object-cover" />}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-4 p-5">
        <h3 className="text-lg font-semibold text-[var(--project-card-text)]">{project.title}</h3>
        <p className="text-sm leading-6 text-[var(--project-card-text)]/75">{project.descriptionKey ? t(project.descriptionKey, project.description) : project.description}</p>
        <div className="mt-auto flex flex-wrap justify-center gap-3 pt-2">
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-button primary min-w-32">Ver projeto</a>}
          {project.codeUrl && <a href={project.codeUrl} target="_blank" rel="noreferrer" className="project-button secondary min-w-32">{project.secondaryCodeUrl ? 'Código frontend' : 'Código'}</a>}
          {project.secondaryCodeUrl && <a href={project.secondaryCodeUrl} target="_blank" rel="noreferrer" className="project-button secondary min-w-32">Código backend</a>}
        </div>
      </div>
    </article>
  )
}