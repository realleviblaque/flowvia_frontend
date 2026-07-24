import dayjs from "dayjs";

export const activeProject = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  projectType: 'Client Project',
  createdFrom: 'Client Work',
  isDelivered: false,
  isPaused: true,
  details: {
    name: 'FinDash - Fintech Analytics Platform',
    image: '/profile.png',
    description: 'Building a real-time fintech dashboard with portfolioa analytics, transaction tracking, and custom charting.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Amara Osei',
    image: '/profile.png',
    username: 'amaraosei',
    accountType: 'Recruiter'
  },
  info: {
    budget: 3200,
    deadline: dayjs().toISOString(),
    daysLeft: 47,
    totalTask: 8,
    completedTask: 2
  },
  phases: [{
    id: crypto.randomUUID(),
    name: 'Design',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Frontend',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Backend',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'QA',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'Launch',
    isComplete: false
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  projectType: 'Client Project',
  createdFrom: 'Public Listing',
  isDelivered: false,
  isPaused: false,
  details: {
    name: 'E-Commerce Platform Rebuild',
    image: '/profile.png',
    description: 'Pulling e-commerce rebuild with cart, checkout, inventory management, and Strip payments.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Apex Build Co.',
    image: '/profile.png',
    username: 'apexbuild',
    accountType: 'Recruiter'
  },
  info: {
    budget: 8500,
    deadline: dayjs().toISOString(),
    daysLeft: 14,
    totalTask: 26,
    completedTask: 21
  },
  phases: [{
    id: crypto.randomUUID(),
    name: 'Design',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Frontend',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Backend',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'QA',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Launch',
    isComplete: false
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  projectType: 'Client Project',
  createdFrom: 'Client Work',
  isDelivered: false,
  isPaused: false,
  details: {
    name: 'Fintech Analytics Platform',
    image: '/profile.png',
    description: 'Building a real-time fintech dashboard with portfolioa analytics, transaction tracking, and custom charting.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Levite Team',
    image: '/profile.png',
    username: 'leviteteam',
    accountType: 'Team'
  },
  info: {
    budget: 8000,
    deadline: dayjs().toISOString(),
    daysLeft: 20,
    totalTask: 15,
    completedTask: 8
  },
  phases: [{
    id: crypto.randomUUID(),
    name: 'Design',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Frontend',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Backend',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'QA',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'Launch',
    isComplete: false
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  projectType: 'Client Project',
  createdFrom: 'Public Listing',
  isDelivered: false,
  isPaused: false,
  details: {
    name: 'Landing Page Website',
    image: '/profile.png',
    description: 'Pulling e-commerce rebuild with cart, checkout, inventory management, and Strip payments.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Sonnia Alvress.',
    image: '/profile.png',
    username: 'sonniaalverss',
    accountType: 'Freelancer'
  },
  info: {
    budget: 3000,
    deadline: dayjs().toISOString(),
    daysLeft: 30,
    totalTask: 19,
    completedTask: 6
  },
  phases: [{
    id: crypto.randomUUID(),
    name: 'Design',
    isComplete: true
  }, {
    id: crypto.randomUUID(),
    name: 'Frontend',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'Backend',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'QA',
    isComplete: false
  }, {
    id: crypto.randomUUID(),
    name: 'Launch',
    isComplete: false
  }]
}]