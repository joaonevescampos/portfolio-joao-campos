import { useDocumentTitle } from '../hooks/useDocumentTitle'

const experiences = [
  { date: '07/2025', role: 'Desenvolvedor full stack', type: 'Estagiário', company: 'Compass UOL' },
  { date: '01/2025', role: 'Desenvolvedor frontend', type: 'Trainee', company: 'Golab' },
  { date: '06/2024', role: 'Desenvolvedor frontend', type: 'Estagiário', company: 'Mundiware Systems' },
  { date: '04/2023', role: 'Desenvolvedor frontend', type: 'Freelancer', company: '' },
]

export function Experience() {
  useDocumentTitle('Experiência')
  return (
    <main className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center px-6 py-20 md:px-12">
      <section className="w-full">
        <h1 className="mb-16 text-2xl font-medium tracking-[0.2em]">EXPERIÊNCIA</h1>
        <div className="relative grid gap-12 md:grid-cols-4 md:gap-4">
          <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-cyan-300 to-slate-700 md:left-0 md:top-1/2 md:h-1 md:w-full md:bg-gradient-to-r">
            {experiences.map((experience, index) => <span key={experience.date} className="absolute h-4 w-4 -translate-x-1.5 rounded-full bg-cyan-300 md:top-1/2 md:-translate-y-1.5" style={{ top: `${index * 33.33}%`, left: '0', backgroundColor: index > 0 ? `rgb(${64 - index * 5}, ${167 - index * 25}, ${181 - index * 10})` : undefined }} />)}
          </div>
          {experiences.map((experience) => <article key={experience.date} className="relative pl-12 md:pl-0 md:pt-10 md:text-center"><p className="mb-3 font-medium text-cyan-200">{experience.date}</p><p className="font-semibold">{experience.role}</p><p className="text-sm text-white/70">{experience.type}</p><p className="text-sm text-white/70">{experience.company}</p></article>)}
        </div>
      </section>
    </main>
  )
}