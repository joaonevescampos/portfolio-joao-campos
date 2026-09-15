import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel'
import { skills } from '../services/portfolioData'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const accentClasses = { cyan: 'text-cyan-200 border-cyan-200', amber: 'text-amber-200 border-amber-200', fuchsia: 'text-fuchsia-200 border-fuchsia-200' }

export function Skills() {
  useDocumentTitle('Habilidades')
  return <main className="min-h-[calc(100vh-6rem)]"><Carousel items={skills} label="habilidades" renderItem={(skill) => <article className="relative min-h-[calc(100vh-6rem)] overflow-hidden bg-cover bg-center px-8 py-20 md:px-16" style={{ backgroundImage: `url(${skill.background})` }}><div className="absolute inset-0 bg-black/85 md:bg-gradient-to-r md:from-black md:via-black/85 md:to-transparent" /><div className="relative z-[1] max-w-2xl space-y-6"><h1 className={`text-3xl font-bold ${accentClasses[skill.accent as keyof typeof accentClasses].split(' ')[0]}`}>{skill.title}</h1>{skill.description.map((paragraph) => <p key={paragraph} className="text-sm leading-7 text-white/85">{paragraph}</p>)}<h2 className="text-lg font-medium">Tecnologias</h2><ul className="flex flex-wrap gap-2">{skill.technologies.map((technology) => <li key={technology} className="border border-white/25 px-3 py-1 text-xs text-white/80">{technology}</li>)}</ul><Link to={`/projects#${skill.title === 'DESIGN' ? 'frontend' : skill.title.toLowerCase()}`} className={`inline-block border px-4 py-2 text-xs transition hover:bg-white/10 ${accentClasses[skill.accent as keyof typeof accentClasses].split(' ')[1]}`}>{skill.projectLabel}</Link></div></article>} /></main>
}