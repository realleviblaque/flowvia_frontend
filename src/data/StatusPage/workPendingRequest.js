import dayjs from 'dayjs'

export const workPendingRequest = [{
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-07-26'),
  workBefore: 0,
  details: {
    name: 'Direct Hire - Full Stack for MVP Build',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Nadia James',
    image: '/profile.png',
    username: 'nadiajames',
    title: 'Startup Founder'
  },
  info: {
    budget: 4200,
    duration: '3 months',
    type: 'Remote',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  workBefore: 2,
  details: {
    name: 'Direct Hire - React Dashboard Upgrade',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    image: '/profile.png',
    username: 'realleviblaque',
    title: 'Startup Founder'
  },
  info: {
    budget: 4200,
    duration: '3 months',
    type: 'Remote',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-07-27'),
  workBefore: 0,
  details: {
    name: 'Direct Hire - Motion Design for Brand Campaign',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Dev Connect',
    image: '/profile.png',
    username: 'devconnect',
    title: 'Startup Founder'
  },
  info: {
    budget: 4200,
    duration: '3 months',
    type: 'Remote',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs('2026-07-25'),
  workBefore: 1,
  details: {
    name: 'Direct Hire - Full Stack for MVP Build',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Nadia James',
    image: '/profile.png',
    username: 'nadiajames',
    title: 'Startup Founder'
  },
  info: {
    budget: 4200,
    duration: '3 months',
    type: 'Remote',
  }
}];