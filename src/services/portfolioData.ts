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
import hotelImage from '../assets/img/projects/hotel-campos.png'
import cyberImage from '../assets/img/projects/cyber.png'
import casasImage from '../assets/img/projects/casas-em-milho-verde.png'

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
  { title: 'Hotel Campos', image: hotelImage, descriptionKey: 'projects.cards.hotel', description: 'Site de reserva de hotéis feito com Bootstrap, Flexbox e Grid layout.', liveUrl: 'https://joaonevescampos.github.io/hotel-campos/', codeUrl: 'https://github.com/joaonevescampos/hotel-campos' },
]

const fullstackProjects: Project[] = [
  { title: 'Casas em Milho Verde', titleKey: 'projects.cards.casasTitle', image: casasImage, descriptionKey: 'projects.cards.casas', description: 'Site criado para um cliente que é corretor de imóveis. O objetivo foi divulgar os imóveis à venda e os aluguéis de temporada do Airbnb. Foi criado todo o sistema de gerenciamento de anúncios para que o cliente pudesse ter 100% do controle dos seus anúncios. Foram usadas tecnologias como React, TypeScript, Tailwind, Motion, Shadcn, Postgres e Supabase como banco de dados e backend.', liveUrl: 'https://www.casasemmilhoverde.com/', codeUrl: 'https://github.com/joaonevescampos/casas-em-milho-verde' },
  { title: 'Cyber Web', image: cyberImage, descriptionKey: 'projects.cards.cyber', description: 'E-commerce de tecnologia com React, TypeScript, Tailwind, Prisma, Node e PostgreSQL, incluindo filtros, login e carrinho.', liveUrl: 'https://cyber-web-frontend-public.vercel.app/', codeUrl: 'https://github.com/joaonevescampos/cyber-web-frontend-public' },
]

const backendProjects: Project[] = [
  { title: 'Ponto de vendas', descriptionKey: 'projects.cards.sales', description: 'API para simular o backend de um software de loja de vendas, desenvolvida com Node.js e Postgres.', codeUrl: 'https://github.com/joaonevescampos/ponto-de-vendas-cubos-academy' },
  { title: 'Cubos Bank', descriptionKey: 'projects.cards.bank', description: 'API RESTful de um banco digital com contas, depósitos, saques, transferências, saldo e extrato.', codeUrl: 'https://github.com/joaonevescampos/cubos-bank' },
]

export const projectGroups = [
  { id: 'best', title: 'Os melhores', projects: [fullstackProjects[0], frontendProjects[1], frontendProjects[2], fullstackProjects[1]] },
  { id: 'frontend', title: 'Projetos frontend', projects: frontendProjects },
  { id: 'fullstack', title: 'Projetos fullstack', projects: fullstackProjects },
  { id: 'backend', title: 'Projetos backend', projects: backendProjects },
] satisfies { id: string; title: string; projects: Project[] }[]