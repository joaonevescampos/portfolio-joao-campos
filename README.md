# Portfólio - João Campos

Portfólio pessoal migrado para React, Vite, TypeScript e Tailwind CSS.

## Desenvolvimento

```bash
npm install
npm run dev
```

Para validar o bundle de produção:

```bash
npm run build
npm run preview
```

## Rotas

- `/` - navegação principal
- `/about` - sobre mim
- `/experience` - experiência profissional
- `/skills` - habilidades
- `/projects` - projetos e links externos

## Arquitetura

A aplicação vive em `src/`, organizada em `assets`, `components`, `hooks`, `layouts`, `pages`, `routes`, `services`, `styles`, `types` e `utils`. Os conteúdos repetidos de projetos e habilidades estão tipados e centralizados em `services/portfolioData.ts`.
