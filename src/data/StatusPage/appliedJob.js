import dayjs from "dayjs";

export const appliedJob = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  status: 'Pending',
  details: {
    name: 'React Developer needed - SaaS Dashboard',
    image: '/profile.png',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Amara Osei',
    image: '/profile.png',
    username: 'amaraosei',
    accountType: 'Recruiter',
    title: 'Editech Startup'
  },
  info: {
    minBuget: 2000,
    maxBudget: 5000,
    type: 'Long-Term Contract',
    deadline: dayjs().toISOString(),
    applicant: 12
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'D3.js'
  }, {
    id: crypto.randomUUID(),
    name: 'TypeScript'
  }, {
    id: crypto.randomUUID(),
    name: 'REST APIs'
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  status: 'In Review',
  details: {
    name: 'Full Stack Developer - E-commerce Platform',
    image: '/profile.png',
    description: 'Looking for full-stack developer to build an e-commerce store with product management, payment processing, and an admin dashborad.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Remi Martin',
    image: '/profile.png',
    username: 'remimartin',
    accountType: 'Recruiter',
    title: 'Agency'
  },
  info: {
    minBuget: 2000,
    maxBudget: 5000,
    type: 'Long-Term Contract',
    deadline: dayjs().toISOString(),
    applicant: 8
  },
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  status: 'Accepted',
  details: {
    name: 'React Developer for Flowvia Collaboration Platform Build',
    image: '/profile.png',
    description: 'Looking for a React developer to help build Flowvia, a collaoraton platform.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    image: '/profile.png',
    username: 'realleviblaque',
    accountType: 'Freelancer',
    title: 'Full-Stack Developer'
  },
  info: {
    minBuget: 4000,
    maxBudget: 12600,
    type: 'Long-Term Contract',
    deadline: dayjs().toISOString(),
    applicant: 14
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'React'
  }, {
    id: crypto.randomUUID(),
    name: 'JavaScript'
  }, {
    id: crypto.randomUUID(),
    name: 'MERN'
  }, {
    id: crypto.randomUUID(),
    name: 'REST APIs'
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  status: 'In Review',
  details: {
    name: 'UI/UX redesign for Flowvia Collaboration Platform Build',
    image: '/profile.png',
    description: 'Looking for a UI/UX Desiger to help redesign Flowvia UI, a collaoraton platform.'
  },
  client: {
    id: crypto.randomUUID(),
    name: 'Derryk Kane',
    image: '/profile.png',
    username: 'derrykkane',
    accountType: 'Recruiter',
    title: 'Full-Stack Developer'
  },
  info: {
    minBuget: 800,
    maxBudget: 2600,
    type: 'One-Time Project',
    deadline: dayjs().toISOString(),
    applicant: 4
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'UI/UX'
  }, {
    id: crypto.randomUUID(),
    name: 'Graphic Design'
  }]
}]