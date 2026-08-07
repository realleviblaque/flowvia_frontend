import dayjs from '../../lib/dayjs'

export const takenProjects = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  isCompleted: false,
  projects: {
    id: crypto.randomUUID(),
    status: 'taken',
    name: 'UI Designer for Flowvi Design System',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.',
    info: {
      budget: 2200,
      deadline: dayjs('2026-08-15').toISOString(),
      progressPercent: 75
    }
  },
  freelancer: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Amara Osei',
    username: 'amaraosei',
    accountType: 'Freelancer',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  isCompleted: false,
  projects: {
    id: crypto.randomUUID(),
    status: 'taken',
    name: 'NodeJS Backend Developer Needed',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.',
    info: {
      budget: 6600,
      deadline: dayjs('2026-09-11').toISOString(),
      progressPercent: 42
    }
  },
  freelancer: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    accountType: 'Freelancer',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  isCompleted: false,
  projects: {
    id: crypto.randomUUID(),
    status: 'taken',
    name: 'Full Company Web Application - Full-Time - Full-Stack Developer Team Needed',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.',
    info: {
      budget: 8400,
      deadline: dayjs('2026-09-18').toISOString(),
      progressPercent: 37
    }
  },
  freelancer: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'DevConnect',
    username: 'devconnect',
    accountType: 'Team',
  }
}]