import dayjs from "../../lib/dayjs";

export const user = {
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
}