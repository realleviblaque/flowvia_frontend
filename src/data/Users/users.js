import dayjs from "../../lib/dayjs";

export const Users = [{
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Busy', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: false,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: false,
    isVerified: false,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'levite',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Busy', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Busy', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Freelancer',
  teamEnabled: false, // true if team created
  teamId: null, // team id if team created
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque',
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    status: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'realleviblaque@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // ccompany name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.', // company description/bio
    title: 'SaaS Company',
    website: 'leviblaque.dev',
    location: 'Lagos, Nigeria',
    counts: {
      following: 318,
      followers: 20520,
      posts: 312,
      candidatesHired: 50
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: false,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  companyDetails: { // optional
    inductry: 'Technology',
    companySize: '1-5',
  }
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    image: '/profile.png',
    name: 'Levi Blaque', // team name
    username: 'realleviblaque',
    bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae perferendis quasi nisi molestias nobis ea minus, earum voluptatum consectetur consequatur deleniti quos suscipit iste ipsum doloribus, neque magni quia ipsa.',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: 'Forex Trader',
    location: 'Lagos, Nigeria',
    counts: {
      member: 5,
      following: 318,
      followers: 20520,
      posts: 312,
      project: 20
    },
  },
  rates: {
    perHour: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 300,
      max: 2000
    }
  },
  skills: [{
    id: crypto.randomUUID(),
    name: 'Frontend'
  }, {
    id: crypto.randomUUID(),
    name: 'Backend'
  }, {
    id: crypto.randomUUID(),
    name: 'UI Design'
  }, {
    id: crypto.randomUUID(),
    name: 'Mobile Dev'
  }, {
    id: crypto.randomUUID(),
    name: 'DevOps'
  }, {
    id: crypto.randomUUID(),
    name: 'Reaxt'
  }],
  info: {
    isVerified: true,
    openToWork: true,
    openToHire: false,
    ratings: 4.0,
    reviews: 50,
    status: 'Open', // Open, Busy
  },
  teamDetails: {
    teamSize: '0-5', // initial size
    members: [{ // Creator is first member
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }, {
      userId: crypto.randomUUID(),
      name: 'Levi Blaque',
      roles: 'Admin', // Admin, Member, Moderator or Custom roles
      status: 'Available', // Available or Away
    }]
  }
}]