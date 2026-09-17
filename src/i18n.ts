import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  pt: {
    translation: {
      nav: {
        about: 'Sobre',
        projects: 'Projetos',
        experience: 'Experiência',
        skills: 'Habilidades',
        contact: 'Contato',
      },
      hero: {
        status: 'Disponível para oportunidades',
        title: 'João Campos',
        subtitle: 'Frontend Developer com visão estratégica de backend, criando interfaces modernas, performáticas e fáceis de usar.',
        ctaPrimary: 'Ver projetos',
        ctaSecondary: 'Fale comigo',
      },
      stats: {
        experience: { value: '3+', label: 'anos de experiência' },
        projects: { value: '12+', label: 'projetos entregues' },
        stack: { value: 'Fullstack', label: 'visão completa' },
      },
      about: {
        kicker: 'Sobre',
        title: 'Design com rigor técnico e visão de produto.',
        description: 'Sou um profissional com foco em interfaces modernas, experiência do usuário e execução com alto nível de qualidade.',
        paragraph1:
          'Sou João Campos, um engenheiro químico que encontrou na tecnologia uma nova e profunda paixão. A partir da experiência com desenvolvimento web, me especializei em frontend e também consolidei conhecimentos em backend para entregar soluções mais completas e bem estruturadas.',
        paragraph2:
          'Meu fascínio por interfaces responsivas e design bem pensado me levou a desenvolver projetos com foco em usabilidade, estética, performance e produtividade. Trabalho com React, TypeScript, Tailwind, Node.js, bancos de dados e arquitetura de aplicações modernas.',
        paragraph3:
          'Além do código, tenho sensibilidade para design visual e sempre busco criar experiências que conectem funcionalidade, clareza e excelência no detalhe.',
        buttonCv: 'Baixar CV',
        buttonProjects: 'Meus projetos',
      },
      projects: {
        kicker: 'Projetos',
        title: 'Trabalhos que misturam funcionalidade e identidade visual.',
        description:
          'Destaque para projetos em frontend, fullstack e backend, todos pensados para entregar experiência real, clareza e execução de alto nível.',
        cards: {
          casasTitle: 'Casas em Milho Verde',
          casas: 'Site criado para um cliente que é corretor de imóveis. O objetivo foi divulgar os imóveis à venda e os aluguéis de temporada do Airbnb. Foi criado todo o sistema de gerenciamento de anúncios para que o cliente pudesse ter 100% do controle dos seus anúncios. Foram usadas tecnologias como React, TypeScript, Tailwind, Motion, Shadcn, Postgres e Supabase como banco de dados e backend.',
          pokegym: 'App de produtividade e aventura com React Vite, TypeScript, Tailwind e Shadcn.',
          mandalas: 'Site feito como portfólio de um arquiteto para vendas de mandalas digitais, desenvolvido com HTML, CSS e JavaScript.',
          movies: 'Plataforma de filmes inspirada na Netflix, feita com React, TypeScript e MUI, usando a API do TMDB.',
          tasty: 'Site responsivo de uma lanchonete, criado com HTML, CSS e JavaScript.',
          hotel: 'Site de reserva de hotéis feito com Bootstrap, Flexbox e Grid layout.',
          cyber: 'E-commerce de tecnologia com React, TypeScript, Tailwind, Prisma, Node e PostgreSQL, incluindo filtros, login e carrinho.',
          sales: 'API para simular o backend de um software de loja de vendas, desenvolvida com Node.js e Postgres.',
          bank: 'API RESTful de um banco digital com contas, depósitos, saques, transferências, saldo e extrato.',
        },
      },
      experience: {
        kicker: 'Experiência',
        title: 'Uma trajetória com evolução constante.',
        description:
          'Experiência prática em empresas, freelancing e projetos acadêmicos, com foco em desenvolvimento web e melhoria contínua de produtos digitais.',
        cards: {
          compass: { role: 'Desenvolvedor full stack', type: 'Estagiário' },
          golab: { role: 'Desenvolvedor frontend', type: 'Trainee' },
          mundiware: { role: 'Desenvolvedor frontend', type: 'Estagiário' },
          freelance: { role: 'Desenvolvedor frontend', type: 'Freelancer' },
        },
      },
      skills: {
        kicker: 'Habilidades',
        title: 'Competências que unem frontend, backend e design.',
        description:
          'A base da minha atuação está em criar soluções completas, compreendendo tanto a experiência do usuário quanto a estrutura por trás da aplicação.',
        frontend: {
          paragraph1: 'Possuo amplo conhecimento prático das principais tecnologias de frontend, com domínio de HTML, CSS, JavaScript e React.',
          paragraph2: 'Tenho experiência profissional como desenvolvedor frontend em empresas como Mundiware, Golab e Compass UOL.',
          paragraph3: 'Na Compass, aperfeiçoei habilidades full stack usando React, TypeScript, Tailwind, MongoDB, PostgreSQL, Prisma e Node.js, além da certificação AWS Cloud Practitioner.',
        },
        backend: {
          paragraph1: 'Apesar de focar no frontend, também possuo domínio de desenvolvimento backend.',
          paragraph2: 'Desenvolvi minhas habilidades na Cubos Academy, criando APIs RESTful com Node.js e PostgreSQL.',
          paragraph3: 'Também tive ampla experiência com backend na Compass UOL, desenvolvendo projetos full stack com tecnologias de mercado.',
        },
        design: {
          paragraph1: 'Sempre me interessei por arte e design. Adquiri noções de design e domínio principalmente do Figma e Canva.',
          paragraph2: 'Tenho experiência como designer freelancer, criando posts e vídeos para Instagram e YouTube.',
          paragraph3: 'Também crio meus próprios designs, idealizando layouts no Figma e usando ferramentas de edição quando necessário.',
        },
      },
      contact: {
        kicker: 'Contato',
        title: 'Vamos construir uma experiência digital de impacto.',
        description:
          'Tenho interesse em projetos de frontend, produto digital, experiências premium e desenvolvimento com base técnica sólida.',
      },
      cover: {
        eyebrow: 'Experiências digitais com intenção',
        client: 'Sou cliente, quero um site!',
        company: 'Sou empresa, quero contratar!',
      },
      client: {
        eyebrow: 'Sites sob medida para negócios que querem crescer',
        title: 'Transforme sua ideia em site.',
        subtitle: 'Uma presença digital clara, bonita e preparada para transformar atenção em oportunidades.',
        cta: 'Quero conversar sobre meu projeto',
        projectsCta: 'Ver projetos realizados',
        note: 'Estratégia · design · código',
        projectsEyebrow: 'Projetos selecionados',
        projectsTitle: 'Seu próximo site pode começar aqui.',
        projectsDescription: 'Cada projeto nasce de uma necessidade real e ganha uma experiência pensada para pessoas reais.',
        aboutEyebrow: 'Quem vai construir com você',
        aboutTitle: 'Tecnologia com olhar humano.',
        aboutCta: 'Falar com João no WhatsApp',
      },
      projectDetails: {
        details: 'Ver detalhes',
        close: 'Fechar detalhes',
        live: 'Ver projeto',
        code: 'Código',
        frontendCode: 'Código frontend',
        backendCode: 'Código backend',
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: 'About',
        projects: 'Projects',
        experience: 'Experience',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        status: 'Available for opportunities',
        title: 'João Campos',
        subtitle: 'Frontend Developer with backend strategy, creating modern, performant and user-friendly interfaces.',
        ctaPrimary: 'View projects',
        ctaSecondary: 'Let’s talk',
      },
      stats: {
        experience: { value: '3+', label: 'years of experience' },
        projects: { value: '12+', label: 'projects delivered' },
        stack: { value: 'Fullstack', label: 'complete vision' },
      },
      about: {
        kicker: 'About',
        title: 'Design backed by technical rigor and product thinking.',
        description: 'I am a professional transition from engineering to web development, focused on modern interfaces, user experience and high-quality execution.',
        paragraph1:
          'I am João Campos, a chemical engineer who found a new and deep passion in technology. Through my web development experience, I specialized in frontend and also built backend knowledge to deliver more complete and well-structured solutions.',
        paragraph2:
          'My fascination with responsive interfaces and well-crafted design led me to build projects focused on usability, aesthetics, performance and productivity. I work with React, TypeScript, Tailwind, Node.js, databases and modern application architecture.',
        paragraph3:
          'Beyond code, I have a sensitivity for visual design and I always aim to create experiences that combine functionality, clarity and excellence in detail.',
        buttonCv: 'Download CV',
        buttonProjects: 'My projects',
      },
      projects: {
        kicker: 'Projects',
        title: 'Work that blends functionality with visual identity.',
        description:
          'Highlights in frontend, fullstack and backend projects, all designed to deliver real experience, clarity and high-level execution.',
        cards: {
          casasTitle: 'Houses in Milho Verde', casas: 'Website created for a real estate agent to showcase properties for sale and Airbnb vacation rentals. It includes a complete listing management system, giving the client full control over their ads. Built with React, TypeScript, Tailwind, Motion, Shadcn, Postgres and Supabase for the database and backend.', pokegym: 'Productivity and adventure app built with React Vite, TypeScript, Tailwind and Shadcn.', mandalas: 'Portfolio website for an architect selling digital mandalas, built with HTML, CSS and JavaScript.', movies: 'Netflix-inspired movie platform built with React, TypeScript and MUI using the TMDB API.', tasty: 'Responsive restaurant website built with HTML, CSS and JavaScript.', hotel: 'Hotel booking website built with Bootstrap, Flexbox and Grid layout.', cyber: 'Technology e-commerce built with React, TypeScript, Tailwind, Prisma, Node and PostgreSQL, with filters, login and cart.', sales: 'API simulating the backend of a sales store, built with Node.js and Postgres.', bank: 'RESTful digital banking API with accounts, deposits, withdrawals, transfers, balance and statement.',
        },
      },
      experience: {
        kicker: 'Experience',
        title: 'A path shaped by continuous growth.',
        description:
          'Hands-on experience in companies, freelancing and academic projects, focused on web development and continuous improvement of digital products.',
        cards: { compass: { role: 'Full stack developer', type: 'Intern' }, golab: { role: 'Frontend developer', type: 'Trainee' }, mundiware: { role: 'Frontend developer', type: 'Intern' }, freelance: { role: 'Frontend developer', type: 'Freelancer' } },
      },
      skills: {
        kicker: 'Skills',
        title: 'Capabilities that unite frontend, backend and design.',
        description:
          'My work is grounded in building complete solutions, understanding both the user experience and the structure behind the application.',
        frontend: { paragraph1: 'I have broad practical knowledge of frontend technologies, with strong command of HTML, CSS, JavaScript and React.', paragraph2: 'I have professional frontend experience at companies such as Mundiware, Golab and Compass UOL.', paragraph3: 'At Compass, I improved my full stack skills with React, TypeScript, Tailwind, MongoDB, PostgreSQL, Prisma and Node.js, as well as the AWS Cloud Practitioner certification.' },
        backend: { paragraph1: 'Although my focus is frontend, I also have solid backend development skills.', paragraph2: 'I developed my skills at Cubos Academy by creating RESTful APIs with Node.js and PostgreSQL.', paragraph3: 'I also gained extensive backend experience at Compass UOL, building full stack projects with market technologies.' },
        design: { paragraph1: 'I have always been interested in art and design, developing practical knowledge mainly in Figma and Canva.', paragraph2: 'I have worked as a freelance designer, creating posts and videos for Instagram and YouTube.', paragraph3: 'I also create designs for my own projects, planning layouts in Figma and using editing tools when needed.' },
      },
      contact: {
        kicker: 'Contact',
        title: 'Let’s create a digital experience with real impact.',
        description:
          'I am interested in frontend projects, digital products, premium experiences and development with strong technical foundations.',
      },
      cover: {
        eyebrow: 'Digital experiences with intention',
        client: 'I am a client, I want a website!',
        company: 'I am a company, I want to hire!',
      },
      client: {
        eyebrow: 'Tailored websites for businesses ready to grow',
        title: 'Turn your idea into a website.',
        subtitle: 'A clear, beautiful digital presence designed to turn attention into opportunity.',
        cta: 'Let’s talk about my project',
        projectsCta: 'See selected projects',
        note: 'Strategy · design · code',
        projectsEyebrow: 'Selected projects',
        projectsTitle: 'Your next website can start here.',
        projectsDescription: 'Every project begins with a real need and becomes an experience designed for real people.',
        aboutEyebrow: 'Who will build with you',
        aboutTitle: 'Technology with a human point of view.',
        aboutCta: 'Talk to João on WhatsApp',
      },
      projectDetails: {
        details: 'View details',
        close: 'Close details',
        live: 'View project',
        code: 'Code',
        frontendCode: 'Frontend code',
        backendCode: 'Backend code',
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: 'Sobre',
        projects: 'Proyectos',
        experience: 'Experiencia',
        skills: 'Habilidades',
        contact: 'Contacto',
      },
      hero: {
        status: 'Disponible para oportunidades',
        title: 'João Campos',
        subtitle: 'Frontend Developer con visión estratégica de backend, creando interfaces modernas, rápidas y fáciles de usar.',
        ctaPrimary: 'Ver proyectos',
        ctaSecondary: 'Hablemos',
      },
      stats: {
        experience: { value: '3+', label: 'años de experiencia' },
        projects: { value: '12+', label: 'proyectos entregados' },
        stack: { value: 'Fullstack', label: 'visión completa' },
      },
      about: {
        kicker: 'Sobre',
        title: 'Diseño con rigor técnico y visión de producto.',
        description: 'Soy un profesional con foco en interfaces modernas, experiencia de usuario y ejecución de alto nivel.',
        paragraph1:
          'Soy João Campos, ingeniero químico que encontró una nueva y profunda pasión en la tecnología. A partir de la experiencia en desarrollo web, me especialicé en frontend y también consolidé conocimientos de backend para entregar soluciones más completas y bien estructuradas.',
        paragraph2:
          'Mi fascinación por interfaces responsivas y un diseño bien pensado me llevó a desarrollar proyectos enfocados en usabilidad, estética, rendimiento y productividad. Trabajo con React, TypeScript, Tailwind, Node.js, bases de datos y arquitectura moderna de aplicaciones.',
        paragraph3:
          'Además del código, tengo sensibilidad por el diseño visual y siempre busco crear experiencias que conecten funcionalidad, claridad y excelencia en el detalle.',
        buttonCv: 'Descargar CV',
        buttonProjects: 'Mis proyectos',
      },
      projects: {
        kicker: 'Proyectos',
        title: 'Trabajos que combinan funcionalidad e identidad visual.',
        description:
          'Proyectos destacados en frontend, fullstack y backend, pensados para ofrecer experiencia real, claridad y ejecución de alto nivel.',
        cards: {
          casasTitle: 'Casas en Milho Verde', casas: 'Sitio creado para un agente inmobiliario para divulgar inmuebles en venta y alquileres de temporada en Airbnb. Incluye un sistema completo de gestión de anuncios para que el cliente tenga el control total de sus publicaciones. Desarrollado con React, TypeScript, Tailwind, Motion, Shadcn, Postgres y Supabase como base de datos y backend.', pokegym: 'Aplicación de productividad y aventura con React Vite, TypeScript, Tailwind y Shadcn.', mandalas: 'Portafolio para un arquitecto que vende mandalas digitales, desarrollado con HTML, CSS y JavaScript.', movies: 'Plataforma de películas inspirada en Netflix, hecha con React, TypeScript y MUI usando la API de TMDB.', tasty: 'Sitio responsivo para una cafetería, creado con HTML, CSS y JavaScript.', hotel: 'Sitio de reservas de hoteles hecho con Bootstrap, Flexbox y Grid layout.', cyber: 'E-commerce tecnológico con React, TypeScript, Tailwind, Prisma, Node y PostgreSQL, con filtros, login y carrito.', sales: 'API para simular el backend de una tienda de ventas, desarrollada con Node.js y Postgres.', bank: 'API RESTful de un banco digital con cuentas, depósitos, retiros, transferencias, saldo y extracto.',
        },
      },
      experience: {
        kicker: 'Experiencia',
        title: 'Un camino marcado por la evolución constante.',
        description:
          'Experiencia práctica en empresas, trabajo freelance y proyectos académicos, con foco en desarrollo web y mejora continua de productos digitales.',
        cards: { compass: { role: 'Desarrollador full stack', type: 'Becario' }, golab: { role: 'Desarrollador frontend', type: 'Trainee' }, mundiware: { role: 'Desarrollador frontend', type: 'Becario' }, freelance: { role: 'Desarrollador frontend', type: 'Freelancer' } },
      },
      skills: {
        kicker: 'Habilidades',
        title: 'Competencias que unen frontend, backend y diseño.',
        description:
          'La base de mi trabajo está en crear soluciones completas, comprendiendo tanto la experiencia del usuario como la estructura detrás de la aplicación.',
        frontend: { paragraph1: 'Tengo amplio conocimiento práctico de tecnologías frontend, con dominio de HTML, CSS, JavaScript y React.', paragraph2: 'Tengo experiencia profesional como desarrollador frontend en empresas como Mundiware, Golab y Compass UOL.', paragraph3: 'En Compass, mejoré mis habilidades full stack con React, TypeScript, Tailwind, MongoDB, PostgreSQL, Prisma y Node.js, además de la certificación AWS Cloud Practitioner.' },
        backend: { paragraph1: 'Aunque mi enfoque es frontend, también tengo dominio del desarrollo backend.', paragraph2: 'Desarrollé mis habilidades en Cubos Academy creando APIs RESTful con Node.js y PostgreSQL.', paragraph3: 'También adquirí amplia experiencia backend en Compass UOL, desarrollando proyectos full stack con tecnologías del mercado.' },
        design: { paragraph1: 'Siempre me han interesado el arte y el diseño, especialmente Figma y Canva.', paragraph2: 'Tengo experiencia como diseñador freelance, creando publicaciones y vídeos para Instagram y YouTube.', paragraph3: 'También creo diseños para mis propios proyectos, planificando layouts en Figma y usando herramientas de edición cuando es necesario.' },
      },
      contact: {
        kicker: 'Contacto',
        title: 'Construyamos una experiencia digital con impacto.',
        description:
          'Tengo interés en proyectos de frontend, producto digital, experiencias premium y desarrollo con una base técnica sólida.',
      },
      cover: {
        eyebrow: 'Experiencias digitales con intención',
        client: 'Soy cliente, ¡quiero un sitio!',
        company: 'Soy empresa, ¡quiero contratar!',
      },
      client: {
        eyebrow: 'Sitios a medida para negocios que quieren crecer',
        title: 'Convierte tu idea en un sitio web.',
        subtitle: 'Una presencia digital clara, bonita y preparada para convertir atención en oportunidades.',
        cta: 'Quiero hablar sobre mi proyecto',
        projectsCta: 'Ver proyectos realizados',
        note: 'Estrategia · diseño · código',
        projectsEyebrow: 'Proyectos seleccionados',
        projectsTitle: 'Tu próximo sitio puede empezar aquí.',
        projectsDescription: 'Cada proyecto nace de una necesidad real y se convierte en una experiencia pensada para personas reales.',
        aboutEyebrow: 'Quién construirá contigo',
        aboutTitle: 'Tecnología con una mirada humana.',
        aboutCta: 'Hablar con João por WhatsApp',
      },
      projectDetails: {
        details: 'Ver detalles',
        close: 'Cerrar detalles',
        live: 'Ver proyecto',
        code: 'Código',
        frontendCode: 'Código frontend',
        backendCode: 'Código backend',
      },
    },
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
