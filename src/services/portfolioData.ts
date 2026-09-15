import type { NavigationItem } from '../types/navigation'
import type { Project, Skill } from '../types/portfolio'

import aboutBackground from '../assets/img/backgrounds/about-novo.png'
import experienceBackground from '../assets/img/backgrounds/experience-novo.png'
import skillsBackground from '../assets/img/backgrounds/skill-novo.png'
import projectsBackground from '../assets/img/backgrounds/projects-novo.png'
import frontendBackground from '../assets/img/backgrounds/frontend-bg.jpeg'
import backendBackground from '../assets/img/backgrounds/backend-bg.jpeg'
import designBackground from '../assets/img/backgrounds/design-bg.jpeg'

import mandalasImage from '../assets/img/projects/mandalas.png'
import moviesImage from '../assets/img/projects/mymovies.png'
import tastyImage from '../assets/img/projects/tasty.png'
import spotifyImage from '../assets/img/projects/my-spotify.png'
import hotelImage from '../assets/img/projects/hotel-campos.png'
import cyberImage from '../assets/img/projects/cyber.png'
import pontoLocalImage from '../assets/img/projects/ponto-local.png'
import boardImage from '../assets/img/projects/new-board.png'
import cucaflowImage from '../assets/img/projects/cucaflow.png'
import pokegymImage from '../assets/img/projects/pokegym.png'

export const navigationItems: NavigationItem[] = [
  { label: 'SOBRE', path: '/about', background: aboutBackground, className: 'from-cyan-950/80' },
  { label: 'EXPERIÊNCIA', path: '/experience', background: experienceBackground, className: 'from-sky-950/80' },
  { label: 'HABILIDADES', path: '/skills', background: skillsBackground, className: 'from-indigo-950/80' },
  { label: 'PROJETOS', path: '/projects', background: projectsBackground, className: 'from-slate-950/80' },
]

export const skills: Skill[] = [
  {
    title: 'FRONTEND',
    background: frontendBackground,
    accent: 'cyan',
    projectLabel: 'Ver projetos frontend',
    description: [
      'Possuo um amplo conhecimento prático das principais tecnologias requeridas por um desenvolvedor frontend, com vasto domínio principalmente de HTML, CSS, JavaScript e React.',
      'Tenho experiência profissional trabalhando como desenvolvedor frontend em empresas como Mundiware, Golab e Compass UOL.',
      'Na Compass, aperfeiçoei minhas habilidades em desenvolvimento full stack usando React, TypeScript, Tailwind, MongoDB, PostgreSQL, Prisma e Node.js, além da certificação AWS Cloud Practitioner.',
    ],
    descriptionKeys: ['skills.frontend.paragraph1', 'skills.frontend.paragraph2', 'skills.frontend.paragraph3'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Shadcn', 'Material UI', 'Bootstrap'],
  },
  {
    title: 'BACKEND',
    background: backendBackground,
    accent: 'amber',
    projectLabel: 'Ver projetos backend',
    description: [
      'Apesar de focar mais em aprimorar minhas habilidades como desenvolvedor frontend, também possuo domínio de desenvolvimento backend.',
      'Desenvolvi minhas habilidades na Cubos Academy, onde criei diversas APIs RESTful usando Node.js e PostgreSQL.',
      'Também tive uma vasta experiência com backend na Compass UOL, desenvolvendo projetos full stack com as principais tecnologias do mercado.',
    ],
    descriptionKeys: ['skills.backend.paragraph1', 'skills.backend.paragraph2', 'skills.backend.paragraph3'],
    technologies: ['JavaScript', 'Java', 'Node.js', 'TypeScript', 'Postgres', 'MongoDB', 'Prisma ORM', 'Testes - TDD'],
  },
  {
    title: 'DESIGN',
    background: designBackground,
    accent: 'fuchsia',
    projectLabel: 'Ver design dos projetos',
    description: [
      'Como um artista nato com criatividade de sobra, sempre me interessei por arte e design. Adquiri noções básicas de design e domínio principalmente do Figma e Canva.',
      'Tenho experiência profissional trabalhando como designer freelancer, criando posts e vídeos criativos para Instagram e YouTube.',
      'Também crio meus próprios designs para meus projetos, idealizando o layout no Figma e usando ferramentas de edição quando necessário.',
    ],
    descriptionKeys: ['skills.design.paragraph1', 'skills.design.paragraph2', 'skills.design.paragraph3'],
    technologies: ['Figma', 'Gimp', 'Canva', 'Lightroom'],
  },
]

const frontendProjects: Project[] = [
  { title: 'Mandalas Digitais', image: mandalasImage, descriptionKey: 'projects.cards.mandalas', description: 'Site feito como portfólio de um arquiteto para vendas de mandalas digitais, desenvolvido com HTML, CSS e JavaScript.', liveUrl: 'https://joaonevescampos.github.io/site-mandala/', codeUrl: 'https://github.com/joaonevescampos/site-mandala' },
  { title: 'My Movies', image: moviesImage, descriptionKey: 'projects.cards.movies', description: 'Plataforma de filmes inspirada na Netflix, feita com React, TypeScript e MUI, usando a API do TMDB.', liveUrl: 'https://my-movies-blue.vercel.app/', codeUrl: 'https://github.com/joaonevescampos/my-movies' },
  { title: 'Tasty', image: tastyImage, descriptionKey: 'projects.cards.tasty', description: 'Site responsivo de uma lanchonete, criado com HTML, CSS e JavaScript.', liveUrl: 'https://tasty-murex.vercel.app/', codeUrl: 'https://github.com/joaonevescampos/tasty' },
  { title: 'My Spotify', image: spotifyImage, descriptionKey: 'projects.cards.spotify', description: 'Site de música inspirado no Spotify, desenvolvido em React e CSS com design idealizado por mim.', liveUrl: 'https://myspotify-eta.vercel.app/', codeUrl: 'https://github.com/joaonevescampos/myspotify' },
  { title: 'Hotel Campos', image: hotelImage, descriptionKey: 'projects.cards.hotel', description: 'Site de reserva de hotéis feito com Bootstrap, Flexbox e Grid layout.', liveUrl: 'https://joaonevescampos.github.io/hotel-campos/', codeUrl: 'https://github.com/joaonevescampos/hotel-campos' },
]

const fullstackProjects: Project[] = [
  { title: 'Cyber Web', image: cyberImage, descriptionKey: 'projects.cards.cyber', description: 'E-commerce de tecnologia com React, TypeScript, Tailwind, Prisma, Node e PostgreSQL, incluindo filtros, login e carrinho.', liveUrl: 'https://cyber-web-frontend-public.vercel.app/', codeUrl: 'https://github.com/joaonevescampos/cyber-web-frontend-public' },
  { title: 'Ponto Local', image: pontoLocalImage, descriptionKey: 'projects.cards.local', description: 'MVP de e-commerce para negociação de produtos locais, criado com React, TypeScript, MUI, Postgres e Java com SpringBoot.', codeUrl: 'https://github.com/pontolocal/frontend', secondaryCodeUrl: 'https://github.com/pontolocal/backend' },
  { title: 'New Board', image: boardImage, descriptionKey: 'projects.cards.board', description: 'Software de gerenciamento de tarefas similar ao Trello, desenvolvido em equipe com React, CSS, Node e PostgreSQL.', liveUrl: 'https://new-board-project.vercel.app/', codeUrl: 'https://github.com/My-Tech-Mind/new-board' },
  { title: 'Cucaflow', image: cucaflowImage, descriptionKey: 'projects.cards.cucaflow', description: 'Software criado para melhorar a organização de artistas, desenvolvido com Node, TypeScript, Next, Tailwind, Nest, Prisma e PostgreSQL.', liveUrl: 'https://cucaflow.netlify.app/', codeUrl: 'https://github.com/patrickcardoso-dev/cucaflow-app' },
]

const backendProjects: Project[] = [
  { title: 'Ponto de vendas', descriptionKey: 'projects.cards.sales', description: 'API para simular o backend de um software de loja de vendas, desenvolvida com Node.js e Postgres.', codeUrl: 'https://github.com/joaonevescampos/ponto-de-vendas-cubos-academy' },
  { title: 'Cubos Bank', descriptionKey: 'projects.cards.bank', description: 'API RESTful de um banco digital com contas, depósitos, saques, transferências, saldo e extrato.', codeUrl: 'https://github.com/joaonevescampos/cubos-bank' },
]

export const projectGroups = [
  { id: 'best', title: 'Os melhores', projects: [pokegymImage, moviesImage, tastyImage, cyberImage].map((image, index) => ({
    title: ['Pokegym', 'My Movies', 'Tasty', 'Cyber Web'][index], image, descriptionKey: ['projects.cards.pokegym', 'projects.cards.movies', 'projects.cards.tasty', 'projects.cards.cyber'][index], description: ['App de produtividade e aventura com React Vite, TypeScript, Tailwind e Shadcn.', frontendProjects[1].description, frontendProjects[2].description, fullstackProjects[0].description][index], liveUrl: [ 'https://pokegym.vercel.app/', frontendProjects[1].liveUrl, frontendProjects[2].liveUrl, fullstackProjects[0].liveUrl][index], codeUrl: ['https://github.com/joaonevescampos/pokegym', frontendProjects[1].codeUrl, frontendProjects[2].codeUrl, fullstackProjects[0].codeUrl][index],
  })) },
  { id: 'frontend', title: 'Projetos frontend', projects: frontendProjects },
  { id: 'fullstack', title: 'Projetos fullstack', projects: fullstackProjects },
  { id: 'backend', title: 'Projetos backend', projects: backendProjects },
] satisfies { id: string; title: string; projects: Project[] }[]