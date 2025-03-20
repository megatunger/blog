type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'McKinsey & Company',
    title: 'Engineer I',
    start: 'May 2024',
    end: 'March 2025',
    id: 'work1',
  },
  {
    company: 'McKinsey & Company',
    title: 'Junior Software Engineer',
    start: 'August 2022',
    end: 'April 2024',
    id: 'work2',
  },
  {
    company: 'uCall',
    title: 'Co-Founder',
    start: 'January 2021',
    end: 'now',
    id: 'work3',
  },
  {
    company: 'SmartOSC',
    title: 'Frontend / Mobile Developer',
    start: 'January 2021',
    end: 'May 2022',
    id: 'work4',
  },
  {
    company: 'Freelance',
    title: 'Freelance Developer',
    start: '2019',
    end: '2022',
    id: 'work5',
  },
  {
    company: 'TEKO Viet Nam',
    title: 'Software Engineer Intern',
    start: 'June 2020',
    end: 'December 2020',
    id: 'work6',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/megatunger',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/thomas_ignore',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/megatunger',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/megatunger',
  },
]

export const DESCRIPTION = `
This blog is a collection of my thoughts, ideas, and experiences. I write about my journey through software engineering, some photography lessons, some travel stories, some you-may-not-know music, and some psychology or philosophy...All are random, but I hope you find something interesting.

"Someday, I will connect all the dots."
`

export const TOPICS = 'Software 💻 / Photography 📸 / Traveling ✈️ / Music 🎧 / Psychology 🧠'

export const EMAIL = 'contact@megatunger.com'
