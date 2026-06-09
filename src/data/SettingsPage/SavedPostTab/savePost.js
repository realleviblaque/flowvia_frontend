import dayjs from 'dayjs'

export const SavePost = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  post: {
    id: crypto.randomUUID(),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
  },
  user: {
    name: 'Amara Osei',
    username: 'amaraosei',
    profile: '/profile.png',
    accountType: 'Freelancer'
  },
  hastags: [{
    id: crypto.randomUUID(),
    tags: 'Figma'
  }, {
    id: crypto.randomUUID(),
    tags: 'DesignSystem'
  }, {
    id: crypto.randomUUID(),
    tags: 'shipping'
  }],
  project: {
    title: 'FinDash Design System',
    projectType: 'Client Project',
    category: 'UI Design',
    phase: 'Phase 3',
    totalPhase: 4
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  post: {
    id: crypto.randomUUID(),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
  },
  user: {
    name: 'Apex Build Co.',
    username: 'apexbuild',
    profile: '/profile.png',
    accountType: 'Recruiter'
  },
  job: {
    title: 'React Developer - Fintech Platform',
    minBud: 3,
    maxBud: 8,
    type: 'Remote',
    deadline: 'June 20, 2026'
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  post: {
    id: crypto.randomUUID(),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
  },
  user: {
    name: 'Tunde Nwosu',
    username: 'tundenwosu',
    profile: '/profile.png',
    accountType: 'Freelancer'
  },
  hastags: [{
    id: crypto.randomUUID(),
    tags: 'freelance'
  }, {
    id: crypto.randomUUID(),
    tags: 'nigeria'
  }, {
    id: crypto.randomUUID(),
    tags: 'devlife'
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  post: {
    id: crypto.randomUUID(),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla delectus blanditiis reiciendis vero deserunt debitis',
    image: '/profile.png'
  },
  user: {
    name: 'Zara Tanaka',
    username: 'zaratanaka',
    profile: '/profile.png',
    accountType: 'Team'
  },
  hastags: [{
    id: crypto.randomUUID(),
    tags: 'freelance'
  }, {
    id: crypto.randomUUID(),
    tags: 'react'
  }, {
    id: crypto.randomUUID(),
    tags: 'growthmindset'
  }]
}]