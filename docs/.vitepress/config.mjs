import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Research',
  description: 'Explore AI job titles, career paths, and evidence of demand in the United States.',
  base: '/ai-career-research/',
  themeConfig: {
    nav: [
      { text: 'Career profiles', link: '/roles' },
      { text: 'Growth evidence', link: '/outlook' }
    ],
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/NorthernLadd/ai-career-research' }],
    outline: { level: 2, label: 'On this page' }
  }
})
