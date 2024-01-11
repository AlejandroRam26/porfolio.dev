import type { HTMLTag } from "astro/types"

export interface PorfolioData {
  name: string
  description: string
  minor_description: string
  title_description: string
  meta_description: string
  address: string
  experience_time: string
  aviable_work: boolean
  avatar: string
  linkedin: string
  github: string
  mail: string
  projects: Project[]
  experience: Experience[]
}

export interface Project {
  title: string
  description: string
  link?: string
  github?: string
  image?: string
  tags: string[]
}

export interface Experience {
  date: string
  title: string
  description?: Description[]
  link?: string
}

export interface Description {
  content: Content[]
  htmlTag?: string
  class?: string
}

export interface Content {
  content: string
  htmlTag?: HTMLTag
  class?: string
  href?: string
}
