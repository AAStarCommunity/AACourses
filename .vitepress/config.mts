import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AACourses",
  description: "A collection of Blockchain Account courses including AA.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wishes', link: '/Wishes/index.md' }
    ],

    sidebar: [
      {
        text: 'Courses',
        items: [
          { text: 'Industry', link: '/courses/AA-industry/index.md' },
          { text: 'Learn and Dev', link: '/courses/AA-learn/index.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})
