import { Link } from 'react-router-dom'
import profilePhoto from '../assets/img/perfil-portifolio2.jpg'
import curriculum from '../assets/img/curriculo-joao-campos.pdf'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function About() {
  useDocumentTitle('Sobre mim')
  return (
    <main className="relative flex min-h-[calc(100vh-6rem)] items-start justify-center overflow-hidden px-6 py-14 md:items-center md:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#070b46]" />
      <section className="relative z-[1] grid max-w-5xl gap-10 text-center md:grid-cols-[280px_1fr] md:items-center md:text-left">
        <img src={profilePhoto} alt="Foto de perfil de João Campos" className="mx-auto h-80 w-64 rounded-2xl object-cover shadow-2xl shadow-cyan-950/40 md:h-[27rem] md:w-full" />
        <div className="flex flex-col gap-5 leading-7 text-white/80">
          <h1 className="text-3xl font-medium text-white md:text-4xl">Olá! Muito prazer!</h1>
          <p>Sou João Campos, um engenheiro químico que está embarcando em uma empolgante transição para a profissão de desenvolvedor front-end. Com uma sólida formação em engenharia química, descobri minha verdadeira paixão pela tecnologia web e decidi mergulhar de cabeça nesse novo desafio.</p>
          <p>Meu fascínio por interfaces responsivas com design atraente me levou a me especializar no desenvolvimento frontend, porém também tenho noções de design e desenvolvimento backend.</p>
          <p>Desbrave muito mais informações no meu CV abaixo e confira <Link to="/projects" className="font-bold text-white underline decoration-cyan-300 underline-offset-4">meus projetos.</Link></p>
          <a href={curriculum} target="_blank" rel="noreferrer" className="w-fit border border-white px-7 py-2 text-sm transition hover:border-cyan-300 hover:text-cyan-300">Baixar CV</a>
        </div>
      </section>
    </main>
  )
}