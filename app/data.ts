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
  // {
  //   name: 'Motion Primitives Pro',
  //   description:
  //     'Advanced components and templates to craft beautiful websites.',
  //   link: 'https://pro.motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
  //   id: 'project1',
  // },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'McKinsey & Company',
    title: 'Software Engineer',
    start: 'August 2022',
    end: 'March 2025',
    id: 'work1',
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
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Think first, Prompts after',
    description: 'The copy-paste from Chat',
    link: '/blog/think-first-prompts-after',
    uid: 'think-first-prompts-after',
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
A collection of my thoughts, ideas, and experiences."
`

export const TOPICS = 'Software, Photography, Traveling️, Music, Psychology'

export const EMAIL = 'contact@megatunger.com'
