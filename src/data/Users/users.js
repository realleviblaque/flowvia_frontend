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
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    firstName: 'Levi',
    lastName: 'Blaque',
    username: 'realleviblaque',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    workPreference: 'Remote',  
    additionalTitle: null,
    location: null,
    counts: {
      following: 300,
      followers: 1200,
      posts: 0,
      project: 0
    },
  },
  rates: {
    hourlyRate: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 500,
      max: 3000
    }
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    availability: 'Available', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  },
  workedWith: [],
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
    name: 'React'
  }],
  links: [/* {
    id: crypto.randomUUID(),
    name: 'X',
    url: 'github.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Tiktok',
    url: 'tiktok.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Snapchat',
    url: 'snapchat.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Telegram',
    url: 'telegram.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Discord',
    url: 'discord.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Linkedin',
    url: 'linkedin.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Github',
    url: 'github.com/realleviblaque'
  } */],
  reviews: []
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  email: 'recruclient@gmail.com',
  password: 'hasedPassword',
  accountType: 'Recruiter',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    companyName: 'Flowvia Ltd.',
    username: 'flowvia',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    additionalTitle: null,
    location: null,
    counts: {
      following: 300,
      followers: 1200,
      posts: 0,
      candidatesHired: 0
    },
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToHire: true,
    ratings: 4.0,
    reviewsGiven: 50,
    lastActive: dayjs().toISOString(),
  },
  workedWith: [],
  skills: [],
  links: [/* {
    id: crypto.randomUUID(),
    name: 'X',
    url: 'github.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Tiktok',
    url: 'tiktok.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Snapchat',
    url: 'snapchat.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Telegram',
    url: 'telegram.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Discord',
    url: 'discord.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Linkedin',
    url: 'linkedin.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Github',
    url: 'github.com/realleviblaque'
  } */],
  reviews: []
}, {
  id: crypto.randomUUID(),
  createdAt: dayjs().toISOString(),
  updatedAt: dayjs().toISOString(),
  createdBy: crypto.randomUUID(), // ID of creator (Freelancer)
  accountType: 'Team',
  profile: {
    //image: '/profile.png',
    //coverPicture: '/profile.png',
    teamName: 'Levite Team',
    username: 'realleviteteam',
    bio: 'I am a forex trader and a full stack developer, founder and leader',
    title: 'Full-Stack Developer',
    website: 'leviblaque.dev',
    workPreference: 'Remote',  
    additionalTitle: null,
    location: null,
    counts: {
      following: 300,
      followers: 1200,
      posts: 0,
      project: 0
    },
  },
  rates: {
    hourlyRate: {
      min: 15,
      max: 40
    },
    perProject: {
      min: 500,
      max: 3000
    }
  },
  info: {
    isOnline: true,
    isVerified: true,
    openToWork: true,
    openToHire: false,
    availability: 'Open', // Available, Busy
    ratings: 4.0,
    reviews: 50,
    lastActive: dayjs().toISOString(),
  },
  workedWith: [],
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
  reviews: [],
  links: [/* {
    id: crypto.randomUUID(),
    name: 'X',
    url: 'github.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Tiktok',
    url: 'tiktok.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Snapchat',
    url: 'snapchat.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Telegram',
    url: 'telegram.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Discord',
    url: 'discord.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Linkedin',
    url: 'linkedin.com/realleviblaque'
  }, {
    id: crypto.randomUUID(),
    name: 'Github',
    url: 'github.com/realleviblaque'
  } */],
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