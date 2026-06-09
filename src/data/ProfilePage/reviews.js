import dayjs from 'dayjs'

export const Reviews = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Apex Build Co.',
    profile: '/profile.png',
    username: 'apexbuild',
    accountTYpe: 'Recruiter'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 2,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Remi Marthin',
    profile: '/profile.png',
    username: 'remimarthin',
    accountTYpe: 'Freealancer'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 3,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Zanra Tanka',
    profile: '/profile.png',
    username: 'zanratanka',
    accountTYpe: 'Team'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 5,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Amara Osei',
    profile: '/profile.png',
    username: 'amaraosei',
    accountTYpe: 'Recruiter'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 4,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
  reply: 'Thank you so mucn - it was a pleasure working on this. The scope was clear from the start which made delivery smooth. Looking forward to the next one.'
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Levi Blaque',
    profile: '/profile.png',
    username: 'realleviblaque',
    accountTYpe: 'Freelancer'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 5,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
  reply: 'Thank you so mucn - it was a pleasure working on this. The scope was clear from the start which made delivery smooth. Looking forward to the next one.'
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'DevConnect',
    profile: '/profile.png',
    username: 'devconnect',
    accountTYpe: 'Team'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 4,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  sender: {
    id: crypto.randomUUID(),
    name: 'Apex Build Co.',
    profile: '/profile.png',
    username: 'apexbuild',
    accountTYpe: 'Recruiter'
  },
  project: {
    id: crypto.randomUUID(),
    title: 'E-Commercr Platform Rebuild'
  },
  stars: 5,
  reviewMessage: 'Levi delivered an exceptional full e-commerce rebuild - clean architecture, well-documented code, and ahead of deadline by 4 days. The Strip integration was flawless and the admin panel exceeded our expectations. Communication throughout was clear and proactive. Will definetely work with him again on our next project.',
  reply: 'Thank you so mucn - it was a pleasure working on this. The scope was clear from the start which made delivery smooth. Looking forward to the next one.'
}]