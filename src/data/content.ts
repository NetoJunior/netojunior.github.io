// All the text on the site lives here. Edit this file to change the content.
// Anything marked TODO is a placeholder to replace.

export const profile = {
  name: 'Neto Junior',
  headline: 'Backend developer building with .NET, Azure and databases.',
  intro:
    "I work mostly on the server side: APIs, data models and cloud deployments. This site is where I'm sharpening my React and Tailwind, so expect it to change as I learn.",
  email: 'you@example.com', // TODO: your real email
  github: 'https://github.com/NetoJunior',
  //linkedin: 'https://www.linkedin.com/in/your-profile', // TODO: your LinkedIn URL (or remove it)
}

export type Skill = {
  area: string
  technology: string
  /** 1 to 5, drawn as a small bar. */
  level: 1 | 2 | 3 | 4 | 5
  label: string
}

// Ordered from deepest to newest, like the query says.
export const skills: Skill[] = [
  { area: 'Database', technology: 'SQL Server', level: 5, label: 'Deepest' },
  { area: 'Database', technology: 'Oracle', level: 4, label: 'Strong' },
  { area: 'Database', technology: 'MongoDB', level: 4, label: 'Strong' },
  { area: 'Backend', technology: '.NET and ASP.NET', level: 5, label: 'Deepest' },
  { area: 'Cloud', technology: 'Azure', level: 4, label: 'Strong' },
  { area: 'Frontend', technology: 'React and Tailwind', level: 2, label: 'Learning' },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: 'zehblack.com',
    description:
      'This site: React, TypeScript and Tailwind, built with Vite and deployed to GitHub Pages by a GitHub Actions workflow.',
    tags: ['React', 'Tailwind', 'GitHub Actions'],
    href: 'https://github.com/NetoJunior/netojunior.github.io',
  },
  {
    // TODO: replace with a real project
    title: 'Your backend project',
    description:
      'Describe a real API or data project here: what problem it solves, the data model, and how it runs on Azure.',
    tags: ['ASP.NET', 'SQL Server', 'Azure'],
    href: 'https://github.com/NetoJunior',
  },
  {
    // TODO: replace with a real project
    title: 'Your next project',
    description: 'One or two sentences on what it does and what you learned building it.',
    tags: ['.NET', 'MongoDB'],
    href: 'https://github.com/NetoJunior',
  },
]
