import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AI Career Research',
  description: 'Explore AI job titles, career paths, and evidence of demand in the United States.',
  base: '/ai-career-research/',
  themeConfig: {
    nav: [
      { text: 'FDE research', link: '/fde/' },
      { text: 'NY & NJ jobs', link: '/ny-nj-jobs' },
      { text: 'Career profiles', link: '/roles' },
      { text: 'Growth evidence', link: '/outlook' }
    ],
    search: { provider: 'local' },
    sidebar: {
      '/fde/': [
        { text: 'Forward deployed engineering', items: [
          { text: 'Compare roles', link: '/fde/' },
          { text: 'Skills', link: '/fde/skills' },
          { text: 'Sources and method', link: '/fde/sources' }
        ] },
        { text: 'Internships', collapsed: true, items: [
          { text: 'Palantir commercial internship', link: '/fde/roles/palantir-commercial-intern' },
          { text: 'Palantir year-long internship', link: '/fde/roles/palantir-year-intern' },
          { text: 'Coinbase HR technology internship', link: '/fde/roles/coinbase-hr-intern' },
          { text: 'Google Cloud FDE internship', link: '/fde/roles/google-cloud-intern' },
        ] },
        { text: 'Graduate full-time', collapsed: true, items: [
          { text: 'Palantir commercial graduate', link: '/fde/roles/palantir-commercial-graduate' },
          { text: 'Palantir infrastructure graduate', link: '/fde/roles/palantir-infrastructure-graduate' },
        ] },
        { text: 'Experienced full-time', collapsed: true, items: [
          { text: 'Palantir applied AI', link: '/fde/roles/palantir-ai' },
          { text: 'Teleskope data security', link: '/fde/roles/teleskope-security' },
          { text: 'Modal ML infrastructure', link: '/fde/roles/modal-ml' },
          { text: 'OpenAI software deployment', link: '/fde/roles/openai-software' },
          { text: 'PagerDuty SRE agent', link: '/fde/roles/pagerduty-sre' },
          { text: 'Citi payments director', link: '/fde/roles/citi-director' },
        ] },
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/NorthernLadd/ai-career-research' }],
    outline: { level: 2, label: 'On this page' }
  }
})
