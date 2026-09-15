import { Carousel } from '../components/Carousel'
import { ProjectCard } from '../components/ProjectCard'
import { projectGroups } from '../services/portfolioData'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Projects() {
  useDocumentTitle('Projetos')
  return <main className="min-h-[calc(100vh-6rem)] bg-gradient-to-b from-black to-[#070b46] px-5 py-10 md:px-12"><div className="mx-auto flex max-w-[1500px] flex-col gap-12"><h1 className="text-2xl font-medium tracking-[0.2em]">PROJETOS</h1>{projectGroups.map((group) => <section key={group.id} id={group.id} className="scroll-mt-8"><h2 className="mb-5 text-lg font-medium">{group.title}</h2><Carousel items={group.projects} label={group.title} renderItem={(project) => <ProjectCard project={project} />} /></section>)}</div></main>
}