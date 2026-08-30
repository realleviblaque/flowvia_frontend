import dayjs from "../../lib/dayjs";

export const Clients = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  profile: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    accountType: 'Freelancer',
    title: 'Full Stack Developer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas unde accusantium, veniam assumenda minus excepturi lor',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    }
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 5000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  profile: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'DevConect',
    username: 'devconnectofficial',
    accountType: 'Team',
    title: 'Full Stack Team',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas unde accusantium, veniam assumenda minus excepturi lor',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    }
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 7200
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(1, 'month').toISOString(),
    amount: 8600,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  profile: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'David Kelechikwu Okaofor',
    username: 'davidkele',
    accountType: 'Freelancer',
    title: 'UI/UX Designer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas unde accusantium, veniam assumenda minus excepturi lor',
    info: {
      isOnline: false,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    }
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(4, 'month').toISOString(),
    amount: 800,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  profile: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Delight Restar',
    username: 'delightrestar',
    accountType: 'Recruiter',
    title: 'Delightful Recruiter',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas unde accusantium, veniam assumenda minus excepturi lor',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: true
    }
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'Analytics Dashboard Design',
    createdAt: dayjs().toISOString(),
    amount: 8000
  }, {
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 11200,
  }]
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  profile: {
    id: crypto.randomUUID(),
    image: '/profile.png',
    name: 'Taiwo Musa Ibrahim',
    username: 'taiwoibro',
    accountType: 'Freelancer',
    title: 'Backend Developer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas unde accusantium, veniam assumenda minus excepturi lor',
    info: {
      isOnline: true,
      lastSeenAt: dayjs().toISOString(),
      isVerified: false
    }
  },
  history: [{
    id: crypto.randomUUID(),
    title: 'E-Commerce Rebuild - Frontend',
    createdAt: dayjs().subtract(2, 'month').toISOString(),
    amount: 6400,
  }]
}]