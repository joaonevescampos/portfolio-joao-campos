export type Project = {
  title: string
  titleKey?: string
  description: string
  descriptionKey?: string
  image?: string
  liveUrl?: string
  codeUrl?: string
  secondaryCodeUrl?: string
}

export type Skill = {
  title: string
  description: string[]
  descriptionKeys?: string[]
  technologies: string[]
  background: string
  accent: string
  projectLabel: string
}