import dayjs from '../../lib/dayjs';

export const inNegotiation = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iusto esse recusandae reiciendis, animi temporibus rem cupiditate aliquam officia repellendus culpa nulla nostrum quidem repudiandae nisi eius. Officiis, accusantium eaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsam saepe impedit dolore dignissimos non, eveniet natus blanditiis voluptas doloribus voluptatem distinctio veniam eius fugiat sequi consequuntur atque molestiae!',
  projects: {
    id: crypto.randomUUID(),
    status: 'Shortlisted',
    name: 'React Developer needed - SaaS Dashboard',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.',
    budget: {
      min: 500,
      max: 2000
    }
  },
  applicant: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Zara Tanaka',
    username: 'zaratanaka',
    accountType: 'Freelancer',
    title: 'Frontend Dev',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, iure. Eaque odit ipsam iste modi dicta necessitatibus tempore perspiciatis est molestiae iure a fugiat sed reiciendis, aut amet velit. Dolorum!',
    totalJobs: 12,
    priceRange: {
      min: 600,
      max: 1800
    }
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A iusto esse recusandae reiciendis, animi temporibus rem cupiditate aliquam officia repellendus culpa nulla nostrum quidem repudiandae nisi eius. Officiis, accusantium eaque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsam saepe impedit dolore dignissimos non, eveniet natus blanditiis voluptas doloribus voluptatem distinctio veniam eius fugiat sequi consequuntur atque molestiae!',
  projects: {
    id: crypto.randomUUID(),
    status: 'Shortlisted',
    name: 'NodeJS Developer needed - Backend Service',
    description: 'Full-time contact position building a SaaS analyics dashboard with custom charts, real-time data, and an admin portal.',
    budget: {
      min: 900,
      max: 4700
    }
  },
  applicant: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    accountType: 'Freelancer',
    title: 'Full-Stack Developer',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, iure. Eaque odit ipsam iste modi dicta necessitatibus tempore perspiciatis est molestiae iure a fugiat sed reiciendis, aut amet velit. Dolorum!',
    totalJobs: 8,
    priceRange: {
      min: 800,
      max: 2500
    }
  }
}]