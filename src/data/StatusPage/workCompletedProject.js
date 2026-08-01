import dayjs from "../../lib/dayjs";

export const workCompletedProject = [{
  id: crypto.randomUUID(),
  createdAt: dayjs('2025-03-01').toISOString(),
  repeatClient: true,
  details: {
    name: 'FinTech Dashboard - React & Node.js',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Apex Build Co.',
    image: '/profile.png',
    username: 'apexbuild',
    accountType: 'Recruiter'
  },
  info: {
    earned: 8400,
    duration: '3 months',
    rating: 5,
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  repeatClient: true,
  details: {
    name: 'FX Signal Bot - Python Backend',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Nadia James',
    image: '/profile.png',
    username: 'nadiajames',
    accountType: 'Freelancer'
  },
  info: {
    earned: 8200,
    duration: '4 weeks',
    rating: 5,
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  repeatClient: false,
  details: {
    name: 'E-Commerce Platform Rebuild',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Remi Martin',
    image: '/profile.png',
    username: 'martin',
    accountType: 'Freelancer'
  },
  info: {
    earned: 5800,
    duration: '8 weeks',
    rating: 4.8,
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  repeatClient: true,
  details: {
    name: 'EdTech SaaS - Learning Management System',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Kunle Adeyemi',
    image: '/profile.png',
    username: 'kunleadeyemi',
    accountType: 'Freelancer'
  },
  info: {
    earned: 7200,
    duration: '10 weeks',
    rating: 4.9,
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  repeatClient: false,
  details: {
    name: 'SaaS Analytics Dashboard Overhaul',
    image: '/profile.png',
    description: 'Brand new product, need a full-stack developer to build the entire MVP from scratch. React fronted, Node.js, PostgreSQL. 3-month engagement.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'TechFlow Inc.',
    image: '/profile.png',
    username: 'techflowinc',
    accountType: 'Team'
  },
  info: {
    earned: 4900,
    duration: '6 weeks',
    rating: 0,
  }
}]